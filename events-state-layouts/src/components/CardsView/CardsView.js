import "../../App.css";
import ShopCard from "./ShopCard";

const CardsView = ({ cards }) => {
  return (
    <div className="cardsViewWrap">
      {cards.map(el => <ShopCard card={el} />)}
    </div>
  );
};

export default CardsView;
