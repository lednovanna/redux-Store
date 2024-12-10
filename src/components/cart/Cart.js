import {useSelector} from "react-redux";
import {getCartItems, getTotalPrice} from "../../Redux/cartSlice";
import CartItem from "./CartItem"

const Cart = () => {

    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector (getTotalPrice);

    return(
        <div>
          <img className="cartIcon" src="https://img.icons8.com/?size=100&id=bkfXMM2Up4Aw&format=png&color=000000"alt="icon"/> 
          <h3>Всього: {totalPrice} грн</h3>
          {cartItems.map(cartItem => <CartItem  cartItem={cartItem}/>)} 
          
</div>
    )
}

export default Cart;