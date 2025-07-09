import { useContext } from 'react';
import logo from '../src/assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../src/store/CartContext';
import UserProgressContext from '../src/store/UserProgressContext';

export default function Header () {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems  = cartCtx.items.reduce((totalNumerOfItems, item) =>{
        return totalNumerOfItems + item.quantity;
    }, 0);

    function handleShowCart () {
        userProgressCtx.showCart();
    }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} />
                <h1>Food</h1>
            </div>
            <nav>
                <Button textOnly onClick = {handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}