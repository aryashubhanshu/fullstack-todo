import { useState, useEffect } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import Topbar from "./components/Topbar";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((resp) => resp.json())
      .then((todos) => setTodos(todos));
  }, []);

  return (
    <div>
      <Topbar />
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
