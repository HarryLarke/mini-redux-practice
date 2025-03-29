import ToDoList from "../components/ToDoList"
import AddItem from "../components/AddItem"

const HomePage = () => {
  return (
    <body>
        <header>
            <h1>To Do List</h1>
        </header>

        <main>
            <AddItem/>
            <ToDoList/>
        </main>
    </body>
      
  )
}

export default HomePage
