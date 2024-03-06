function CreateTodo() {
  return (
    <div className="flex gap-4 w-[100vw] h-[40px] items-center justify-center">
      <input
        className="border border-zinc-800 px-2 py-1 rounded-md"
        type="text"
        placeholder="Enter you Todo"
      />
      <input
        className="border border-zinc-800 px-2 py-1 rounded-md"
        type="text"
        placeholder="Enter you Description"
      />
      <button className="border border-zinc-800 rounded-md px-2 py-1 bg-zinc-800 text-white">
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodo;
