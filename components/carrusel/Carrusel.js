import { useEffect } from "react";
import { useRef } from "react";
import ImgContainer from "./ImgContainer";


export default function Carrusel({imgs}) {

  const slideShow = useRef(null);

  const add = ()=>{
      if (slideShow?.current?.children?.length>0) {
          const firstElement = slideShow.current.children[0];
          slideShow.current.style.transition = `1000ms ease-out all`;
          slideShow.current.style.transform = `translateX(-100vw)`;

          const endTransicion = ()=>{
              slideShow.current.style.transition = `none`;
              slideShow.current.style.transform = `translateX(0)`;
              slideShow.current.appendChild(firstElement);
              slideShow.current.removeEventListener('transitionend',endTransicion)
          }
          slideShow.current.addEventListener('transitionend',endTransicion)
      }
  };

  const remove = ()=>{
      if (slideShow?.current?.children?.length>0) {
          const index = slideShow.current.children.length-1
          const lastElement = slideShow.current.children[index];
          slideShow.current.insertBefore(lastElement,slideShow.current.firstChild)
          slideShow.current.style.transition = `none`;
          slideShow.current.style.transform = `translateX(-100vw)`;

          setTimeout(() => {
              slideShow.current.style.transition = `1000ms ease-out all`;
              slideShow.current.style.transform = `translateX(0)`;
          }, 50);
      }
  };

  useEffect(() => {
      setInterval(() => {
          add()
      }, 5000);
  }, []);

  return (
    <div className='carruselBx'>
      <div className='carruselCtn'>
        <div className='carrusel' ref={slideShow}>
          {
            imgs.map(img=>(
              <ImgContainer
                img={img}
                key={img.id}
              />
            ))
          }
        </div>
        <div className='rows'>
          <div className='left' onClick={()=>remove()}>
            <ion-icon name="chevron-back-circle"></ion-icon>
          </div>
          <div className='rigth' onClick={()=>add()}>
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  )
}
