import { useDispatch } from "react-redux";
import { setModal } from "../../store/slices/modal.slice";

export default function PhoneDetails({details}) {

  const dispatch = useDispatch();

  const close = ()=>{
    dispatch(setModal(false));
  };

  return (
    <div className="phoneDetailsBx">
      <span className="close" onClick={()=>close()}>
        <ion-icon name="close-outline"></ion-icon>
      </span>
      <div className="content">
        {
          details?.map(detail=>(
            <div key={detail?.id}>
              {
                detail?.title ? <h3>{detail?.title}</h3> : <></>
              }
              <p>{detail?.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
