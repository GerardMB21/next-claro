import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/slices/modal.slice";


export default function Help() {

  const dispatch = useDispatch();

  const number = useSelector(state=>state.number);

  const close = ()=>{
    dispatch(setModal({
      help: false
    }));
  };

  return (
    <div className="helpBx">
      <span className="close" onClick={()=>close()}>
        <ion-icon name="close-outline"></ion-icon>
      </span>
      <div className="title">
        <p>Llamar desde cualquier dispositivo u operadora</p>
      </div>
      <div className="number">
        <a href={`tel:${number.help}`}>
          <ion-icon name="call"></ion-icon>
          {`(${number.help.slice(0,2)}) ${number.help.slice(2)}`}
        </a>
      </div>
    </div>
  )
}
