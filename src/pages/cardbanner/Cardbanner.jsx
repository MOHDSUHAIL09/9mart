import "./Cardbanner.css";

export default function CardBanner() {
    const images = [
        { name: "image", img: "ad-banner-1.jpg", Discount: "10% cashback on personal care", Category: "Refresh your day the fruity way", button: "Shop Now" },
        { name: "image", img: "ad-banner-2.jpg", Discount: "Say yes to season’s fresh", Category: "Enjoy a scoop of summer today", button: "Shop Now"},
        { name: "image", img: "ad-banner-3.jpg", Discount: "When in doubt, eat ice cream", Category:"Refresh your day the fruity way", button: "Shop Now"}
    ];

    return (
        <div className='cardbanner'>
            <div className='cardbanner-image'>
                {images.map((image, index0) => (
                    <div key={index0} className="cardbanner-item">
                        <img src={image.img} alt={image.name} />
                        <div className='banner-content'>
                        {image.Discount && <div className="banner-Discount">{image.Discount}</div>}
                        {image.Category && <div className='banner-Category'>{image.Category}</div>}
                        {image.button && <button className='banner-button'>{image.button}</button>}
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
