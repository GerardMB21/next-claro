import Head from "next/head";
import Script from "next/script";
import dc from '../img/logo-dc.webp';
import logo from '../img/distribuidor.webp';
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setScroll } from "../store/slices/scroll.slice";
import { useRouter } from "next/router";
import Modal from "./modal/Modal";
import Form from "./form/Form";
import { setSection } from "../store/slices/section.slice";

export default function PageLayout({children}) {

  const router = useRouter();
  const query = router.asPath.includes("?") ? router.asPath.split("?").pop() : '';

  const dispatch = useDispatch();

  const scroll = useSelector(state=>state.scroll);
  const number = useSelector(state=>state.number);
  const modal = useSelector(state=>state.modal);

  const [activate,setActivate] = useState(false);

  let page;
  if (typeof window !== 'undefined') {
    page = window;
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

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Claro Hogar ¡Promociones exclusivas en internet, cable y TV!</title>
        <link rel="icon" href="/favicon-claro.png" />
      </Head>
      {
        modal ?
        <Modal>
          <Form modal={true}/>
        </Modal> :
        <></>
      }
      <div className={ scroll ? 'navTopBx scroll' : 'navTopBx' }>
        <div className='call'>
          <div>
            <p>Línea Exclusiva de Ventas</p>
          </div>
          <div>
            <a href={`tel:${number.hogar}`}>
              <ion-icon name="call"></ion-icon>
              {`(${number.hogar.slice(0,2)}) ${number.hogar.slice(2)}`}
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
                width={50}
                height={50}
                src={dc} 
                alt='logo D&C'
              />
            </div>
            <div className='imgBx'>
              <Image
                width={200}
                height={40}
                src={logo}
                alt='Distribuidor oficial Claro'
              />
            </div>
          </div>
          <div className={ activate ? 'sections activate' : 'sections' }  onClick={()=>reset()}>
            <Link href={`/${ query ? '?' + query : '' }`}>planes hogar</Link>
            <Link href={`/moviles${ query ? '?' + query : '' }`}>planes móviles</Link>
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
            <div>
              <ion-icon name="hand-left"></ion-icon>
              <p>¿ya eres cliente claro y necesitas ayuda? haz click aquí</p>
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
            <span>Línea exclusiva de ventas</span>
            <a href={`tel:${number.hogar}`}>
              <ion-icon name="call"></ion-icon>
              {`(${number.hogar.slice(0,2)}) ${number.hogar.slice(2)}`}
            </a>
          </div>
          <div>
            <span>Terminos y Condiciones de la Web</span>
            <span>Politicas de privacidad</span>
          </div>
        </div>
        <div className="copyright">
          <p>© COMPANY D&C DIGITAL GROUP S.A.C. Distribuidor Autorizado de Claro</p>
        </div>
      </footer>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </>
  )
}
