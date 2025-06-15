import { useLocation, useOutletContext } from "react-router-dom";

export default function CategoriesPage() {
     const { handleAddToCart } = useOutletContext(); // function App.jsx से मिल रहा
  const location = useLocation();
  const categoryName = location.pathname.split("/").pop(); 

  const categories = [
    {
      images: [
       {image: "https://m.media-amazon.com/images/I/71xBgzAg6qL._AC_UL480_FMwebp_QL65_.jpg", category: "Melam Chemba Soft Puttu Podi 1kg |", name: "Melam Chemba", price: 115, oldPrice: 125 },
       {image: "https://m.media-amazon.com/images/I/713phGwVB-L._AC_UL480_FMwebp_QL65_.jpg", category: "India Gate Basmati Rice Dubar 5 kg / 6 Kg (Weight May Vary)", name: "India Gate Rice", price: 875, oldPrice: 999 },
       {image:"https://m.media-amazon.com/images/I/71vDfT9FFfL._AC_UL480_FMwebp_QL65_.jpg", category: "GM Foods Rice Flour Atta, 500 gm", name: "GM Foods Rice", price: 79, oldPrice: 99 },
       {image:"https://m.media-amazon.com/images/I/71P6oRYdPCL._AC_UL480_FMwebp_QL65_.jpg", category: "Vedaka Premium Toor Dal, 1kg", name: "Vedaka-Dal", price: 179, oldPrice: 200},
       {image:"https://m.media-amazon.com/images/I/71TPmx--6TL._AC_UL480_FMwebp_QL65_.jpg", category: "Safe Harvest Pesticide Free Goodness ", name: "Safe Harvest", price: 199, oldPrice: 249 },
       {image:"https://m.media-amazon.com/images/I/61GUyVoniYL._AC_UL480_FMwebp_QL65_.jpg", category: "Pure Tree Certified Organic White Chawli | 1800 g", name: "Chawli Lobia Dal", price:749, oldPrice: 800 },
       {image:"https://m.media-amazon.com/images/I/81VLNgWWNHL._AC_UL480_FMwebp_QL65_.jpg", category: "Vedaka Premium Unpolished White Urad Whole | 5 Kg", name: "Vedaka Premium Urad", price: 1025, oldPrice: 104 },
       {image:"https://m.media-amazon.com/images/I/91CI0QEuy8L._AC_UL480_FMwebp_QL65_.jpg", category: "Vedaka Organic Urad Dal Flour /500Gram, ", name: "Vedaka Organic Urad Dal", price: 315, oldPrice: 349 },
       {image:"https://m.media-amazon.com/images/I/71OnKlMX6mL._AC_UL480_FMwebp_QL65_.jpg", category: "Vedaka Premium Unpolished White Urad Whole | 5 Kg", name: "Vedaka Premium Urad", price: 129, oldPrice: 38 },
       {image:"https://m.media-amazon.com/images/I/71pGgGFGLxL._AC_UL480_FMwebp_QL65_.jpg", category: "24 Mantra Organic Rice Flour/Chawal Atta - 500gms,", name: "Mantra Organic Rice", price: 126, oldPrice: 149 },
       {image:"https://m.media-amazon.com/images/I/71qaAOC2caL._AC_UL480_FMwebp_QL65_.jpg", category: "Tata Sampann Chana Dal, 500g", name: "Tata Sampann Chana Dal", price: 12, oldPrice: 38},
       {image:"https://m.media-amazon.com/images/I/61GXbTd0zrL._AC_UL480_FMwebp_QL65_.jpg", category: "Daawat Rozana Super Basmati Rice 5Kg| For Everyday Consumption| Cooked Grain", name: "Daawat Basmati Rice", price: 749, oldPrice: 799 },
       {image:"https://m.media-amazon.com/images/I/91nBm7ilp9L._AC_UL480_FMwebp_QL65_.jpg", category: "Nature's Superfoods Aashirvaad Organic Atta, 5kg", name: "Aashirvaad Organic Atta", price: 404, oldPrice: 419 },
       {image:"https://m.media-amazon.com/images/I/61HkUPNiAVL._AC_UL480_FMwebp_QL65_.jpg", category: "Fortune Chakki Fresh Atta, 10 kg, 100% Atta 0% Maida", name: "Fortune Chakki Fresh Atta", price: "443", oldPrice: "449" },
      ],
      link: "atta",
    },
    {
      images: [
        {image: "https://m.media-amazon.com/images/I/61BZm7qbkyL._AC_UL480_FMwebp_QL65_.jpg", category: "Huggies Complete Comfort Wonder Pants | Pant Style Baby Diapers L Size, 64 Coun", name: "Baby Diapers", price: 714, oldPrice: 749 },
        {image:"https://m.media-amazon.com/images/I/61OwWTLnhyL._AC_UL480_FMwebp_QL65_.jpg",category: "Huggies Natural Soft Premium Baby Diaper Pants, Our No.1 Soft Pants, Large (L) ", name: "Premium Baby Diaper", price: 591, oldPrice: 599 },
        {image:"https://m.media-amazon.com/images/I/81TZ5VXMOAL._AC_UL480_FMwebp_QL65_.jpg",category: "MamyPoko Pants Extra Absorb Baby Diapers, Medium (M size)", name: "Absorb Baby Diapers", price: 1559, oldPrice: 1599 },
        {image: "https://m.media-amazon.com/images/I/71ePuafgbmL._AC_UL480_FMwebp_QL65_.jpg",category: "Pampers Premium Care Pant Style Baby Diapers | Medium (M size)", name: "Baby Diapers", price: 1933, oldPrice: 1999 },
        {image:"https://m.media-amazon.com/images/I/81opk3yvV8L._AC_UL480_FMwebp_QL65_.jpg",category: "Himalaya Total Care Baby Pants Diapers, Extra Large (12 - 17 kg), 74 Count", name: "Himalaya", price: 938, oldPrice: 999 },
        {image:"https://m.media-amazon.com/images/I/618vKle+A5L._AC_UL480_FMwebp_QL65_.jpg",category: "Pampers Premium Care Pant Style Baby Diapers, Newborn/X-Small (NB/XS), 7", name: "Newborn", price: 746, oldPrice: 749 },
        {image:"https://m.media-amazon.com/images/I/711gPkYu2gL._AC_UL480_FMwebp_QL65_.jpg",category: "Pampers Premium Care Pant Style Baby Diapers | Small (S size) | 140 Count", name: "Diapers", price: 2019, oldPrice: 2049 },
        {image:"https://m.media-amazon.com/images/I/71iLJDssIDL._AC_UL480_FMwebp_QL65_.jpg",category: "Pampers Premium Care Pant Style Baby Diapers, XX-Large (XXL size), 90 Count,", name: "Diapers", price: 2971, oldPrice: 2999},
        {image:"https://m.media-amazon.com/images/I/71NqsRJuzhL._AC_UL480_FMwebp_QL65_.jpg",category: "Pampers Active Baby Diapers, New Born, Extra Small, (NB, XS) size, 24 Count, Taped style", name: "Diapers", price: 315, oldPrice: 349 },
        {image:"https://m.media-amazon.com/images/I/61oubCHqllL._AC_UL480_FMwebp_QL65_.jpg",category: "Pampers Premium Care Pant Style Baby Diapers, Newborn (XS), 30 Count,", name: "Newborn", price: 399, oldPrice: 449 },
        {image:"https://m.media-amazon.com/images/I/61JaCJ4w1dL._AC_UL480_FMwebp_QL65_.jpg",category: "Pampers Active Baby Taped Diapers, Small size diapers, (S) 92 count, ", name: " Taped Diapers", price: 1338, oldPrice: 1349 },
        {image:"https://m.media-amazon.com/images/I/81B2IrEd1nL._AC_UL480_FMwebp_QL65_.jpg",category: "Himalaya Total Care Baby Pants Diapers, Extra Large (12 - 17 kg), 74 Count", name: "Himalaya", price: 799, oldPrice: 819 },
        {image:"https://m.media-amazon.com/images/I/71lnAtV-97L._AC_UL480_FMwebp_QL65_.jpg",category: " Supples Premium Diaper Pants | for Newborn Babies | 80 Diapers |", name: "Newborn Babies", price: 505, oldPrice: 225 },
      ],
      link: "Babycare",
    },
    {
      images: [
        {image:"https://m.media-amazon.com/images/I/916aCP2ISiL._AC_UL480_FMwebp_QL65_.jpg",category: "Karachi Fruit Biscuit - Premium, 400 g", name: "Biscuitc", price: 171, oldPrice: 199 },
        {image:"https://m.media-amazon.com/images/I/71PzQlqCLzL._AC_UL480_FMwebp_QL65_.jpg",category: "Karachi Bakery Cashew Biscuits, 400g", name: "Biscuit", price: 218, oldPrice: 249},
        {image:"https://m.media-amazon.com/images/I/71K-Na2qlZL._AC_UL480_FMwebp_QL65_.jpg",category: "Karachi Bakery Pistachio Biscuits, 400 g/300 g (Weight May Vary)", name: "Biscuit", price: 285, oldPrice: 299 },
        {image:"https://m.media-amazon.com/images/I/81D0zhsOSIL._AC_UL480_FMwebp_QL65_.jpg",category: "Karachi Bakery Almond Millet Biscuits, 300 g", name: "Biscuit", price: 145, oldPrice: 149 },
        {image:"https://m.media-amazon.com/images/I/71LsS6mowpL._AC_UL480_FMwebp_QL65_.jpg",category: "Karachi Bakery Butter Short Bread, 300 g", name: "Butter", price: 234, oldPrice: 249 },
        {image:"https://m.media-amazon.com/images/I/41rg949C5fL._AC_UL480_FMwebp_QL65_.jpg",category: "Baker's Studio Orange Almond Cookies 200gm - Gluten-Free Healthy Snack | Nutrient-Rich", name: "Snack", price: 245, oldPrice: 249 },
        {image:"https://m.media-amazon.com/images/I/71Hk1OTsD2L._AC_UL480_FMwebp_QL65_.jpg",category: "Midbreak Pista Delight - Sugar-Free Biscuits | Cookies Infused With Rich Pistachios |", name: "Biscuit", price: 356, oldPrice: 379 },
        {image:"https://m.media-amazon.com/images/I/816vG6Pci5L._AC_UL480_FMwebp_QL65_.jpg",category: "ANAND Sweets Pure Butter Almond Cookies/Biscotti (225 gram, Pack Of 2), Anand", name: "Biscuit", price: 915, oldPrice: 999 },
        {image:"https://m.media-amazon.com/images/I/61Gv+Cg7yTL._AC_UL480_FMwebp_QL65_.jpg",category: "CookieMan Butter Cashew Cookies – 300g Tin Box | Rich & Crunchy Eggless Cashew", name: "Butter", price: 220, oldPrice: 249 },
        {image:"https://m.media-amazon.com/images/I/61smUjpd0vL._AC_UL480_FMwebp_QL65_.jpg",category: "Snack-a-Doodle Butter Cookies | Nutritious Healthy Snacks | No Maida | Rich In", name: "Snacks", price: 220, oldPrice: 239 },
        {image:"https://m.media-amazon.com/images/I/71K+5uUMMsL._AC_UL480_FMwebp_QL65_.jpg",category: "Karachi Bakery Chai Biscuit, 400g", name: " Biscuit", price: 125, oldPrice: 139 },
        {image:"https://m.media-amazon.com/images/I/81gDyJWR24L._AC_UL480_FMwebp_QL65_.jpg",category: "Karachi Bakery Coconut Flavour Cookies 400g | Delicious Snack | Tea Time", name: "Snack ", price: 150, oldPrice: 159 },
        {image:"https://m.media-amazon.com/images/I/91GJdSbg0tL._AC_UL480_FMwebp_QL65_.jpg",category: "Karachi Bakery's Ajwain Biscuits 400g | Delicious Biscuits", name: "Biscuits", price: 279, oldPrice: 299},
        {image:"https://m.media-amazon.com/images/I/91GJdSbg0tL._AC_UL480_FMwebp_QL65_.jpg",category: "Karachi Bakery Premium Fruit Biscuit, 500g", name: "Biscuits", price: "250", oldPrice: 279 },
        {image:"https://m.media-amazon.com/images/I/71DDi4vWygL._AC_UL480_FMwebp_QL65_.jpg",category: "Karachi's Bakery Milk Mysore Pack 200G", name: "Milk", price: 110, oldPrice: 119 },
        ],
      link: "Bakery",
    },
    {
      images: [
        {image:"https://m.media-amazon.com/images/I/71qLcYLgsaL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71V5rj5NmtL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71oCcY9rLUL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71gsZUQ3HCL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71G0HWpPvLL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/61FdqpY4+kL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71y9iNGDZHL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/91I7yETW-dL._AC_UL960_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71ccAzqgSHL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71cc+EtLa2S._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/91CErYsF-rL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/513xN3dsMWL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/61wjPFSlSBL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/61wjPFSlSBL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/81xExFoSpoL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/61JMI0PUstL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        ],
      link: "Chicken",           
    },
    {
      images: [
         {image:"https://m.media-amazon.com/images/I/61vcRUbb9CL._AC_UL960_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71veQSm4GiL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71u1dMLcIbL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71oXDFLZ-zL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71VHISp7ncL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71NW5H8N1vL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71NW5H8N1vL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/61iqtpW3JyL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71e36CQxfOL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/718BbyumNNL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71VpGqi-DlL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71WuxWlTLNL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71WuxWlTLNL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/51+9E8NL8nL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/51Ht1jhXwgL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
      ],
      imageNames: ["Washing Machine", "Refrigerator", "Water Purifier", "Microwave Oven"],
      link: "Cleaning",
    },
    {
      images: [
       {image:"https://m.media-amazon.com/images/I/71tTYGmAMGL._AC_UL480_FMwebp_QL65_.jpg",category: "Coca-Cola Original Taste Soft Drink Can, 300 Ml", name: "referator ac", price: 299, oldPrice: 399},
       {image:"https://m.media-amazon.com/images/I/41pyEMwnGCL._AC_UL480_FMwebp_QL65_.jpg",category: "Sprite Lemon-Lime Flavoured Cold Drink | Refreshing Taste | Clear Soft Drink with No", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61yecBpCDhL._AC_UL480_FMwebp_QL65_.jpg",category: "Thums Up Soft Drink Can, 300 ml", name: "referator ac", price: 299, oldPrice: 399 },
      ],
      imageNames: ["Kitchen Set", "Steel Bottles", "Dinner Set", "Bathrrom-set"],
      link: "ColdDrinks",
    },
    {
      images: [
    
       {image:"https://m.media-amazon.com/images/I/61akt30bJsL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61rbYFj7DgL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/81L2akfNpwL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71-RIlEXCXL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71hg6m6m50L._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71RODY0smeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71Iit7U1S+L._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61Fwv0TtQnL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/41acjxCXYOL._AC_UF480,480_SR480,480_.jpg",category: "fdsgfv",name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61i1yao29pL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61bm7UEdGAL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71yYUKOQEeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71aTghUQfqL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61ofV82kMKL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71yYUKOQEeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61Q2aOIpXZL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61q0ZgCYoJL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0433f144-f514-4458-877e-f8479a61cfbe._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/cb349949-0ca2-4424-a881-ed9e4008ab42._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
      ],
      imageNames: ["Washing Machine", "Refrigerator", "Water Purifier", "Microwave Oven"],
      link: "Dairy",
    },
    {
      images: [
       {image:"https://m.media-amazon.com/images/I/61MTISv8PkL._AC_SY200_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61xKeolcI3L._AC_SY200_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71M10HG1plL._AC_SY200_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61dGBbqLUGL._AC_SY200_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
      ],
      imageNames: ["Kitchen Set", "Steel Bottles", "Dinner Set", "Bathrrom-set"],
      link: "Fruits",
    },
    {
     images: [
        {image:"https://m.media-amazon.com/images/I/71qLcYLgsaL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71V5rj5NmtL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71oCcY9rLUL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71gsZUQ3HCL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71G0HWpPvLL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/61FdqpY4+kL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71y9iNGDZHL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/91I7yETW-dL._AC_UL960_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71ccAzqgSHL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/71cc+EtLa2S._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/91CErYsF-rL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/513xN3dsMWL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/61wjPFSlSBL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/61wjPFSlSBL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/81xExFoSpoL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        {image:"https://m.media-amazon.com/images/I/61JMI0PUstL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
        ],
      link: "InstantFood",           
    },
    {
      images: [
         {image:"https://m.media-amazon.com/images/I/61vcRUbb9CL._AC_UL960_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71veQSm4GiL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71u1dMLcIbL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71oXDFLZ-zL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71VHISp7ncL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71NW5H8N1vL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71NW5H8N1vL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/61iqtpW3JyL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71e36CQxfOL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/718BbyumNNL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71VpGqi-DlL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71WuxWlTLNL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/71WuxWlTLNL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/51+9E8NL8nL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
         {image:"https://m.media-amazon.com/images/I/51Ht1jhXwgL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
      ],
      imageNames: ["Washing Machine", "Refrigerator", "Water Purifier", "Microwave Oven"],
      link: "Snack",
    },
    {
      images: [
         {image:"https://m.media-amazon.com/images/I/41OPUX6vQSL._SR480,440_.jpg",name: "referator ac"},
         {image:"https://m.media-amazon.com/images/I/41GBjbe40AL._SR480,440_.jpg",name: "referator ac"},
         {image:"https://m.media-amazon.com/images/I/41MsoQ831cL._SR480,440_.jpg",name: "referator ac"},
         {image:"https://m.media-amazon.com/images/I/41lZEy8e9DL._SR480,440_.jpg",name: "referator ac"},
      ],
      imageNames: ["Kitchen Set", "Steel Bottles", "Dinner Set", "Bathrrom-set"],
      link: "PetCare",
    },
    {
      images: [
       {image:"https://m.media-amazon.com/images/I/51rMKrKA9dL._AC_SR250,250_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399},
       {image:"https://m.media-amazon.com/images/I/71RODY0smeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/81L2akfNpwL._AC_UL960_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61akt30bJsL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61rbYFj7DgL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/81L2akfNpwL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71-RIlEXCXL._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71hg6m6m50L._AC_UL480_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71RODY0smeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71Iit7U1S+L._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61Fwv0TtQnL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/41acjxCXYOL._AC_UF480,480_SR480,480_.jpg",category: "fdsgfv",name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61i1yao29pL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61bm7UEdGAL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71yYUKOQEeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71aTghUQfqL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61ofV82kMKL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/71yYUKOQEeL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61Q2aOIpXZL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/I/61q0ZgCYoJL._AC_UY327_FMwebp_QL65_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0433f144-f514-4458-877e-f8479a61cfbe._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
       {image:"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/cb349949-0ca2-4424-a881-ed9e4008ab42._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg",category: "fdsgfv", name: "referator ac", price: 299, oldPrice: 399 },
      ],
      imageNames: ["Washing Machine", "Refrigerator", "Water Purifier", "Microwave Oven"],
      link: "Coffee",
    },
  ];

  // ✅ URL से matching category ढूंढ रहे हैं
  const category = categories.find((item) => item.link.toLowerCase() === categoryName.toLowerCase());
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

                 <p className="price">
                  <span className="new-price7">₹{item.price}</span>{" "}
                  <span className="old-price7">₹{item.oldPrice}</span>
                </p>
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