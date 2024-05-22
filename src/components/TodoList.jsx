import TodoItem from "./TodoItem";

export default function TodoList({ listTitle, toDos, setToDos }) {
  // console.log(toDos);
  return (
    <div>
      <h2>{listTitle}</h2>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <TodoItem toDo={toDo} setToDos={setToDos} />
          </li>
        ))}
      </ul>
    </div>
  );
}
