import Carrusel from "../components/carrusel/Carrusel";
import PageLayout from "../components/PageLayout";
import Title from "../components/title/Title";
import imgs from "../utils/imgs";


export default function moviles() {
  return (
    <PageLayout>
      <Carrusel imgs={imgs.movil}/>
      <div className="body">
        <Title knowk={'moviles'} icon={<ion-icon name="phone-portrait-outline"></ion-icon>}/>
      </div>
    </PageLayout>
  )
}
