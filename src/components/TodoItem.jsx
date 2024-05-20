export default function TodoItem({ toDo, setToDos }) {
  console.log(toDo);

  return (
    <div>
      <h4>{toDo.title}</h4>
      <p>{toDo.content}</p>
      <div>
        <button>{toDo.isDone ? "취소" : "완료"}</button>
      </div>
    </div>
  );
}
