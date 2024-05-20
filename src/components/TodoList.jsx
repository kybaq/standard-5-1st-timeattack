import TodoItem from "./TodoItem";

export default function TodoList({ listTitle, toDos, setToDos }) {
  return (
    <div>
      <h2>{listTitle}</h2>
      <ul>
        {toDos.map((toDo) => {
          <li key={toDo.div}>
            <TodoItem toDo={toDo} setToDos={setToDos} />
          </li>;
        })}
      </ul>
    </div>
  );
}
