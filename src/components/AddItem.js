import { useAddItemMutation, useGetItemsQuery } from "../features/api/apiSlice"
import { useState } from "react"

const AddItem = () => {
  const [ newItem, setNewItem ] = useState('')
  const {  data: items } = useGetItemsQuery()
  const [addItem] = useAddItemMutation()


  const handleSubmit = (e) => {
    e.preventDefault()
    addItem({ id: Number(items.length + 1), task: newItem, checked: false}) //Could  form bugs, may produce nanoid - use datefns to reorganise my data?
    setNewItem('')
  }

  return (
    <section className="taskForm">
        <h2>Add Item:</h2>
        <form 
        onSubmit={handleSubmit}>
            <label htmlFor="task"/>
            <textarea rows={3} cols={30} className="taskInput" type="text" placeholder="Please add a task"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}/>
            <button 
            type="submit"
            className="inputButton">Add</button>
        </form>
    </section>

  )
}

export default AddItem
