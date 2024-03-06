import { useState } from "react";

function CreateTodo() {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="flex gap-4 w-[100vw] h-[100px] items-center justify-center">
      <input
        className="border border-zinc-800 px-2 py-1 rounded-md w-[15vw]"
        type="text"
        placeholder="Enter you Todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        className="border border-zinc-800 px-2 py-1 rounded-md w-[30vw]"
        type="text"
        placeholder="Enter you Description"
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: todo,
              description: desc,
            }),
          }).then(async () => {
            // const json = await res.json();
            alert("Todo added successfully");
          });
        }}
        className="border border-zinc-800 rounded-md px-4 py-1 bg-zinc-800 text-white"
      >
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodo;
