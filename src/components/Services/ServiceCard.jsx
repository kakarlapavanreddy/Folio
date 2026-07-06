function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />

      <div className="service-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <button>Learn More</button>
      </div>
    </div>
  );
}

export default ServiceCard;
