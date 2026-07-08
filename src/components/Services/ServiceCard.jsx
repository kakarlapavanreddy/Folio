import "./Services.css";

function ServiceCard({ title, image, active, number }) {
  return (
    <div className={`service-card ${active ? "active" : ""}`}>
      <img src={image} alt={title} />

      <span>{number}</span>

      <h3>{title}</h3>
    </div>
  );
}

export default ServiceCard;
