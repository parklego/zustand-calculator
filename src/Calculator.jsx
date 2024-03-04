import { calculatorStore } from "./CalculatorStore";

const Input1 = () => {
  const { param1, setParam1 } = calculatorStore((store) => store);

  return (
    <input
      type="number"
      value={param1}
      onChange={(e) => setParam1(Number(e.target.value))}
    />
  );
};
const Input2 = () => {
  const { param2, setParam2 } = calculatorStore((store) => store);

  return (
    <input
      type="number"
      value={param2}
      onChange={(e) => setParam2(Number(e.target.value))}
    />
  );
};

const Calculator = () => {
  const { result, calc } = calculatorStore((store) => store);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <div>
          <p>값1 : </p>
          <Input1 />
        </div>
        <div>
          <p>값2 : </p>
          <Input2 />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => calc("+")}>+</button>
        <button onClick={() => calc("-")}>-</button>
        <button onClick={() => calc("*")}>*</button>
        <button onClick={() => calc("/")}>/</button>
      </div>
      <div>
        <p>결과 값 : {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
