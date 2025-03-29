
const AddItem = () => {
  return (
    <section className="taskForm">
        <h2>Add Item:</h2>
        <form >
            <label htmlFor="task"/>
            <textarea rows={3} cols={35} className="taskInput" type="text" placeholder="Please add a task" />
            <button className="inputButton" onClick={(e) => e.preventDefault()}>Add</button>
        </form>
    </section>

  )
}

export default AddItem
