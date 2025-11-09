

function List(props) {

  const fruits = props.items;
  const category = props.category;

  // fruits.sort();

  const listitems = fruits.map(item => <li key={item.id}> {item.name} : <b>{item.calorise}</b> </li>);

  return (
    <>
      <h3>Category : {category}</h3>
      <ol>{listitems}</ol>
      
    </>
  )
}

export default List;
