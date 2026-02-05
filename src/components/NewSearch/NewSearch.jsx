import React, { useId, useState } from "react";

const NewSearch = () => {
  const [inpVel, setInpVel] = useState("");
  const film = useId();
  const handleSearch = (event) => {
    setInpVel(event.target.value);
  };
  return (
    <div>
      <h2>NewSearch</h2>
      <label htmlFor={film}>Пошук фільму</label>
      <input
        className="inp"
        onChange={handleSearch}
        id={film}
        value={inpVel}
        type="text"
        placeholder="Пошук фільму..."
      />
      <p>{inpVel}</p>
    </div>
  );
};

export default NewSearch;
