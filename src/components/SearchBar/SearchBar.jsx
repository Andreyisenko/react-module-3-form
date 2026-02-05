import React, { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h3>SearchBar</h3>
      <input
        className="inp"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Пошук..."
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
