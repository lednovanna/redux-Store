import Filter from "./Filter";


const AllCategories = () => {
    return(
        <div>
           <h2> Обери категорію</h2>
           {['М`ЯСО', 'ЯЙЦЯ', 'МАЙОНЕЗ', 'СОСИСКИ', 'ПАШТЕТ', 'ВСІ']
           .map(category => <Filter category = {category}/>)}
        </div>
    )
}

export default AllCategories;