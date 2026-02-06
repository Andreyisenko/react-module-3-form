import React from "react";

const Checkbox = ({ hasAccepted, onChecked }) => {
  const handleChange = (evt) => {
    onChecked(evt.target.checked);
    console.log(evt.target.checked);
  };
  return (
    <div>
      <h2>Checkbox</h2>
      <label>
        <input
          checked={hasAccepted}
          onChange={handleChange}
          type="checkbox"
          name="terms"
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        {" "}
        Proceed
      </button>
    </div>
  );
};

export default Checkbox;
