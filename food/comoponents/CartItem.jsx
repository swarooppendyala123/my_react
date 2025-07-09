import { currencyFormatter } from "../src/util/formating";

export default function CartItem ({name, quantity, price, onIncrese, onDecrese}){
    return (
        <li className="cart-item">
            <p>
                {name} - {quantity} X {currencyFormatter.format(price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrese}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrese}>+</button>
            </p>
        </li>
    );
}