import React, { useId } from "react";

const LangSwitcher = ({ value, onSelected }) => {
  const changeStat = (event) => {
    onSelected(event.target.value);
  };
  const selectId = useId();
  return (
    <div>
      <h2>LangSwitcher</h2>
      <label htmlFor={selectId}>Status</label>
      <select onChange={changeStat} value={value} id={selectId}>
        <option value="junior">Junior</option>
        <option value="midle">Midle</option>
        <option value="senior">Senior</option>
      </select>
      <p>{value}</p>
    </div>
  );
};

export default LangSwitcher;
