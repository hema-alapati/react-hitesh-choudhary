import "./App.css";

function App() {
  let counter = 15;

  const addValue = () => {
    counter = counter + 1;
    console.log(counter);
  };

  return (
    <>
      <h1>React course with histesh {counter} </h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button>Remove value</button>
      <p>footer: {counter} </p>
    </>
  );
}

export default App;
