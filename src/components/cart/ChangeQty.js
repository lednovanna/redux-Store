const ChangeQty = ({quantity, setQuantity}) => {

    const addQty = () => {
        const newQty = quantity +1;
        setQuantity (newQty)
    }

    const removeQty = () => {
        if (quantity <= 1) return;
        const newQty = quantity -1;
        setQuantity(newQty)
    }

    return(<div>
        <button onClick={addQty}> + </button>
         <span>{quantity}</span>
         <button onClick={removeQty}>-</button>

    </div>)
}

export default ChangeQty;