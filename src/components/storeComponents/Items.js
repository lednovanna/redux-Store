import "./Items.css";
import ChangeQty from "../cart/ChangeQty";
import  {useState} from "react";
import {useDispatch} from "react-redux";
import {addItemToCart}  from "../../Redux/cartSlice";

const Items = ({item}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    

    return (
            
     
      

        <div className="card">
            <img src={item.img} className="item-image" alt="item_image"/>
         <h3 className="card-title">{item.title}</h3>
         <div className="card-description">{item.description}</div>

         <div className="price">
         <p className="card-price">{item.price} ₴</p>
         <ChangeQty quantity={quantity} setQuantity={setQuantity}/>
        </div>
        <div className="btn-cart">
         <button onClick ={() => {dispatch(addItemToCart({item, quantity}));
        }}>В кошик</button>
         </div>
        </div>
    
    
    )
}

export default Items;