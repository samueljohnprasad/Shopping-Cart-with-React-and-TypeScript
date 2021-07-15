import CartItem from "../CartItem/CartItem";

//styles
import { Wrapper } from "./cart.styles";

//types
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your Shopping Yart</h2>
      {cartItems.length === 0 ? <p>No items in your cart</p> : null}
      {cartItems.map((item)=>(
          <CartItem
           key={item.id}
           item={item}
           addToCart={addToCart}
           removeFromCart={removeFromCart}
          />
      ))}
    </Wrapper>
  );
};

export default cart;