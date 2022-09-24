import Image from "next/image";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/slices/modal.slice";


export default function CardItem({product,section,name}) {

  const message = ["Llamadas y SMS","Minutos, SMS y Llamadas Internacionales","Gigas, Minutos, SMS y Llamadas Internacionales","Gigas, Minutos y SMS"]

  const dispatch = useDispatch();

  const active = ()=>{
    dispatch(setModal({
      form: true
    }));
  };

  const activeDetails = ()=>{
    dispatch(setModal({
      details: true
    }));
  };

  const activeFull = ()=>{
    dispatch(setModal({
      full: true
    }));
  };

  const activePhone = (details)=>{
    dispatch(setModal({
      phone: true,
      phoneDetails: details
    }));
  };

  return (
    <div className="cardBxI">
      {
        product?.promo ?
        <i>
          <span>-{product?.promo}%</span>
        </i> :
        <></>
      }
      <div className={ name?.includes("ifi") ? `card ifi` : name?.includes("3") ? section?.includes("equipo") ? 'card equipo' : 'card trhee' : name?.includes("ilimitado") ? 'card moviles' : section?.includes("equipo") ? 'card equipo' : 'card' }>
        <span className='cardItem'>
          <div className='cardItemBx'>
            <div className='header'>
              {
                section?.includes("netflix") || section?.includes("planes") ?
                section?.includes("equipo") ?
                <>
                </> :
                <>
                  <div className='imgBx'>
                    <Image
                      src={product?.img}
                      alt='icon'
                    />
                  </div>
                  <div className='content'>
                    <span>Costo Mensual</span>
                    <p>S/{product?.price}</p>
                    { product?.regularPrice ? <span>Precio Regular S/{product?.regularPrice}</span> : <></> }
                  </div>
                </> :
                <>
                  <div className='imgBx'>
                    <Image
                      src={product?.img}
                      alt='icon'
                    />
                  </div>
                  <div className='content'>
                    <span>Precio por {product?.promoTime}</span>
                    <p>S/{product?.price}</p>
                    <span>Precio Regular S/{product?.regularPrice}</span>
                  </div>
                </>
              }
            </div>
            {
              section?.includes("netflix") ?
              <div className='name'>
                <p style={{fontSize: "1.2em"}}>{product?.name} - {product?.megas}mbps +</p>
                <Image
                  width={80}
                  height={30}
                  src={product?.netflix}
                  alt='netflix'
                />
              </div> :
              section?.includes("equipo") ?
              <div className='name'>
                <p>{product?.name}</p>
              </div> :
              <div className='name'>
                {
                  name?.includes("ilimitado") ?
                  <div className="unlimited">
                    <p>{name}</p>
                    <h6>{message[product?.message]}</h6>
                  </div> :
                  <p>{name} - { name?.includes("ifi") ? `${product?.gigas}gb` : `${product?.megas}mbps`}</p>
                }
              </div>
            }
            <div className='details'>
              {
                name?.includes("ifi") ?
                <>
                  <div className='item'>
                    <div>
                      <span>Velocidad de descarga ilimitada</span>
                    </div>
                    <div>
                      <p>{product?.megas}mbps</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div>
                      <span>Gigas en alta velocidad</span>
                    </div>
                    <div>
                      <p>{product?.gigas}gb</p>
                    </div>
                  </div>
                </> :
                name?.includes("ilimitado") ?
                <>
                  <div className='item'>
                    <div>
                      <span>Gigas del plan</span>
                    </div>
                    <div>
                      <p>{product?.gigas}gb</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div>
                      <span>Gigas con Full Claro</span>
                    </div>
                    <div>
                      <p>{product?.gigasFull}gb</p>
                    </div>
                  </div>
                  {
                    product?.unlimited ?
                    <div className='item'>
                      <div>
                        <span>Llamadas y SMS</span>
                      </div>
                      <div>
                        <p>Ilimitados</p>
                      </div>
                    </div> :
                    <></>
                  }
                  {
                    product?.minutsInternational ?
                    <div className='item minuts'>
                      <div>
                        <span>Minutos Internacionales</span>
                      </div>
                      <div>
                        <p>{product?.minutsInternational} Minutos</p>
                      </div>
                    </div> :
                    <></>
                  }
                  {
                    product?.beneficyAll ?
                    <div className='item beneficy'>
                      <div>
                        <span>Beneficios Adicionales</span>
                      </div>
                      <div>
                        <p><span>Claro</span>video</p>
                        <p><span>Claro</span>club</p>
                        <p><span>Claro</span>música</p>
                        <p><span>Claro</span>drive</p>
                      </div>
                    </div> :
                    <></>
                  }
                  
                  <div className='item'>
                    <div>
                      <span>Redes Ilimitadas</span>
                    </div>
                    <div>
                      <Image
                        width={130}
                        height={50}
                        src={product?.redes}
                        alt='netflix'
                      />
                    </div>
                  </div>
                </> :
                section?.includes("equipo") ?
                <>
                  <div className='item equipo'>
                    <div>
                      <Image
                        width={150}
                        height={190}
                        src={product?.img}
                        alt='phone'
                      />
                    </div>
                    <div>
                      <p>{`S/${product?.price}`}</p>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <span>Plan</span>
                    </div>
                    <div>
                      <p>{product?.plan}</p>
                    </div>
                  </div>
                </> :
                <div className='item'>
                  <div>
                    <span>Velocidad máxima de Bajada/Subida</span>
                  </div>
                  <div>
                    <p>{product?.megas}mbps</p>
                  </div>
                </div>
              }
              {
                product?.full ?
                <div className='item'>
                  <div>
                    <span>Velocidad máxima de Bajada/Subida con Full Claro</span>
                  </div>
                  <div>
                    <p>{product?.full}mbps</p>
                  </div>
                </div> :
                <></>
              }
              {
                section?.includes("tv") || section?.includes("televisión") ?
                <div className='item'>
                  <div>
                    <span>Incluye Claro TV Avanzado con 111 canales en HD.</span>
                  </div>
                </div> :
                <></>
              }
              {
                section?.includes("telefonía") || section?.includes("netflix") ?
                <div className='item'>
                  <div>
                    <span>Llamadas a Claro + 100min nivel nacional</span>
                  </div>
                  <div>
                    <p>Ilimitados</p>
                  </div>
                </div> :
                <></>
              }
              {
                section?.includes("netflix") ?
                <div className='item'>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span>Incluye</span>
                    <Image
                      width={85}
                      height={35}
                      src={product?.netflix}
                      alt='netflix'
                    />
                  </div>
                  <div>
                    <p>Estandar</p>
                  </div>
                </div> :
                <></>
              }
              {
                name?.includes("ifi") ?
                <>
                  <div className='item ifi'>
                    <div>
                      <span>Conéctalo, hasta en 5 dispositivos en simultáneo</span>
                    </div>
                  </div>
                  <div className='item ifi'>
                    <div>
                      <span>Modelo de equipo</span>
                    </div>
                    <div>
                      <p>{product?.model}</p>
                    </div>
                  </div>
                  <div className='item ifi'>
                    <div>
                      <span>Pago Único del equipo</span>
                    </div>
                    <div>
                      <p>{product?.priceRouter}</p>
                    </div>
                  </div>
                  <div className='item ifi'>
                    <div>
                      <span>Beneficios del equipo</span>
                    </div>
                    <div>
                      <p>No Necesita Instalación</p>
                      <p>Incluye WIFI</p>
                      <p>Tecnología Inalámbrica</p>
                      <p>Equipo de Calidad</p>
                      <p>Servicio Postventa</p>
                    </div>
                  </div>
                  <div className='item ifi'>
                    <div>
                      <span>Incluye</span>
                    </div>
                    <div>
                      <p>Claro Club</p>
                    </div>
                  </div>
                </> :
                <></>
              }
            </div>
            {
              section?.includes("equipo") ?
              <div className='more'>
                <div className='know'>
                  <p onClick={()=>activePhone(product?.details)}>Conoce Más</p>
                </div>
              </div> :
              <div className='more'>
                <div className='know' onClick={()=>activeDetails()}>
                  <p>Ver Detalles</p>
                </div>
                <p className='restrictions'>*Conoce restricciones y beneficios en <span onClick={()=>activeFull()}>Full Claro</span></p>
              </div>
            }
            <div className="modal">
              <p onClick={()=>active()}>solicitar</p>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}
