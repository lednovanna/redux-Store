import Filter from "./Filter";


const AllCategories = () => {
    return(
        <div>
           <h2> Обери категорію</h2>
           {['ВСІ','М`ЯСО', 'ЯЙЦЯ', 'МАЙОНЕЗ', 'СОСИСКИ', 'ПАШТЕТ' ]
           .map(category => <Filter category = {category}/>)}
        </div>
    )
}

export default AllCategories;