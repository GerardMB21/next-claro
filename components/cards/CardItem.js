import Image from "next/image";


export default function CardItem({product,section,name}) {
  return (
    <div className="card">
      <span className='cardItem'>
        <div className='cardItemBx'>
          <div className='header'>
            {
              section.includes("netflix") ?
              <>
                <div className='imgBx'>
                  <Image
                    width={150}
                    height={40}
                    src={product?.img}
                    alt='icon'
                  />
                </div>
                <div className='content'>
                  <span>Costo Mensual</span>
                  <p>S/{product?.price}</p>
                </div>
              </> :
              <>
                <div className='imgBx'>
                  <Image
                    width={150}
                    height={40}
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
            section.includes("netflix") ?
            <div className='name'>
              <p>{product?.name} - {product?.megas}mbps +</p>
              <Image
                width={140}
                height={30}
                src={product?.netflix}
                alt='netflix'
              />
            </div> :
            <div className='name'>
              <p>{name} - { name?.includes("ifi") ? `${product?.megas}mbps` : `${product?.gigas}gb`}</p>
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
              section.includes("tv") || section.includes("television") ?
              <div className='item'>
                <div>
                  <span>Incluye Claro TV Avanzado con 111 canales en HD.</span>
                </div>
              </div> :
              <></>
            }
            {
              section.includes("telefonia") || section.includes("netflix") ?
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
              section.includes("netflix") ?
              <div className='item'>
                <div>
                  <span>Incluye</span>
                  <Image
                    width={140}
                    height={30}
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
          <div className='details'>
            <div className='know'>
              <p>Ver Detalles</p>
            </div>
            <p className='restrictions'>*Conoce restricciones y beneficios en <span>Full Claro</span></p>
          </div>
        </div>
      </span>
    </div>
  )
}
