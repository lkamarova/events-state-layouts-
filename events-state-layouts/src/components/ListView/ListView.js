import "../../App.css";
import ShopItem from "./ShopItem";

const ListView = ({ items }) => {
  return (
    <div className="cardWrap">
      {items.map(el => <ShopItem item={el} />)}
    </div>
  );
};

export default ListView;
