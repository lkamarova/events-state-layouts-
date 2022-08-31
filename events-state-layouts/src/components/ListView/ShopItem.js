import "../../App.css";

const ShopItem = ({ item }) => {
  return (
    <div className="list">
      <img className="imgList" src={item.img} alt={item.name} />
      <span className="nameCard">{item.name}</span>
      <span className="colorCard">{item.color}</span>
      <span className="price">${item.price}</span>
      <button className="button">Add to card</button>
    </div>
  );
};

export default ShopItem;
