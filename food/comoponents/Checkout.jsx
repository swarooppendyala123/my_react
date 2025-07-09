import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../src/store/CartContext";
import { currencyFormatter } from "../src/util/formating";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../src/store/UserProgressContext";
import useHttp from "../src/hooks/useHttp";
import ErrorModel from "./ErrorModal";

const requestConfig = {
    method :'POST',
    headers :{
        'Content-type' :'application/json'
    }
};

export default function Checkout (){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const {
        data,
        isLloading : isSending,
        error,
        sendRequest,
        clearData
    } = useHttp('http://localhost:3000/orders', requestConfig)

    const cartToatl = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleCloseCheckOut () {
        userProgressCtx.hideCheckout();
    }

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    function handleSubmit(event){
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(
            JSON.stringify({
                order :{
                    items : cartCtx.items,
                    customer : customerData
                }
            })
        );

    }

    let actions = (
        <>
            <Button type="button" textOnly onClick= {handleCloseCheckOut}>Close</Button>
            <Button>Submit Order</Button>
        </>
    );

    if(isSending){
        actions = <span>Sending order data....</span>;
    }

    if(data && !error){
        return(
            <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckOut}>
                <h2>Success!</h2>
                <p>Order placed Successfully....</p>
                <p className="modal-actions">
                    <Button onClick={handleFinish}>Okay</Button>
                </p>
            </Modal>
        )
    }

    return(
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckOut}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartToatl)}</p>

                <Input label="Full Name" type="text" id="name" />
                <Input label="E-mail address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>
                {error && <ErrorModel title="Failed to submit order data" meaasge={error}/>}
                <p className="modal-actions">{actions}</p>
            </form>
        </Modal>
    );
}