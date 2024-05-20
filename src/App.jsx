import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const [value, getValue] = useState(0);

  const onChange = (evt) => {
    getValue(evt.target.value);
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" onChange={onChange} value={value} /> 만큼을
        <button onClick={() => setNumber(number + Number(value))}>
          더할게요
        </button>
        <button onClick={() => setNumber(number - Number(value))}>
          뺄게요
        </button>
        <button onClick={() => setNumber(0)}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{number}</p>
      </div>
      <hr />
      <div>완료</div>
    </div>
  );
}
