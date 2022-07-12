import { useState } from "react";
import { useQuery } from "react-query";

import Drawer from "@material-ui/core/Drawer";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
// eslint-disable-next-line
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// eslint-disable-next-line
import Badge from "@material-ui/core/Badge";
// styles
import { AllItemsWrapper, StyledButton } from "./AllItems.styles";
import { CartItemType, getProducts } from "../Api";
// components
import Item from "../Item/Item";
import Cart from "../Cart/Cart";
import CartItem from "../CartItem/CartItem";

const AllItems = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  const handleAddItem = (clickedItem: CartItemType) => {
    // call a setter function for the state
    setCartItems((prev) => {
      // 1. Check if the item is in the cart already
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        // to update the amount on the specific item, done my mapping through the items
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // if it is the first time the item is added return
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveItem = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        // ack starts with an empty array
        // if we are on the item in the array we clicked on
        if (item.id === id) {
          // check if the item amount is  1, then remove the item from the cart
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
        // specifying the initial value of the reduce function  [] as CartItemType[]
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <CircularProgress />;
  if (error)
    return (
      <>
        <h4>Oops, Something went wrong</h4>
      </>
    );
  return (
    <>
      <h2>Hello</h2>
      <AllItemsWrapper>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddItem}
            removeFromCart={handleRemoveItem}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddItem={handleAddItem} />
            </Grid>
          ))}
        </Grid>
      </AllItemsWrapper>
    </>
  );
};

export default AllItems;
