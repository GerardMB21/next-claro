import { useDispatch } from "react-redux"
import { setModal } from "../../store/slices/modal.slice";

export default function Details({children,privacy = false}) {

  const dispatch = useDispatch();

  const understand = ()=>{
    dispatch(setModal(false));
  };

  return (
    <div className={ privacy ? "detailsBx privacy" : "detailsBx" }>
      <div className="content">
        {children}
      </div>
      <div className="understand">
        <p onClick={()=>understand()}>entendido</p>
      </div>
    </div>
  )
}
