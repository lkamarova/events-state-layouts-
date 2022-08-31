import "../../App.css";

const ShopCard = ({ card }) => {
  return (
    <div className="cardWrap">
      <div className="card">
        <div className="descriptionCard">
          <span className="nameCard">{card.name}</span>
          <span className="colorCard">{card.color}</span>
          <img className="img" src={card.img} alt={card.name} />
        </div>
        <div>
          <span className="price">${card.price}</span>
          <button className="button">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
