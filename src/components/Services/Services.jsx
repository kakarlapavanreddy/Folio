import "./Services.css";
import ServiceCard from "./ServiceCard";
import servicesData from "../../data/servicesData";

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-heading">
        <p>OUR SERVICES</p>

        <h2>What We Do</h2>

        <span>
          We create modern digital products that help businesses grow.
        </span>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
