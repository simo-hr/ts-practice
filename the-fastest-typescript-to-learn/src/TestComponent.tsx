import React, { useState } from "react";

interface Props {
  text: string;
}

interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(0);
  //   const [count, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<UserData>({ id: 1, name: "Yamada" });
  const [inputData, setInputData] = useState("");
  // 定義する型はonChangeをホバーすると簡単に確認できる
  const handleInputChanege = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputData(e.target.value);
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{count}</h2>
      <input type="text" value={inputData} onChange={handleInputChanege} />
      <h3>{inputData}</h3>
    </div>
  );
};

export default TestComponent;
