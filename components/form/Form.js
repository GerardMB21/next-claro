import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/slices/modal.slice";


export default function Form({number,modal = false}) {

  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const service = useSelector(state=>state.number);
  // const modalActive = useSelector(state=>state.modal);

  const [activate,setActivate] = useState(false); 

  const defaultValue = {
    number: ''
  };

  const change = value=>{
    value.value = value.value.replace(/[^0-9]/g,'');
    setActivate(false);
    if (value.value.length >= 9) {
      setActivate(true);
      return value.value = value.value.slice(0,9);
    };
  };

  const submit =async data=>{
    if (data.number.trim() && activate) {
      const url = "https://ws-dacar-ica.octopus-latam.com/?";

      const body = new URLSearchParams();

      body.append("service", service?.service);
      body.append("username", service?.userName);
      body.append("password", service?.password);
      body.append("telephone", data.number.trim());
      body.append("tsource", null);
      body.append("ip", "127.0.0.1");

      try {
        const res =await axios.post(`${url}${body.toString()}`);
        dispatch(setModal(false));
        console.log(res.data);
      } catch (error) {
        console.log(error);
      };
    };
    reset(defaultValue);
  };

  const close = ()=>{
    dispatch(setModal({
      form: false
    }));
  };

  return (
    <div className={ modal ? 'formBx modal' : 'formBx' }>
      <form onSubmit={handleSubmit(submit)}>
        <div className={ modal ? 'noModal display-none' : 'noModal' }>
          <span>seguimos conectando hogares</span>
          <p>50% de descuento<br/> hasta por 3 meses</p>
          <label htmlFor='number'>Déjanos tu numero y te llamaremos</label>
        </div>
        <div className={ modal ? 'modal' : 'modal display-none' }>
          <span className="close" onClick={()=>close()}>
            <ion-icon name="close-outline"></ion-icon>
          </span>
          <p>¡Buena elección!</p>
          <span>Llámanos gratis al</span>
          <a href={`tel:${number}`}>
            <ion-icon name="call"></ion-icon>
            {`(${number?.slice(0,2)}) ${number?.slice(2)}`}
          </a>
          <span>O, si prefieres déjanos tus datos y te llamaremos inmediatamente ...</span>
        </div>
        <div className='inputBx'>
          <input type={'number'} id='number' {...register('number')} onChange={e=>change(e.target)}/>
        </div>
        <label className='strong'>*Ingrese su numero sin anteponer (51)</label>
        <div className={ modal ? 'buttonBx modal' : 'buttonBx' }>
          <button className={ activate ? 'activate' : 'disabled' }>solicitar llamada</button>
        </div>
      </form>
    </div>
  )
}
