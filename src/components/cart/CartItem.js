import data from "../../data/data";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../Redux/cartSlice";

const CartItem = ({cartItem}) => {
    const items = data.find(item => item.id === cartItem.itemId)
    const dispatch = useDispatch();
    return(<div>

     <p><strong>{items.title}</strong></p>
     <p>{cartItem.quantity}шт</p>
     <p>Ціна: {items.price * cartItem.quantity} ₴</p>
    <span onClick ={() => dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
         <img className="icon-delete" alt="icon_delete" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/>
    </span>
    </div>)
}

export default CartItem;