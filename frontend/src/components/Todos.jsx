function Todos({ todos }) {
  return (
    <div className="w-[100vw] px-[4vw] h-[calc(100vh - 150px)] flex items-center flex-wrap justify-center gap-5">
      {todos.map((todo, ind) => {
        return (
          <div
            key={ind}
            className="flex flex-col items-center justify-between w-[25vw] h-[14vw] border-zinc-800 border rounded-md px-1 py-4"
          >
            <h1 className="text-2xl font-bold">{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
                fetch(`http://localhost:3000/completed`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                  },
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                })
                  .then((resp) => resp.json())
                  .then(() => console.log("Completed"));
              }}
              className="border border-zinc-800 p-2 rounded-md bg-zinc-800 text-white"
            >
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
