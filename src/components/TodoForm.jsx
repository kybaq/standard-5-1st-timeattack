import { useState } from "react";

export default function TodoForm({ setToDos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (!title || !content) {
      alert("빈 칸을 모두 채워주세요.");
      return;
    }

    const nextToDo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };

    // console.log(nextToDo);

    setToDos((prevState) => [...prevState, nextToDo]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일 제목"
          onChange={(evt) => setTitle(evt.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="할 일 내용"
          onChange={(evt) => setContent(evt.target.value)}
          value={content}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
