import { useEffect, useRef, useState } from "react";
import "./styles.css";

const Otp_Digits = 5;

export default function App() {
  const [arr, newArr] = useState(new Array(Otp_Digits).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (val, i) => {
    if (isNaN(val)) return;
    let newArrOf = [...arr];
    const newValue = val.trim();
    newArrOf[i] = newValue.slice(-1);
    newArr(newArrOf);

    newValue && refArr.current[i + 1]?.focus();
  };

  const handlekeyDown = (e, i) => {
    console.log(e);
    if (!e.target.value && e.key == "Backspace") {
      refArr.current[i - 1]?.focus();
    }
  };

  return (
    <div className="App">
      <h1>Password Validates</h1>
      {arr.map((input, index) => (
        <input
          className="inputBox"
          key={index}
          type="text"
          ref={(el) => (refArr.current[index] = el)}
          value={arr[index]}
          onChange={(e) => handleOnChange(e.target.value, index)}
          onKeyDown={(e) => handlekeyDown(e, index)}
        />
      ))}
    </div>
  );
}
