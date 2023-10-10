import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); // Step 1: State variable for input text
  const [items, setItems] = useState([]); // Step 2: State variable for items array

  // Step 3: Handle input text change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Step 4: Handle adding item
  const handleAddItem = () => {
    if (inputText.trim() !== "") {
      setItems([...items, inputText]);
      setInputText(""); // Clear the input field
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={inputText} // Use the state variable for input value
          onChange={handleInputChange} // Handle input change
        />
        <button onClick={handleAddItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* Step 5: Map through items and display as <li> */}
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
