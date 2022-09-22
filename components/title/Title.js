

export default function Title({knowk,icon}) {
  return (
    <div className='title'>
      <span className="knowk">conoce nuestros planes {knowk}</span>
      <div className='icon'>
        <span className='line'></span>
        <div>
          <span>
            {icon}
          </span>
        </div>
        <span className='line'></span>
      </div>
    </div>
  )
}
