export const RadioSelected = ({ value, radioChange }) => {
  const radioChangeInp = (event) => {
    radioChange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <h2>RadioSelected Size</h2>
      <label>
        Biger
        <input
          onChange={radioChangeInp}
          checked={value === "big"}
          name="carSize"
          value="big"
          type="radio"
        />
      </label>
      <label>
        Maximum
        <input
          onChange={radioChangeInp}
          checked={value === "max"}
          name="carSize"
          value="max"
          type="radio"
        />
      </label>
      <label>
        Minimum
        <input
          onChange={radioChangeInp}
          checked={value === "min"}
          name="carSize"
          value="min"
          type="radio"
        />
      </label>
      <p>{value}</p>
    </div>
  );
};
export default RadioSelected;
