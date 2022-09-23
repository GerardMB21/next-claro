import { useDispatch } from "react-redux";
import { setModal } from "../../store/slices/modal.slice";

export default function Modal({children}) {

  const dispatch = useDispatch();

  const close = ()=>{
    dispatch(setModal(false));
  };

  return (
    <div className="modalBx">
      <div className="modalBlur" onClick={()=>close()}></div>
      <div className="modalCtnt">
        {children}
      </div>
    </div>
  )
}
