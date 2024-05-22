export default function TodoItem({ toDo, setToDos }) {
  const onDeleteBtnClick = (id) => {
    setToDos((prevState) =>
      prevState.filter((toDo) => {
        return toDo.id !== id;
      })
    );
  };

  const onToggleBtnClick = (id) => {
    setToDos((prevState) =>
      prevState.map((toDo) => {
        return toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo;
      })
    );
  };

  return (
    <div>
      <h4>{toDo.title}</h4>
      <p>{toDo.content}</p>
      <div>
        <button onClick={() => onDeleteBtnClick(toDo.id)}>삭제</button>
        <button onClick={() => onToggleBtnClick(toDo.id)}>
          {toDo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
