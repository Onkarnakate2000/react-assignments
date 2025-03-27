import { useState, useMemo } from 'react';

function Assignment1() {
  const [input, setInput] = useState();

  const result = useMemo(() => {
    // Handling the case where input is less than 0 or a non-number
    if (input < 0) return "Factorial is not defined for negative numbers.";
    if (input === 0 || input === 1) return 1;

    let facto = 1;  // Initialize facto to 1
    for (let i = input; i >= 1; i--) {
      facto *= i;  // Multiply facto by i on each iteration
    }
    return facto;
  }, [input]);  // Add input as a dependency for recalculation

  return (
    <>
      <input
        type="number"
        value={input}
        placeholder="Enter the value"
        onChange={(e) => setInput(Number(e.target.value))}  // Make sure to convert the input to a number
      />
      <p>{result ? result : "NA"}</p>
    </>
  );
}

export default Assignment1;
