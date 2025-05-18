import './Cardbanner.css'

export default function Cardbanner2() {

    const Cardbanner2 = [
        {Category: "Fruits & Vegetables", discount: "Get Upto 30% Off", button: "Shop Now", img: "grocery-banner.png"},
        {Category: "Freshly Baked Buns", discount: "Get Upto 25% Off", button: "Shop Now", img: "grocery-banner-2.jpg"},
    ];

  return (
    <div className='grocery-banner'>
        <div className='grocery-img'>
        {Cardbanner2.map((Cardbanner2, index) =>(
            <div key={index} className='grocery-item'>
                <img src={Cardbanner2.img} alt={Cardbanner2.Category} />

                <div className='grocery-content'>
                        {Cardbanner2.discount && <div className="grocery-Discount">{Cardbanner2.discount}</div>}
                        {Cardbanner2.Category && <div className='grocery-Category'>{Cardbanner2.Category}</div>}
                        {Cardbanner2.button &&
                         <button className='grocery-button'>{Cardbanner2.button}</button>}
                    </div>
            </div>
        ))}


        </div>
    </div>
        
  )
}
