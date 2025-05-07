import "./Features.css";

const features = [
  {
    icon: "🔄", title: "Easy Returns", description: ( 
    <>
        Not satisfied with a product? Return it at the doorstep & get a refund
        within hours. No questions asked<span className="green"> policy.</span>
      </>
    ),},
  { icon: "📦", title: "Wide Assortment", description: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",},
  { icon: "🎁", title: "Best Prices & Offers", description: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.",},
  { icon: "🕒", title: "10 minute grocery now", description: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",},
];

const Features = () => {
  return (
    <div className="features-container">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{item.icon}</div>
          <h3 className="feature-title">{item.title}</h3>
          <p className="feature-desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
