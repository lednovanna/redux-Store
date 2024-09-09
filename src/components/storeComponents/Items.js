import "./Items.css";

const Items = ({item}) => {
    return (
           
    
            
        <div className="card">
            <img src={item.img} className="item-image" alt="item_image"/>
         <h3 className="card-title">{item.title}</h3>
         <div className="card-description">{item.description}</div>

         <div className="price">
         <p className="card-price">{item.price} ₴</p>
         <button className="btn-qty">Кількість</button>
        </div>
        <div className="btn-cart">
         <button >В кошик</button>
         </div>
        </div>
    
    
    )
}

export default Items;