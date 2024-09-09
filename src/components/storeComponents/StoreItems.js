import Items from "./Items";
import data from "../../data/data";
import "./StoreItems.css";
import {useSelector} from "react-redux";
import {getSelectedCategory} from "../../Redux/itemSlice";

const StoreItems = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div className="container-card">
              {data
              .filter(item => {
                if (selectedCategory === 'ВСІ') return true;
                return selectedCategory === item.category;
              })
              .map(item => <Items item={item}/>)}
        </div>
    )
}

export default StoreItems;