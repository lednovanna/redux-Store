import StoreItems from '../storeComponents/StoreItems';
import AllCategories from '../filter/AllCategories';
import './Header.css';
import Cart from '../cart/Cart';


const Header = () => {
    return(
        <div className="header">
            
           
            <div className="block">
               
            <AllCategories />
            <Cart />
            </div>
            
             <StoreItems/>   
            
             
        </div>
    )
}

export default Header;