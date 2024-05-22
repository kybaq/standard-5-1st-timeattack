import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const initialState = [
    {
      id: Date.now(),
      title: "할 일",
      content: "자기",
      isDone: false,
    },
    {
      id: Date.now() + 1,
      title: "할 일",
      content: "일어나기",
      isDone: true,
    },
  ];

  const [toDos, setToDos] = useState(initialState);

  const workingToDos = toDos.filter((toDo) => toDo.isDone !== true);
  const doneToDos = toDos.filter((toDo) => toDo.isDone === true);

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <hr />
      <TodoForm setToDos={setToDos} />
      <TodoList
        listTitle="Working.."
        toDos={workingToDos}
        setToDos={setToDos}
      />
      <TodoList
        listTitle="Done! Great!"
        toDos={doneToDos}
        setToDos={setToDos}
      />
    </>
  );
}

/*
TODO: - [ ]  투두 제목과 투두 내용을 입력받아 [추가] 버튼 클릭 시 Working 제목 밑으로 투두 추가 처리
TODO: - [o]  제목과 내용을 모두 입력하지 않았을 시 alert 로 유효성검사 실시
TODO: - [ ]  투두의 [삭제] 버튼 클릭 시 삭제 처리
TODO: - [ ]  [완료] 버튼 클릭 시 Working 에서 Done 안으로 투두 이동
TODO: - [ ]  [취소] 버튼 클릭 시 Done 에서 Working 안으로 투두 이동
TODO: - [ ]  components 폴더안에 있는 컴포넌트들 (TodoForm, TodoList, TodoItem)을 사용합니다. 
*/
