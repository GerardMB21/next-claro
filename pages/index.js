import { useSelector } from "react-redux";
import CardHeader from "../components/cards/CardHeader";
import CardItem from "../components/cards/CardItem";
import Carrusel from "../components/carrusel/Carrusel";
import Form from "../components/form/Form";
import PageLayout from "../components/PageLayout";
import Title from "../components/title/Title";
import imgs from "../utils/imgs";
import products from "../utils/products"
import productsName from "../utils/productsName";


export default function Home() {

  const section = useSelector(state=>state.section);

  return (
    <PageLayout>
      <div className="banner">
        <Carrusel imgs={imgs.hogar}/>
        <Form modal={false}/>
      </div>
      <div className="body">
        <Title knowk={'claro hogar'} icon={<ion-icon name="home-outline"></ion-icon>}/>
        <div className="cardHeader">
          <CardHeader productsName={productsName.hogar}/>
        </div>
        <div className="cardList">
          {
            products[productsName.hogar[section].section].map(product=>(
              <CardItem product={product} section={productsName.hogar[section].name} name={productsName.hogar[section].sectionName} key={product.id}/>
            ))
          }
        </div>
      </div>
    </PageLayout>
  )
}
