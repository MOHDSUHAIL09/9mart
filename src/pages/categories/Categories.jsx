import { Link } from "react-router-dom";
import "./Categories.css"

export default function Categories() {

  const categories = [
    {name: "Atta, Rice & Dal" ,img: "atta-rice-dal.png", alt: "dal-rice", link: "atta"},
    {name: "Baby Care", img: "baby-care.png", alt:"Baby Care",link: "Babycare" },
    {name: "Bakery & Biscuits", img: "bakery-biscuits.png", alt:"Bakery & Biscuits",link: "Bakery"},
    {name: "Chicken, Meat & Fish", img: "chicken-meat-fish.png", alt:"chicken-meat", link: "Chicken"},
    {name: "Cleaning Essentials", img: "cleaning-essentials.png", alt:"Cleaning Essentials", link: "Cleaning"},
    {name: "Cold Drinks & Juices", img: "cold-drinks-juices.png", alt:"Cold Drings", link: "ColdDrinks"},
    {name: "Dairy, Bread & Eggs", img: "dairy-bread-eggs.png", alt:"Dairy ,bread & Eggs", link: "Dairy"},
    {name: "Fruits & Vegetables", img: "fruits-vegetables.png", alt:"Fruits", link: "Fruits"},
    {name: "Instant Food", img: "instant-food.png", alt:"Food", link: "InstantFood"},
    {name: "Snack & Munchies", img: "snack-munchies.png", alt:"snack care", link: "Snack"},
    {name: "Pet Care", img: "pet-care.png", alt:"pet Care", link: "PetCare"},
    {name: "Tea, Coffee & Drinks", img: "tea-coffee-drinks.png", alt:"drinks", link: "Coffee"},

  ];


  return (
    <>
    <div className='categories-text'>Shop Popular Categories</div>
    <div className="underline"></div>
    

    <div className="categories-container">
      {categories.map((item, index) =>(
    <div key={index} className='categories-content'>
      <Link to={`/CategoriesPage/${item.link}`}>
      <img src={item.img} alt={item.alt} />
      </Link>

      <div className='categories-name'>{item.name}</div>
      </div>

      ))}
    </div>
    </>
  )
}

