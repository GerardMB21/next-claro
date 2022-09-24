import Image from "next/image";


export default function ImgContainer({img}) {
  return (
    <div className={`imgBx ${img.name}`}>
      <div className="movil">
        <Image
          priority={true}
          src={img.urlMovil}
          alt='img'
        />
      </div>
      <div className="desktop">
        <Image
          priority={true}
          src={img.urlDesktop}
          alt='img'
        />
      </div>
    </div>
  )
}
