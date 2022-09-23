import { useSelector } from "react-redux";
import CardHeader from "../components/cards/CardHeader";
import CardItem from "../components/cards/CardItem";
import Carrusel from "../components/carrusel/Carrusel";
import Form from "../components/form/Form";
import PageLayout from "../components/PageLayout";
import Title from "../components/title/Title";
import imgs from "../utils/imgs";
import products from "../utils/products";
import productsName from "../utils/productsName";


export default function moviles() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const section = useSelector(state=>state.section);

  return (
    <PageLayout>
      <div className="banner">
        <Carrusel imgs={imgs.movil}/>
        <Form modal={false}/>
      </div>
      <div className="body">
        <Title knowk={'moviles'} icon={<ion-icon name="phone-portrait-outline"></ion-icon>}/>
        <div className="cardHeader">
          <CardHeader productsName={productsName.movil}/>
        </div>
        <div className="cardList">
          {
            products[productsName.movil[section].section].map(product=>(
              <CardItem product={product} section={productsName.movil[section].name} name={product.name} key={product.id} />
            ))
          }
        </div>
      </div>
    </PageLayout>
  )
}
