import "./Categories.css"

export default function Categories() {

  const categories = [
    {name: "Atta, Rice & Dal" ,img: "atta-rice-dal.png", alt: "dal-rice" },
    {name: "Baby Care", img: "baby-care.png", alt:"Baby Care"},
    {name: "Bakery & Biscuits", img: "bakery-biscuits.png", alt:"Bakery & Biscuits"},
    {name: "Chicken, Meat & Fish", img: "chicken-meat-fish.png", alt:"chicken-meat"},
    {name: "Cleaning Essentials", img: "cleaning-essentials.png", alt:"Cleaning Essentials"},
    {name: "Cold Drinks & Juices", img: "cold-drinks-juices.png", alt:"Cold Drings"},
    {name: "Dairy, Bread & Eggs", img: "dairy-bread-eggs.png", alt:"Dairy ,bread & Eggs"},
    {name: "Fruits & Vegetables", img: "fruits-vegetables.png", alt:"Fruits"},
    {name: "Instant Food", img: "instant-food.png", alt:"Food"},
    {name: "Snack & Munchies", img: "snack-munchies.png", alt:"snack care"},
    {name: "Pet Care", img: "pet-care.png", alt:"pet Care"},
    {name: "Tea, Coffee & Drinks", img: "tea-coffee-drinks.png", alt:"drinks"},

  ];


  return (
    <>
    <div className='categories-text'>Shop Popular Categories</div>

    <div className="categories-container">
      {categories.map((item, index) =>(
    <div key={index} className='categories-content'>
      <img src={item.img} alt={item.alt} />
      <div className='categories-name'>{item.name}</div>
      </div>

      ))}
    </div>
    </>
  )
}
