import "./card.css";

const Card = ({events}) => {  
  return (
    <div>
      <div className="avishkarCard">
        <div className="boxshadow"></div>
        <div className="avishkarMain">
          <div className="top"></div>
          <div className="left side"></div>
          <div className="right side"></div>
          <div className="avishkartitle ">Events</div>
          <div className="button-container mb-5">
            {events.map((event) => {
              return <div key={event.id} className="avishkar_button text-[80%] cursor-pointer">{event.title}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
