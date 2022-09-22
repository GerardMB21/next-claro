import CardItem from "../components/cards/CardItem";
import Carrusel from "../components/carrusel/Carrusel";
import PageLayout from "../components/PageLayout";
import Title from "../components/title/Title";
import imgs from "../utils/imgs";
import products from "../utils/products"


export default function Home() {

  return (
    <PageLayout>
      <Carrusel imgs={imgs.hogar}/>
      <div className="body">
        <Title knowk={'claro hogar'} icon={<ion-icon name="home-outline"></ion-icon>}/>
        <div className="cardList">
          {
            products.play_3.map(product=>(
              <CardItem product={product} section={"internet + telefonia + television"} name={"3 play"} key={product.id}/>
            ))
          }
        </div>
      </div>
    </PageLayout>
  )
}
