import { useLocation, useOutletContext } from "react-router-dom";
import "./VisitPage.css"

export default function CategoryPage() {
  
   const { handleAddToCart } = useOutletContext(); // function App.jsx से मिल रहा
  const location = useLocation();
  const categoryName = location.pathname.split("/").pop(); // URL से category name निकाल रहे हैं

  const visitPage = [

    {
      images: [
       {image: "https://cdn.pixabay.com/photo/2022/01/04/05/29/kitchen-6914223_1280.jpg", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image: "https://cdn.pixabay.com/photo/2020/08/10/06/52/cleaning-5476950_1280.jpg", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://cdn.pixabay.com/photo/2014/08/11/21/26/kitchen-416027_1280.jpg", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://cdn.pixabay.com/photo/2017/01/23/09/02/render-2001809_1280.jpg", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://cdn.pixabay.com/photo/2018/04/13/20/18/smart-home-3317434_1280.jpg", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://cdn.pixabay.com/photo/2017/06/01/21/39/kitchen-2364667_1280.jpg", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://cdn.pixabay.com/photo/2018/06/15/01/21/water-bottle-3475997_1280.jpg", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://cdn.pixabay.com/photo/2018/06/15/01/18/fridge-3475996_1280.jpg", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://cdn.pixabay.com/photo/2017/02/24/12/24/kitchen-2094738_1280.jpg", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://media.istockphoto.com/id/2161040867/photo/bright-kitchen-with-stainless-steel-appliances-island-and-white-cabinetry.jpg?s=612x612&w=0&k=20&c=HQOyRyHAB_3oF_a7k6N2hca8O4B8omJDFM2A3Tzevsk=", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://media.istockphoto.com/id/535075747/photo/contemporary-classic-domestic-kitchen-refrigerator.jpg?s=612x612&w=0&k=20&c=mQI1PGo3bd6iCnIBULi5NPeNWB7umFB7l6Niu1op0DY=", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://media.istockphoto.com/id/1193825765/photo/white-kitchen-design.jpg?s=612x612&w=0&k=20&c=cBTsNHfi3WniuoeC6gFUOQoOiqW9R9Sd8-V7IQ8_3uw=", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://media.istockphoto.com/id/1444380038/photo/new-semi-furnished-white-walled-kitchen-with-a-marble-top-island.jpg?s=612x612&w=0&k=20&c=Zo7D2EWg7twaJ4Pg2j3IEZOrQNUf8lrB8oQad_FenHc=", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
       {image:"https://media.istockphoto.com/id/484033184/photo/classic-kitchen-with-green-interior-paint-and-white-cabinets.jpg?s=612x612&w=0&k=20&c=gaV5H0L5KYWWN2TTXc4IKvO7FYmWBrGzEYB3pOCZAcU=", category: "Referator ", name: "Referator ", price: 12999, oldPrice: 15999 },
      ],
      link: "Ac",
    },
    {
      images: [
        {image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/706b4685-f5a6-47cb-941a-929ce6ee9be9._CR0,477,2000,1047_SX810_CB1169409_QL70_.jpg", category: "Clothing  ", name: "Bedsheet ", price: 839, oldPrice: 899},
        {image:"https://m.media-amazon.com/images/I/91akRTwkoFL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Chadar ", price: 349, oldPrice: 499 },
        {image:"https://m.media-amazon.com/images/I/81-x16pT-SL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing  ", name: "Bedsheet ", price: 639, oldPrice: 699 },
        {image: "https://m.media-amazon.com/images/I/71YTYzfMceL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Bed Cover", price: 349, oldPrice: 399},
        {image:"https://m.media-amazon.com/images/I/61zWWJFXwxL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Flat Sheet ", price: 299, oldPrice: 349 },
        {image:"https://m.media-amazon.com/images/I/41aBhhV-btL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Top Sheet ", price: 439, oldPrice: 599 },
        {image: "https://m.media-amazon.com/images/I/616g9EtiugS._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Cotton Sheet ", price: 599, oldPrice: 639},
        {image: "https://m.media-amazon.com/images/I/41I75Xt8xdL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing  ", name: "Blanket Sheet ", price: 499, oldPrice: 599 },
        {image:  "https://m.media-amazon.com/images/I/41I75Xt8xdL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing  ", name: "Blanket Sheet ", price: 499, oldPrice: 599 },
        {image:"https://m.media-amazon.com/images/I/71FuX0WR14L._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Covering Sheet ", price: 299, oldPrice: 349 },
        {image:"https://m.media-amazon.com/images/I/91Mv61Uln4L._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing  ", name: "Throw Sheet ", price: 599, oldPrice: 679 },
        {image:"https://m.media-amazon.com/images/I/816BSTUdXfL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Bedsheet ", price: 379, oldPrice: 399 },
      ],
      link: "kallen",
    },
    {
      images: [
        {image:"https://m.media-amazon.com/images/I/81AAL0FDfnL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Women's Mahendi Green Cotton Kurta", price: 699, oldPrice: 849 },
        {image:"https://m.media-amazon.com/images/I/5147cEm6w-L._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: " Women Casual Crepe Printed Fit and Flare ", price: 599, oldPrice: 799 },
        {image:"https://m.media-amazon.com/images/I/5147cEm6w-L._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing", name: "Women's Rayon Blend Kurta with Pant", price: 539, oldPrice: 649 },
        {image:"https://m.media-amazon.com/images/I/610InQb9rTL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Floral Printed Summer Wrap Calf Length Dress for Women ", price: 1299, oldPrice: 1599 },
        {image:"https://m.media-amazon.com/images/I/71xk9g496wL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Women's Fit And Flare Knee Length Dress ", price: 499, oldPrice: 599 },
        {image:"https://m.media-amazon.com/images/I/61SgADmAyDL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Women's Cotton Blend Embroidered Straight Kurta ", price: 799, oldPrice: 999 },
        {image:"https://m.media-amazon.com/images/I/71mU4bnUw-L._AC_UL480_FMwebp_QL65_.jpg",category: "Clothingr ", name: "Dress for Women Stylish | One Piece Dress for Women Long |", price: 399, oldPrice: 499},
        {image:"https://m.media-amazon.com/images/I/61usPYwWoHL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Women's Pure Cotton Maxi Midi Dress – Elegant Floral Printed", price: 999, oldPrice: 1599},
        {image:"https://m.media-amazon.com/images/I/61eT1LbHynL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing", name: "Women's Polyester Blend Modern Knee-Length Dress ", price: 1299, oldPrice: 1599},
        {image:"https://m.media-amazon.com/images/I/719v8HOT4uL._AC_UL480_FMwebp_QL65_.jpg ",category: "Clothing ", name: "Women Printed A-Line Kurta Pant With Dupatta ", price: 1299, oldPrice: 1599 },
        {image:"https://images-eu.ssl-images-amazon.com/images/I/61qj7tWT4SL._AC_UL165_SR165,165_.jpg",category: "Clothing", name: "Women Cotton Floral Tiered Dress", price: 1299, oldPrice: 1599 },
        {image:"https://m.media-amazon.com/images/I/41k3ijvmkRL._AC_UF480,600_SR480,600_.jpg",category: "Clothing ", name: "Women Cotton Block Printed Kurta Pant With Dupatta", price: 999, oldPrice: 1039 },
        {image:"https://m.media-amazon.com/images/I/31E2iaCTRVL._AC_UF480,600_SR480,600_.jpg",category: "Clothing ", name: "Women's Viscose Printed Flared A-Line Kurta With Pant And", price: 1299, oldPrice: 1599 },
        {image:"https://m.media-amazon.com/images/I/61c2woB3VtL._AC_UL480_FMwebp_QL65_.jpg",category: "Clothing ", name: "Women's Georgette Fit and Flare Knee-Length Dress ", price: 850, oldPrice: 999},
        ],
      link: "women",
    },
    {
      images: [
        {image:"https://m.media-amazon.com/images/I/71qLcYLgsaL._AC_UL480_FMwebp_QL65_.jpg",category: "Plantex Bathroom Organizer Without Drill/GI Steel Self Adhesive Bathroom ShPlantex Bathroom Organizer Without Drill/GI Steel Self ", price: 899, oldPrice: 1199 },
        {image:"https://m.media-amazon.com/images/I/71V5rj5NmtL._AC_UL480_FMwebp_QL65_.jpg",category:  "Boniry Stainless Steel Bathroom Shelf for Wall, Self Adhesive Bathroom Organiser, 4 Hooks for Towel Holder, Space-Saving WallBoniry Stainless Steel Bathroom Shelf for Wall, Self Adhesive Bathroom ", price: 799, oldPrice: 999 },
        {image:"https://m.media-amazon.com/images/I/71oCcY9rLUL._AC_UL480_FMwebp_QL65_.jpg",category:  "Xmart India Wall-Mounted Toothbrush Holder - Self-Adhesive Bathroom Organizer for Toothbrushes, Toothpaste, Shavers, and MakeXmart India Wall-Mounted Toothbrush Holder - Self-Adhesive", price: 12999, oldPrice: 15999 },
        {image:"https://m.media-amazon.com/images/I/71gsZUQ3HCL._AC_UL480_FMwebp_QL65_.jpg",category:  "RACKORA Self Adhesive Metal Bathroom Shelf for Wall/Shelf Organizer ", price: 289, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71G0HWpPvLL._AC_UL480_FMwebp_QL65_.jpg",category:  "COSTEM Wall Shelves Kitchen Bathroom Shelf Self-Adhesive Sticker Hook Multipurpose Wall Holder Bathroom Storage Rack Box Strong Shower Rack Shelf (2 Shelf+ 2 Shop Dish) PlasticCOSTEM Wall Shelves Kitchen Bathroom Shelf ", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/61FdqpY4+kL._AC_UL480_FMwebp_QL65_.jpg",category: "Oslen 4 in 1 Stainless Steel Multipurpose Bathroom Shelf/Perfume Rack/Toothbrush Stand/Tumbler Holder/Soap Dish/Bathroom Accessories - (18 inch Long, 5.5 inch Wide,Mirror Finish)Oslen 4 in 1 Sta", price: 599, oldPrice: 799 },
        {image:"https://m.media-amazon.com/images/I/71y9iNGDZHL._AC_UL480_FMwebp_QL65_.jpg",category:  "URBANMONK Stainless Steel Corner Shelf for Bathroom | self-Adhesive Bathroom Corner Shelf for Wall Corner | Corner Shelf for Kitchen | Bathroom Racks and Shelves | Pack of 2URBANMONK Stainless Steel Corn ",price: 549, oldPrice: 599},
        {image:"https://m.media-amazon.com/images/I/91I7yETW-dL._AC_UL960_FMwebp_QL65_.jpg",category: "URBANMONK Stainless Steel Corner Shelf for Bathroom | self-Adhesive Bathroom Corner Shelf for Wall Corner | Corner Shelf for Kitchen | Bathroom Racks and Shelves | Pack of 2URBANMONK Stainless Steel Corn ", price: 429, oldPrice: 579},
        {image:"https://m.media-amazon.com/images/I/71ccAzqgSHL._AC_UL480_FMwebp_QL65_.jpg",category: "URBANMONK Stainless Steel Corner Shelf for Bathroom | self-Adhesive Bathroom Corner Shelf for Wall Corner | Corner Shelf for Kitchen | Bathroom Racks and Shelves | Pack of 2URBANMONK Stainless Steel Corn ", price: 699, oldPrice: 739 },
        {image:"https://m.media-amazon.com/images/I/71cc+EtLa2S._AC_UL480_FMwebp_QL65_.jpg",category: "URBANMONK Stainless Steel Corner Shelf for Bathroom | self-Adhesive Bathroom Corner Shelf for Wall Corner | Corner Shelf for Kitchen | Bathroom Racks and Shelves | Pack of 2URBANMONK Stainless Steel Corn ", price: 539, oldPrice: 799 },
        {image:"https://m.media-amazon.com/images/I/91CErYsF-rL._AC_UL480_FMwebp_QL65_.jpg",category: "URBANMONK Stainless Steel Corner Shelf for Bathroom | self-Adhesive Bathroom Corner Shelf for Wall Corner | Corner Shelf for Kitchen | Bathroom Racks and Shelves | Pack of 2URBANMONK Stainless Steel Corn ", price: 799, oldPrice: 749 },
        {image:"https://m.media-amazon.com/images/I/513xN3dsMWL._AC_UL480_FMwebp_QL65_.jpg",category: "URBANMONK Stainless Steel Corner Shelf for Bathroom | self-Adhesive Bathroom Corner Shelf for Wall Corner | Corner Shelf for Kitchen | Bathroom Racks and Shelves | Pack of 2URBANMONK Stainless Steel Corn ", price: 999, oldPrice: 1299 },
        {image:"https://m.media-amazon.com/images/I/61wjPFSlSBL._AC_UL480_FMwebp_QL65_.jpg",category: "Oslen Stainless Steel Double Layer Chrome Finish Multipurpose Wall Mount Bath Kitchen Bathroom Accessories Rack Shelf, Silver, Set of 1Oslen Stainless Steel Double Layer Chrome Finish Multipurpose W ", price: 1299, oldPrice: 1599 },
        {image:"https://m.media-amazon.com/images/I/61wjPFSlSBL._AC_UL480_FMwebp_QL65_.jpg",category: "COSTEM Wall Shelves Kitchen Bathroom Shelf Self-Adhesive Sticker Hook Multipurpose Wall Holder Bathroom Storage Rack Box Strong Shower Rack Shelf (2 Shelf+ 2 Shop Dish) PlasticCOSTEM Wall Shelves Kitchen Bathr ", price: 879, oldPrice: 1199 },
        {image:"https://m.media-amazon.com/images/I/81xExFoSpoL._AC_UL480_FMwebp_QL65_.jpg",category: "Oslen 4 in 1 Stainless Steel Multipurpose Bathroom Shelf/Perfume Rack/Toothbrush Stand/Tumbler Holder/Soap Dish/Bathroom Accessories - (18 inch Long, 5.5 inch Wide,Mirror Finish)Oslen 4 in 1 Stainless Steel Mu", price: 1299, oldPrice: 1599 },
        {image:"https://m.media-amazon.com/images/I/61JMI0PUstL._AC_UL480_FMwebp_QL65_.jpg",category: "Racklik Pack of 2 Self-Adhesive Plastic Wall Mounted Bathroom Rack, No Drilling Dual-Layer Bathroom Wall Organizer, Storage Racks Bathroom Accessories (Multi Colour) (2)Racklik Pack of 2 Self-Adhesive ", price: 399, oldPrice: 599 },
        ],
      link: "bathrom",           
    },
    {
      images: [  
        {image: "https://m.media-amazon.com/images/I/61vcRUbb9CL._AC_UL960_FMwebp_QL65_.jpg", category: "Washing Machines", name: "Washing Machine Model A", price: 28403, oldPrice: 29709},
        {image: "https://m.media-amazon.com/images/I/71veQSm4GiL._AC_UL480_FMwebp_QL65_.jpg", category: "Refrigerators", name: "Refrigerator Model B", price: 10338, oldPrice: 12175},
        {image: "https://m.media-amazon.com/images/I/71u1dMLcIbL._AC_UL480_FMwebp_QL65_.jpg", category: "Water Purifiers", name: "Water Purifier Model C", price: 14766, oldPrice: 18942},
        {image: "https://m.media-amazon.com/images/I/71oXDFLZ-zL._AC_UL480_FMwebp_QL65_.jpg", category: "Microwave Ovens", name: "Microwave Oven Model D", price: 28523, oldPrice: 31626},
        {image: "https://m.media-amazon.com/images/I/71VHISp7ncL._AC_UL480_FMwebp_QL65_.jpg", category: "Air Conditioners", name: "Air Conditioner Model E", price: 17149, oldPrice: 20477},
        {image: "https://m.media-amazon.com/images/I/71NW5H8N1vL._AC_UL480_FMwebp_QL65_.jpg", category: "Washing Machines", name: "Washing Machine Model F", price: 27514, oldPrice: 29167},
        {image: "https://m.media-amazon.com/images/I/71NW5H8N1vL._AC_UL480_FMwebp_QL65_.jpg", category: "Refrigerators", name: "Refrigerator Model G", price: 24427, oldPrice: 27164},
        {image: "https://m.media-amazon.com/images/I/61iqtpW3JyL._AC_UL480_FMwebp_QL65_.jpg", category: "Water Purifiers", name: "Water Purifier Model H", price: 13984, oldPrice: 17665},
        {image: "https://m.media-amazon.com/images/I/71e36CQxfOL._AC_UL480_FMwebp_QL65_.jpg", category: "Microwave Ovens", name: "Microwave Oven Model I", price: 17958, oldPrice: 20344},
        {image: "https://m.media-amazon.com/images/I/718BbyumNNL._AC_UL480_FMwebp_QL65_.jpg", category: "Air Conditioners", name: "Air Conditioner Model J", price: 12714, oldPrice: 17440},
        {image: "https://m.media-amazon.com/images/I/71VpGqi-DlL._AC_UL480_FMwebp_QL65_.jpg", category: "Washing Machines", name: "Washing Machine Model K", price: 13255, oldPrice: 15130},
        {image: "https://m.media-amazon.com/images/I/71WuxWlTLNL._AC_UL480_FMwebp_QL65_.jpg", category: "Refrigerators", name: "Refrigerator Model L", price: 16497, oldPrice: 21075},
        {image: "https://m.media-amazon.com/images/I/71WuxWlTLNL._AC_UL480_FMwebp_QL65_.jpg", category: "Water Purifiers", name: "Water Purifier Model M", price: 15227, oldPrice: 16371},
        {image: "https://m.media-amazon.com/images/I/51+9E8NL8nL._AC_UL480_FMwebp_QL65_.jpg", category: "Microwave Ovens", name: "Microwave Oven Model N", price: 9857, oldPrice: 12839},
        {image: "https://m.media-amazon.com/images/I/51Ht1jhXwgL._AC_UL480_FMwebp_QL65_.jpg", category: "Air Conditioners", name: "Air Conditioner Model O", price: 24686, oldPrice: 27915}
        ],
      link: "washing",
    },
    {
      images: [
        { image: "https://m.media-amazon.com/images/I/41OPUX6vQSL._SR480,440_.jpg", category: "Refrigerators", name: "Haier 190 L 5 Star Direct Cool Single Door", price: 14490, oldPrice: 16990 },
        { image: "https://m.media-amazon.com/images/I/41GBjbe40AL._SR480,440_.jpg", category: "Refrigerators", name: "Whirlpool 184 L 2 Star Direct-Cool Single Door", price: 12490, oldPrice: 13990 },
        { image: "https://m.media-amazon.com/images/I/41MsoQ831cL._SR480,440_.jpg", category: "Refrigerators", name: "LG 185 L 4 Star Inverter Direct-Cool Single Door", price: 15490, oldPrice: 17490 },
        { image: "https://m.media-amazon.com/images/I/41lZEy8e9DL._SR480,440_.jpg", category: "Refrigerators", name: "Samsung 198 L 5 Star Digital Inverter Single Door", price: 16490, oldPrice: 18990 }
        ],
      link: "tolls"
     },
     {
      images: [
        { image: "https://m.media-amazon.com/images/I/51rMKrKA9dL._AC_SR250,250_QL65_.jpg", category: "Smart Watch", name: "Fire-Boltt Ninja Call Pro", price: 1299, oldPrice: 1599 },
        { image: "https://m.media-amazon.com/images/I/71RODY0smeL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Noise Pulse Go Buzz", price: 1399, oldPrice: 1799 },
        { image: "https://m.media-amazon.com/images/I/81L2akfNpwL._AC_UL960_FMwebp_QL65_.jpg", category: "Smart Watch", name: "boAt Wave Sigma", price: 1499, oldPrice: 1899 },
        { image: "https://m.media-amazon.com/images/I/61akt30bJsL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Fire-Boltt Ninja 3", price: 1199, oldPrice: 1699 },
        { image: "https://m.media-amazon.com/images/I/61rbYFj7DgL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "boAt Storm Call", price: 1599, oldPrice: 1899 },
        { image: "https://m.media-amazon.com/images/I/81L2akfNpwL._AC_UL480_FMwebp_QL65_.jpg", category: "Smart Watch", name: "boAt Wave Sigma (Grey)", price: 1499, oldPrice: 1799 },
        { image: "https://m.media-amazon.com/images/I/71-RIlEXCXL._AC_UL480_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Noise ColorFit Pulse", price: 1399, oldPrice: 1699 },
        { image: "https://m.media-amazon.com/images/I/71hg6m6m50L._AC_UL480_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Fire-Boltt Phoenix Pro", price: 1499, oldPrice: 1999 },
        { image: "https://m.media-amazon.com/images/I/71RODY0smeL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Noise Pulse Go Buzz (Blue)", price: 1399, oldPrice: 1699 },
        { image: "https://m.media-amazon.com/images/I/71Iit7U1S+L._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "boAt Wave Lite", price: 1299, oldPrice: 1499 },
        { image: "https://m.media-amazon.com/images/I/61Fwv0TtQnL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Fire-Boltt Talk 2", price: 1599, oldPrice: 1899 },
        { image: "https://m.media-amazon.com/images/I/41acjxCXYOL._AC_UF480,480_SR480,480_.jpg", category: "Smart Watch", name: "boAt Lunar Peak", price: 1799, oldPrice: 2299 },
        { image: "https://m.media-amazon.com/images/I/61i1yao29pL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Noise ColorFit Icon", price: 1499, oldPrice: 1899 },
        { image: "https://m.media-amazon.com/images/I/61bm7UEdGAL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Fire-Boltt Rage", price: 1299, oldPrice: 1599 },
        { image: "https://m.media-amazon.com/images/I/71yYUKOQEeL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "boAt Wave Call 2", price: 1699, oldPrice: 2099 },
        { image: "https://m.media-amazon.com/images/I/71aTghUQfqL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Fire-Boltt Phoenix", price: 1499, oldPrice: 1799 },
        { image: "https://m.media-amazon.com/images/I/61ofV82kMKL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Noise Pulse 2 Max", price: 1399, oldPrice: 1699 },
        { image: "https://m.media-amazon.com/images/I/71yYUKOQEeL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "boAt Wave Call 2 (Black)", price: 1699, oldPrice: 1999 },
        { image: "https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Fire-Boltt Ninja 2", price: 1299, oldPrice: 1599 },
        { image: "https://m.media-amazon.com/images/I/61Q2aOIpXZL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "boAt Wave Edge", price: 1499, oldPrice: 1799 },
        { image: "https://m.media-amazon.com/images/I/61q0ZgCYoJL._AC_UY327_FMwebp_QL65_.jpg", category: "Smart Watch", name: "Fire-Boltt Ninja Pro", price: 1299, oldPrice: 1599 },
        { image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0433f144-f514-4458-877e-f8479a61cfbe._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg", category: "Smart Watch", name: "boAt Smartwatch Ad", price: 999, oldPrice: 1299 },
        { image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/cb349949-0ca2-4424-a881-ed9e4008ab42._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg", category: "Smart Watch", name: "Fire-Boltt Ad Banner", price: 1999, oldPrice: 2099 }
        ],
      link: "watch"
      },
      {
      images: [
        {image:"https://m.media-amazon.com/images/I/61MTISv8PkL._AC_SY200_.jpg",category: "The Banner Company Birthday Decoration Items Purple and White Theme Combination for Boys Girls Men Women Kid ", price: 1299, oldPrice: 14999 },
        {image:"https://m.media-amazon.com/images/I/61xKeolcI3L._AC_SY200_.jpg",category: "RIZIK STORE® Pure Brass Kalpavriksha Tree Showpiece (7.5Inch,650g) - Good Luck Home Decor with Antique ", price: 1299, oldPrice: 1599 },
        {image:"https://m.media-amazon.com/images/I/71M10HG1plL._AC_SY200_.jpg",category:  "Dekorly Artificial Potted Plants, 8 Pack Artificial Plastic Eucalyptus Plants Small Indoor Potted Houseplants, ", price: 499, oldPrice: 599 },
        {image:"https://m.media-amazon.com/images/I/61dGBbqLUGL._AC_SY200_.jpg",category:  "Street27 Polyvinyl Chloride 3Pcs Astronaut Action Figurine Home Decor Astronaut Statue Study Office Desk Decor", price: 1299, oldPrice: 1599 },
        ],
      link: "decoration",
    },
  ];


  

  // ✅ URL से matching category ढूंढ रहे हैं
  const category = visitPage.find((item) => item.link.toLowerCase() === categoryName.toLowerCase());
 return (
  <>
    <div className="category-page12">
      {category ? (
        <div>

          <div className="category-images">
            {category.images.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={`Category ${index}`} loading="lazy" />
                 <p className="category-name"> {item.category}</p>
                <h3 className="acname">{item.name}</h3>

                 <div className="price">
               ₹{item.price}
                {item.oldPrice && (
                  <span className="old-price">₹{item.oldPrice}</span>
                )}
              </div>
                
                <div className="free-deiivery"> Free Delivery</div>
                <div className="rating-content">
                <span className="rr">⭐⭐⭐⭐</span>
               <button onClick={() => handleAddToCart(item)} className="vbutton">+ Add</button>
              </div></div>
            ))}
          </div>
        </div>
      ) : (
        <p className="error-msg">⚠️ Category not found</p>
      )}
    </div>
  </>
);
}