import { Button } from "@material-ui/core";
import { CartItemType } from "../Api";
import { ItemWrapper } from "./Item.styles";

type ItemProps = {
  item: CartItemType;
  handleAddItem: (clickedItem: CartItemType) => void;
};

const Item: React.FC<ItemProps> = ({ item, handleAddItem }) => (
  <ItemWrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <h3>{item.description}</h3>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddItem(item)}>Add to cart</Button>
  </ItemWrapper>
);

export default Item;
