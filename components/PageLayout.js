import Head from "next/head";
import Script from "next/script";
import dc from '../img/logo-dc.webp';
import logo from '../img/distribuidor.webp';
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setScroll } from "../store/slices/scroll.slice";
import { useRouter } from "next/router";
import Modal from "./modal/Modal";
import Form from "./form/Form";
import { setSection } from "../store/slices/section.slice";
import Help from "./help/Help";
import { setModal } from "../store/slices/modal.slice";
import Details from "./details/Details";
import PhoneDetails from "./phoneDetails/PhoneDetails";
import { setNumber } from "../store/slices/number.slice";

export default function PageLayout({children}) {

  const router = useRouter();
  const query = router.asPath.includes("?") ? router.asPath.split("?").pop() : '';

  const dispatch = useDispatch();

  const scroll = useSelector(state=>state.scroll);
  const number = useSelector(state=>state.number);
  const modal = useSelector(state=>state.modal);

  const [activate,setActivate] = useState(false);
  const [numberPage,setNumberPage] = useState(number.hogar);

  let page;
  let search;
  let href;
  if (typeof window !== 'undefined') {
    page = window;
    search = window.location.search;
    href = window.location.href;
    window.addEventListener('scroll',()=>{
      const top = window.scrollY;
      dispatch(setScroll(!(!top)));
      setActivate(false);
    });
  };

  const top = ()=>{ 
    page.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const reset = ()=>{
    dispatch(setSection(0));
  };

  const activeHelp = ()=>{
    dispatch(setModal({
      help: true
    }));
  };

  const activePrivacy = ()=>{
    dispatch(setModal({
      privacy: true
    }));
  };

  useEffect(()=>{

    if (href?.includes("moviles")) {
      setNumberPage("016805992")
    };

    if (search.toLowerCase().includes("01brand")) {
      dispatch(setNumber({
        hogar: "016806301",
        movil: "016806301",
        help: "016806465",
        service: "PeruHfc1",
        userName: "dacar",
        password: "O8Sw36BwGurYZcFU9vsa"
      }));
      setNumberPage("016806301");
    };

    if (search.toLowerCase().includes("02genfibra")) {
      dispatch(setNumber({
        hogar: "016806303",
        movil: "016806303",
        help: "016806465",
        service: "PeruHfc3",
        userName: "dacar",
        password: "O8Sw36BwGurYZcFU9vsa"
      }));
      setNumberPage("016806303");
    };

    if (search.toLowerCase().includes("03geninternet")) {
      dispatch(setNumber({
        hogar: "016806302",
        movil: "016806302",
        help: "016806465",
        service: "PeruHfc2",
        userName: "dacar",
        password: "O8Sw36BwGurYZcFU9vsa"
      }));
      setNumberPage("016806302");
    };

    if (search.toLowerCase().includes("04contratar")) {
      dispatch(setNumber({
        hogar: "016806304",
        movil: "016806304",
        help: "016806465",
        service: "PeruHfc4",
        userName: "dacar",
        password: "O8Sw36BwGurYZcFU9vsa"
      }));
      setNumberPage("016806304");
    };

  },[dispatch,search,href]);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Claro Hogar ??Promociones exclusivas en internet, cable y TV!</title>
        <link rel="icon" href="/favicon-claro.png" />
      </Head>
      {
        modal?.form ?
        <Modal>
          <Form modal={true} number={numberPage}/>
        </Modal> :
        <></>
      }
      {
        modal?.help ?
        <Modal>
          <Help />
        </Modal> :
        <></>
      }
      {
        modal?.details ?
        <Modal>
          <Details>
            <h3>Debes Saber</h3>
            <div>
              <ul>
                <li>
                  <p>Aplica para clientes con DNI y RUC 10.</p>
                </li>
                <li>
                  <p>Las l??neas Postpago mencionadas anteriormente deber??n haber sido contratadas y activadas dentro de la vigencia de la promoci??n.</p>
                </li>
                <li>
                  <p>La contrataci??n de una l??nea en Portabilidad se encuentra sujeta a evaluaci??n crediticia.</p>
                </li>
                <li>
                  <p>El descuento aplicar?? en el primer o 3 primeros cargos fijos mensuales correspondientes al plan Postpago contratado y de acuerdo a la modalidad elegida.</p>
                </li>
                <li>
                  <p>El bono de Internet ilimitado se consumir?? luego de agotar los megas del plan.</p>
                </li>
                <li>
                  <p>El bono se aplicar?? desde el primer ciclo de facturaci??n.</p>
                </li>
                <li>
                  <p>Se perder?? el beneficio si ocurre uno de los siguientes eventos: <strong>Cambio de plan</strong>  (incluyendo los cambios a otro plan postpago,plan prepago o plan corporativo), <strong>Cambio de titularidad</strong></p>
                </li>
              </ul>
            </div>
          </Details>
        </Modal> :
        <></>
      }
      {
        modal?.full ?
        <Modal>
          <Details>
            <h3>Quiero ser FullClaro ??Qu?? hago?</h3>
            <div>
              <ul>
                <li>
                  <p>Si eres Claro en casa y en tu celular ??eres FullClaro! solo debes contar con un plan MAX desde S/ 29.90 m??s un plan de Internet Fijo (en tecnolog??a HFC y FTTH) en 1 Play desde S/ 60, 2 Play: Internet + Telefon??a desde S/ 70 o Internet + Televisi??n desde S/ 125 o 3 Play desde S/ 135.</p>
                </li>
                <li>
                  <p>Los beneficios son: hasta el 50% mas velocidad en el internet de casa, hasta el 50% mas gigas en el celular y Claro Musica ilimitado gratis.</p>
                </li>
                <li>
                  <p>Si eres fullclaro puedes activar tu beneficio llamando al 123 y podr??s disfrutar m??s internet gratis para tu casa y tu celular.</p>
                </li>
              </ul>
            </div>
          </Details>
        </Modal> :
        <></>
      }
      {
        modal?.privacy ?
        <Modal>
          <Details privacy={true}>
            <h4>POLITICAS DE PRIVACIDAD</h4>
            <div>
              <p>COMPANY D&C DIGITAL GROUP S.A.C., es una sociedad interesada en garantizar, respetar y cumplir de manera estricta el derecho fundamental de protecci??n de los datos personales, previsto en el art??culo 2, numeral 6, de la Constituci??n Pol??tica del Per??, realizando el almacenamiento de datos, utilizando est??ndares de alta calidad, con la finalidad de mantener la confidencialidad de los mismos, cumpliendo con lo ordenado en la Ley de Protecci??n de Datos Personales - Ley N?? 29733, reglamento de ley aprobado por el decreto supremo N?? 003-2013-JUS, o cualquier otra norma que derogue y/o modifique las normas existentes.</p>
              <p>Como es nuestra intenci??n, mantener una relaci??n duradera, es importante que usted nos otorgue su aprobaci??n para acceder a sus datos personales, para ello es necesario brindarle la siguiente informaci??n:</p>
              <h5>1.- ??Qu?? son los datos personales?</h5>
              <p>Conforme a la ley, los datos personales es toda informaci??n sobre una persona natural que la identifica o la hace identificable a trav??s de medios que pueden ser razonablemente utilizados. Tenemos, por ejemplo, los datos de car??cter identificativo, como lo son nombres, apellidos, N.?? de DNI, N.?? de RUC, N.?? de Pasaporte, Direcci??n de domicilio, tel??fono, direcci??n de correo electr??nico, imagen, voz, firma electr??nica; datos de caracter??sticas personales; datos econ??micos - financieros y de seguros, entre otros. Pudiendo acceder de igual forma a sus datos personales, en forma f??sica, oral o electr??nica, sea a trav??s de fuentes p??blicas o de terceros.</p>
              <h5>2.- ??Es obligatorio obtener autorizaci??n para el tratamiento de sus datos personales?</h5>
              <p>S??, los datos personales solamente pueden ser objeto de tratamiento con consentimiento del titular, salvo que la ley lo autorice en determinada situaci??n. De igual manera, es preciso indicar que el consentimiento es libre, previo, informado, expreso e inequ??voco. </p>
              <h5>3.- ??COMPANY D&C DIGITAL GROUP S.A.C. es el titular de sus datos personales?</h5>
              <p>S??, al aceptar nuestra pol??tica de privacidad, sus datos pueden ser tratados por la empresa, es importante precisar que, al haber dado usted su consentimiento de utilizaci??n de datos, nuestra empresa est?? autorizada a almacenar, procesar y transferir sus datos personales a otras empresas vinculadas.</p>
              <p>Los datos ser??n incluidos en nuestro fichero de clientes y nuestra finalidad es informar a nuestros clientes las actualizaciones de nuestros servicios y/o productos.</p>
              <h5>4.- ??Usted autoriza el ofrecimiento de nuevos productos y/o servicios que oferte la empresa?</h5>
              <p>Si usted acepta la presente pol??tica de privacidad, COMPANY D&C DIGITAL GROUP S.A.C. se comunicar?? con usted y ser?? informado a trav??s de medios telem??ticos, llamadas, sistemas de llamadas telef??nicas, mensajes de texto u otros mensajes electr??nicos de uso masivo de comunicaci??n de nuevos productos y servicios, que sean promovidos como resultado de campa??as de promoci??n y marketing que realice la empresa.</p>
              <h5>5.- ??Es factible que usted revoque la autorizaci??n de sus datos?</h5>
              <p>S??, es posible revocar la autorizaci??n en cualquier momento, sin justificaci??n previa. Se puede revocar la autorizaci??n para las finalidades autorizadas, ya sea de manera parcial o total. </p>
              <h5>6.- ??Qu?? derechos ejercen los titulares de los datos personales?</h5>
              <p>Derecho de acceso: solicitando informaci??n sobre los datos personales registrados en el banco de datos; derecho de rectificaci??n (actualizaci??n, inclusi??n): con los que usted puede modificar los datos brindados, ya sea porque exista alg??n error, sean falsos, incompletos u otra causa; derecho de cancelaci??n (supresi??n): ejerciendo este derecho es posible solicitar la supresi??n o cancelaci??n de sus datos personales de nuestro banco de datos considerando que son esenciales para la ejecuci??n del mismo; derecho de oposici??n: toda persona tienen la facultad de oponerse al uso de sus datos, cuando estos no han sido autorizados, asimismo puede oponerse por la situaci??n personal concreta. </p>
            </div>
          </Details>
        </Modal> :
        <></>
      }
      {
        modal?.phone ?
        <Modal>
          <PhoneDetails details={modal?.phoneDetails}/>
        </Modal> :
        <></>
      }
      <div className={ scroll ? 'navTopBx scroll' : 'navTopBx' }>
        <div className='call'>
          <div>
            <p>L??nea Exclusiva de Ventas</p>
          </div>
          <div>
            <a href={`tel:${numberPage}`}>
              <ion-icon name="call"></ion-icon>
              { `(${numberPage.slice(0,2)}) ${numberPage.slice(2)}` }
            </a>
          </div>
        </div>
        <div className='call'>
          <div>
            <p>Si ya eres cliente Claro</p>
          </div>
          <div>
            <a href={`tel:${number.help}`}>
              <ion-icon name="call"></ion-icon>
              {`(${number.help.slice(0,2)}) ${number.help.slice(2)}`}
            </a>
          </div>
        </div>
        <div className='logoBx'>
          <div className='logo' onClick={()=>top()}>
            <div className='imgBx'>
              <Image
                priority={true}
                width={50}
                height={50}
                src={dc} 
                alt='logo D&C'
              />
            </div>
            <div className='imgBx'>
              <Image
                priority={true}
                width={200}
                height={40}
                src={logo}
                alt='Distribuidor oficial Claro'
              />
            </div>
          </div>
          <div className={ activate ? 'sections activate' : 'sections' }  onClick={()=>reset()}>
            <Link href={`/${ query ? '?' + query : '' }`}>planes hogar</Link>
            <Link href={`/moviles${ query ? '?' + query : '' }`}>planes m??viles</Link>
          </div>
          <div className='toggle' onClick={e=>setActivate(!activate)}>
            <span style={{display: `${activate ? 'inherit' : 'none'}`}}>
              <ion-icon name="close"></ion-icon> 
            </span>
            <span style={{display: `${activate ? 'none' : 'inherit'}`}}>
              <ion-icon name="menu"></ion-icon>
            </span>
          </div>
          <div className='help'>
            <div onClick={()=>activeHelp()}>
              <ion-icon name="hand-left"></ion-icon>
              <p>??ya eres cliente claro y necesitas ayuda? haz click aqu??</p>
            </div>
          </div>
        </div>
      </div>
      <main className={ scroll ? 'active' : '' }>
        {children}
      </main>
      <footer>
        <div className="footer">
          <div>
            <Image
              width={120}
              height={120}
              src={dc} 
              alt='logo D&C'
            />
          </div>
          <div>
            <span>L??nea exclusiva de ventas</span>
            <a href={`tel:${numberPage}`}>
              <ion-icon name="call"></ion-icon>
              {`(${numberPage.slice(0,2)}) ${numberPage.slice(2)}`}
            </a>
          </div>
          <div onClick={()=>activePrivacy()}>
            <span>Terminos y Condiciones de la Web</span>
            <span>Politicas de privacidad</span>
          </div>
        </div>
        <div className="copyright">
          <p>?? COMPANY D&C DIGITAL GROUP S.A.C. Distribuidor Autorizado de Claro</p>
        </div>
      </footer>
      <div className="buttonCall">
        <a href={`tel:${numberPage}`}>
          <ion-icon name="call"></ion-icon>
        </a>
      </div>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </>
  )
}
