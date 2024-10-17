import { useState } from "react";

const Calculator = ({ operator, userEmail }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (operator === "addition") {
      setResult(num1 + num2);
    } else if (operator === "subtraction") {
      setResult(num1 - num2);
    } else if (operator === "multiplication") {
      setResult(num1 * num2);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold text-center">Calculator</h2>
      <div className="flex flex-col items-center">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Enter first number"
          className="border border-gray-300 p-2 mb-4 w-3/4 rounded"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Enter second number"
          className="border border-gray-300 p-2 mb-4 w-3/4 rounded"
        />
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
          onClick={calculate}
        >
          Calculate
        </button>

        {result !== null && <h3 className="text-lg mt-4">Result: {result}</h3>}
      </div>
    </div>
  );
};

export default Calculator;
