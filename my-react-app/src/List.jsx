import PropTypes from "prop-types"
function List(props){


    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //reverse alphabetical
    // fruits.sort((a,b) => a.calories - b.calories); //Numerice
    // fruits.sort((a,b) => b.calories - a.calories); //Reverse numeric
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 85)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 85)

    const category = props.category;
    const itemsList = props.items;

    const listItem = itemsList.map(list =><li key={list.id}>
                                            {list.name} : &nbsp;
                                            {list.calories}
                                        </li>)
    return (
            <>
                <h3 className="category-item">{category}</h3>
                <ol className="list-items">{listItem}</ol>
            </>);
}
List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({ id : PropTypes.number,
                                                name : PropTypes.string,
                                                calories : PropTypes.number,
    }))
}
List.defaultProps = {
    category : "Category",
    items : [],
}
export default List