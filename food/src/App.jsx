import Cart from "../comoponents/Cart";
import Checkout from "../comoponents/Checkout";
import Header from "../comoponents/Header";
import Meals from "../comoponents/Meals";
import {CartContextProvider} from "../src/store/CartContext"
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider> 
    </UserProgressContextProvider>
  );
}

export default App;
