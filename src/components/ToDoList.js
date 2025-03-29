import { useSelector } from "react-redux"
import { selectAllItems } from "../features/itemsSlice"

const ToDoList = () => {
  const items = useSelector(selectAllItems)

  const renderedItems = items.map(item => 
    <article
    key={item.id}>
      <h3>{item.task}</h3>
      <p>{item.checked}</p>
    </article>
  )


  return (
    <section>
      <h2>Tasks...</h2>
      {renderedItems}
    </section>
  )
}

export default ToDoList
