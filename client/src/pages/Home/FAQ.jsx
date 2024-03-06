import React, { useState } from "react";
import "./FAQ.css"

const Accordion = ({ number, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`accordions__item ${isOpen ? "open" : ""}`}>
      <button className="accordions__control" aria-expanded={isOpen} onClick={handleToggle}>
        <span className="accordions__number">{number}</span>
        <span className="accordions__title">{title}</span>
        <span className="accordions__icon"></span>
      </button>
      <div className="accordions__content text" aria-hidden={!isOpen}>
        <p>{content}</p>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="process">
      <div className="process__container">
        <div className="process__accordions">
          <ul className="accordions__list">
            <Accordion
              number="01"
              title="Consultation"
              content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            />
            <Accordion
              number="02"
              title="Research and Strategy Development"
              content="In today's marketplace, R&D strategy helps a business take a leading position and keeps it competitive, agile, adaptable, and profitable. The research and development concept is one of the earliest stages in creating a business strategy, but the commercial success of the entire project depends on its successful introduction."
            />
            <Accordion
              number="03"
              title="Implementation"
              content="Strategy implementation is the process of turning your strategic plan into action. Whether you're executing a new marketing plan to increase sales or introducing a new work management software to increase efficiency—your plan is only as valuable as the implementation."
            />
            {/* Add more accordion items as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
