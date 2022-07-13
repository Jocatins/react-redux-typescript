import CartItem from "../CartItem/CartItem";
import { CartWrapper } from "./Cart.styles";
import { CartItemType } from "../Api";

type CartItemProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<CartItemProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) => {
  return  items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  };
  return (
    <>
      <CartWrapper>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? <p>No items left</p> : null}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <h2>Total : ${calculateTotal(cartItems).toFixed(2)}</h2>
      </CartWrapper>
    </>
  );
};

export default Cart;
