import { useLocation, useOutletContext } from "react-router-dom";
import "./VisitPage.css"

export default function CategoryPage() {
  
   const { handleAddToCart } = useOutletContext(); // function App.jsx से मिल रहा
  const location = useLocation();
  const categoryName = location.pathname.split("/").pop(); // URL से category name निकाल रहे हैं

  const visitPage = [
    {
      images: [
       {image: "https://cdn.pixabay.com/photo/2022/01/04/05/29/kitchen-6914223_1280.jpg", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image: "https://cdn.pixabay.com/photo/2020/08/10/06/52/cleaning-5476950_1280.jpg", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://cdn.pixabay.com/photo/2014/08/11/21/26/kitchen-416027_1280.jpg", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://cdn.pixabay.com/photo/2017/01/23/09/02/render-2001809_1280.jpg", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://cdn.pixabay.com/photo/2018/04/13/20/18/smart-home-3317434_1280.jpg", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://cdn.pixabay.com/photo/2017/06/01/21/39/kitchen-2364667_1280.jpg", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://cdn.pixabay.com/photo/2018/06/15/01/21/water-bottle-3475997_1280.jpg", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://cdn.pixabay.com/photo/2018/06/15/01/18/fridge-3475996_1280.jpg", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://cdn.pixabay.com/photo/2017/02/24/12/24/kitchen-2094738_1280.jpg", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://media.istockphoto.com/id/2161040867/photo/bright-kitchen-with-stainless-steel-appliances-island-and-white-cabinetry.jpg?s=612x612&w=0&k=20&c=HQOyRyHAB_3oF_a7k6N2hca8O4B8omJDFM2A3Tzevsk=", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://media.istockphoto.com/id/535075747/photo/contemporary-classic-domestic-kitchen-refrigerator.jpg?s=612x612&w=0&k=20&c=mQI1PGo3bd6iCnIBULi5NPeNWB7umFB7l6Niu1op0DY=", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://media.istockphoto.com/id/1193825765/photo/white-kitchen-design.jpg?s=612x612&w=0&k=20&c=cBTsNHfi3WniuoeC6gFUOQoOiqW9R9Sd8-V7IQ8_3uw=", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://media.istockphoto.com/id/1444380038/photo/new-semi-furnished-white-walled-kitchen-with-a-marble-top-island.jpg?s=612x612&w=0&k=20&c=Zo7D2EWg7twaJ4Pg2j3IEZOrQNUf8lrB8oQad_FenHc=", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://media.istockphoto.com/id/484033184/photo/classic-kitchen-with-green-interior-paint-and-white-cabinets.jpg?s=612x612&w=0&k=20&c=gaV5H0L5KYWWN2TTXc4IKvO7FYmWBrGzEYB3pOCZAcU=", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
      ],
      link: "Ac",
    },
    
    {
  
      images: [
        {image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/706b4685-f5a6-47cb-941a-929ce6ee9be9._CR0,477,2000,1047_SX810_CB1169409_QL70_.jpg", category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/91akRTwkoFL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/81-x16pT-SL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image: "https://m.media-amazon.com/images/I/71YTYzfMceL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/61zWWJFXwxL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/41aBhhV-btL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image: "https://m.media-amazon.com/images/I/616g9EtiugS._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image: "https://m.media-amazon.com/images/I/41I75Xt8xdL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:  "https://m.media-amazon.com/images/I/41I75Xt8xdL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/71FuX0WR14L._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/91Mv61Uln4L._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/617vXvrmljL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/816BSTUdXfL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
      ],
      link: "kallen",
    },
    {
      images: [
        {image:"https://m.media-amazon.com/images/I/81AAL0FDfnL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/5147cEm6w-L._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/5147cEm6w-L._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/610InQb9rTL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/71xk9g496wL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/61SgADmAyDL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/61SgADmAyDL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/61SgADmAyDL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/61SgADmAyDL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/61eT1LbHynL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/719v8HOT4uL._AC_UL480_FMwebp_QL65_.jpg ",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://images-eu.ssl-images-amazon.com/images/I/61qj7tWT4SL._AC_UL165_SR165,165_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/41k3ijvmkRL._AC_UF480,600_SR480,600_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/31E2iaCTRVL._AC_UF480,600_SR480,600_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/31E2iaCTRVL._AC_UF480,600_SR480,600_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        ],
      link: "women",
    },
    {
  
      images: [
        {image:"https://m.media-amazon.com/images/I/71qLcYLgsaL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/71V5rj5NmtL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/71oCcY9rLUL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/71gsZUQ3HCL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/71G0HWpPvLL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/61FdqpY4+kL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/71y9iNGDZHL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/91I7yETW-dL._AC_UL960_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/71ccAzqgSHL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/71cc+EtLa2S._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/91CErYsF-rL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/513xN3dsMWL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/61wjPFSlSBL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/61wjPFSlSBL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/81xExFoSpoL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        {image:"https://m.media-amazon.com/images/I/61JMI0PUstL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
        ],
      link: "bathrom",           
    },
    {
     
      images: [
         {image:"https://m.media-amazon.com/images/I/61vcRUbb9CL._AC_UL960_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/71veQSm4GiL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/71u1dMLcIbL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/71oXDFLZ-zL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/71VHISp7ncL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/71NW5H8N1vL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/71NW5H8N1vL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/61iqtpW3JyL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/71e36CQxfOL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/718BbyumNNL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/71VpGqi-DlL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/71WuxWlTLNL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/71WuxWlTLNL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/51+9E8NL8nL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
         {image:"https://m.media-amazon.com/images/I/51Ht1jhXwgL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
      ],
      imageNames: ["Washing Machine", "Refrigerator", "Water Purifier", "Microwave Oven"],
      link: "washing",
    },
    {

      images: [
         {image:"https://m.media-amazon.com/images/I/41OPUX6vQSL._SR480,440_.jpg",name: "referator ac"},
         {image:"https://m.media-amazon.com/images/I/41GBjbe40AL._SR480,440_.jpg",name: "referator ac"},
         {image:"https://m.media-amazon.com/images/I/41MsoQ831cL._SR480,440_.jpg",name: "referator ac"},
         {image:"https://m.media-amazon.com/images/I/41lZEy8e9DL._SR480,440_.jpg",name: "referator ac"},
      ],
      imageNames: ["Kitchen Set", "Steel Bottles", "Dinner Set", "Bathrrom-set"],
      link: "tolls",
    },

    {
  
      images: [
       {image:"https://m.media-amazon.com/images/I/51rMKrKA9dL._AC_SR250,250_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000},
       {image:"https://m.media-amazon.com/images/I/71RODY0smeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/81L2akfNpwL._AC_UL960_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61akt30bJsL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61rbYFj7DgL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/81L2akfNpwL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/71-RIlEXCXL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/71hg6m6m50L._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/71RODY0smeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/71Iit7U1S+L._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61Fwv0TtQnL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/41acjxCXYOL._AC_UF480,480_SR480,480_.jpg",category: "fdsgfv",name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61i1yao29pL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61bm7UEdGAL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/71yYUKOQEeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/71aTghUQfqL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61ofV82kMKL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/71yYUKOQEeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61Q2aOIpXZL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61q0ZgCYoJL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0433f144-f514-4458-877e-f8479a61cfbe._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/cb349949-0ca2-4424-a881-ed9e4008ab42._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
      
      ],
      imageNames: ["Washing Machine", "Refrigerator", "Water Purifier", "Microwave Oven"],
      link: "watch",
    },
    {

      images: [
       {image:"https://m.media-amazon.com/images/I/61MTISv8PkL._AC_SY200_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61xKeolcI3L._AC_SY200_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/71M10HG1plL._AC_SY200_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
       {image:"https://m.media-amazon.com/images/I/61dGBbqLUGL._AC_SY200_.jpg",category: "fdsgfv", name: "referator ac", price: 30000, oldPrice: 38000 },
      ],
      imageNames: ["Kitchen Set", "Steel Bottles", "Dinner Set", "Bathrrom-set"],
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
                 <p className="category-name">Category: {item.category}</p>
                <h3 className="acname">{item.name}</h3>

                 <div className="price">
                {item.price}
                {item.oldPrice && (
                  <span className="old-price">{item.oldPrice}</span>
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