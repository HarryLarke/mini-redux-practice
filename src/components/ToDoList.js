import { useGetItemsQuery, useDeleteItemMutation, useUpdateItemMutation } from "../features/api/apiSlice"

const ToDoList = () => {
  
  const {
    data: items,
    isLoading,
    isSuccess,
    isError,
    error,
   } = useGetItemsQuery()

   const [deleteItem] = useDeleteItemMutation()
   const [updateItem] = useUpdateItemMutation()

   console.log(items) 
   console.log(isLoading) 
  let content 
  if(isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = items?.map(item => 
      <article className="item" key={item.id}>
        <input type="checkbox"
        className="checkBox"
        checked={item.checked}
        id={item.id}
        onChange={() => updateItem({...item, checked: !item.checked})}
        />
        {item.task}
        <button
        className="deleteButton"
        onClick={() => deleteItem({ id: item.id})}
        >X</button></article>)
    } else if (isError) {
      content = <p>{error}</p>
    }



  return (
    <section className="taskBox">
      <h2>Tasks...</h2>
      <section  className="taskList">
        {content}
      </section>
    </section>
  )
}

export default ToDoList
