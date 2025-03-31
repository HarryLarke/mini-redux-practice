import { useSelector } from "react-redux"
import { useGetItemsQuery } from "../features/api/apiSlice"

const ToDoList = () => {
  
  const {
    data: items,
    isLoading,
    isSuccess,
    isError,
    error,
   } = useGetItemsQuery()

   console.log(items) 
   console.log(isLoading) 
  let content 
  if(isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = items?.map(item => 
      <li className="item" key={item.id}>{item.task}</li>)
    } else if (isError) {
      content = <p>{error}</p>
    }




  return (
    <section className="taskBox">
      <h2>Tasks...</h2>
      <ul  className="taskList">
        {content}
      </ul>
    </section>
  )
}

export default ToDoList
