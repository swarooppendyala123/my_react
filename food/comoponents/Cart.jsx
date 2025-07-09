import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../src/store/CartContext";
import { currencyFormatter } from "../src/util/formating";
import Button from "./UI/Button";
import UserProgressContext from "../src/store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart () {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartToatl = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleHideCart () {
        userProgressCtx.hideCart();
    }

    function handleOpenCheckout(){
        userProgressCtx.showCheckout();
    }

    return (
        <Modal
            className="cart" 
            open={userProgressCtx.progress ==='cart'} 
            onClose={ userProgressCtx.progress ==='cart' ? handleHideCart : null}
        >
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price} 
                        onIncrese={() => cartCtx.addItem(item)}
                        onDecrese={() => cartCtx.removeItem(item.id)}
                    />
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartToatl)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleHideCart}>Close</Button>
                {cartCtx.items.length > 0 && 
                    <Button onClick={handleOpenCheckout}>Go to Checkout</Button>
                }
            </p>
        </Modal>
    );
}