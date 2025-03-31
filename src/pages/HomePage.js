import ToDoList from "../components/ToDoList"
import AddItem from "../components/AddItem"

const HomePage = () => {
  return (
    <main className="body">
        <header>
            <h1>To Do List</h1>
        </header>

        <section className="main">
            <AddItem/>
            <ToDoList/>
        </section>
    </main>
      
  )
}

export default HomePage
