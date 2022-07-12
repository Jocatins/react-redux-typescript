import Button from "@material-ui/core/Button";
// type
import { CartItemType } from "../Api";
import { CartItemWrapper } from "./CartItem.styles";

type CartItemProps = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  children?: React.ReactNode;
};

const CartItem: React.FC<CartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => {
  return (
    <CartItemWrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price : ${item.price}</p>
          <p>Total : ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </CartItemWrapper>
  );
};

export default CartItem;
