import Image from "next/image";


export default function ImgContainer({img}) {
  return (
    <div className={`imgBx ${img.name}`}>
      <div className="movil">
        <Image
          src={img.urlMovil}
          alt='img'
        />
      </div>
      <div className="desktop">
        <Image
          src={img.urlDesktop}
          alt='img'
        />
      </div>
    </div>
  )
}
