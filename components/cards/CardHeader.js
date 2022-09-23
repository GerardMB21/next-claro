import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSection } from "../../store/slices/section.slice";

export default function CardHeader({productsName}) {

  const dispatch = useDispatch();
  const slideShow = useRef(null);
  const [count,setCount] = useState(0);
  const [sectionSelect,setSectionSelect] = useState(1);

  const add = ()=>{
      if (slideShow.current.children.length>0) {
          const firstElement = slideShow.current.children[0];
          slideShow.current.style.transition = `1000ms ease-out all`;
          slideShow.current.style.transform = `translateX(-87vw)`;

          const endTransicion = ()=>{
              slideShow.current.style.transition = `none`;
              slideShow.current.style.transform = `translateX(0)`;
              slideShow.current.appendChild(firstElement);
              slideShow.current.removeEventListener('transitionend',endTransicion)
          };

          slideShow.current.addEventListener('transitionend',endTransicion);

          count < productsName.length -1 ? setCount(count + 1) : setCount(0);
      };
  };

  const remove = ()=>{
      if (slideShow.current.children.length>0) {
          const index = slideShow.current.children.length-1
          const lastElement = slideShow.current.children[index];

          slideShow.current.insertBefore(lastElement,slideShow.current.firstChild)
          slideShow.current.style.transition = `none`;
          slideShow.current.style.transform = `translateX(-91vw)`;

          setTimeout(() => {
              slideShow.current.style.transition = `1000ms ease-out all`;
              slideShow.current.style.transform = `translateX(0)`;
          }, 50);

          count > 0 ? setCount(count - 1) : setCount(productsName.length - 1);
      };
  };

  const select = (id)=>{
    setSectionSelect(id);
    setCount(id - 1);
  };

  useEffect(() => {
      dispatch(setSection(count));
      setSectionSelect(count + 1);
  }, [dispatch, count]);

  return (
    <div className='cardHeaderBx'>
      <div className='cardHeaderCtn'>
        <div className='cardHeader' ref={slideShow}>
          {
            productsName.map(product=>(
            <div className={ parseInt(sectionSelect) === parseInt(product.id) ? "cardHeaderItem active" : "cardHeaderItem" } key={product.id} onClick={()=>select(product.id)}>
              <div>
                <h2 data-text="header 1">{product.name}</h2>
              </div>
            </div>
            ))
          }
        </div>
        <div className="rowsHeader">
          <div className="rowsHeaderLeft" onClick={()=>remove()}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
          <div className="rowsHeaderRigth" onClick={()=>add()}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  )
}
