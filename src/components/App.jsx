import "./App.css";
import { FaWpforms } from "react-icons/fa6";
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import NewSearch from "./NewSearch/NewSearch";
import LangSwitcher from "./NewSearch/LangSwitcher/LangSwitcher";
import { useEffect, useState } from "react";
import RadioSelected from "./RadioSelected/RadioSelected";

function App() {
  const [stat, setStat] = useState("junior");
  const [size, setSize] = useState("big");
  const handleLogin = (userData) => {
    console.log(userData);
  };
  useEffect(() => {
    console.log("Status changed:", stat);
  }, [stat]);

  return (
    <div className="wrapper">
      <h1>
        {" "}
        <FaWpforms size={34} />
        react-module-3-form
        <FaWpforms size={34} />
      </h1>
      <div>
        <LoginForm onLogin={handleLogin} />
        {/* <SearchBar /> */}
        <RadioSelected radioChange={setSize} value={size} />
        {/* <LangSwitcher value={stat} onSelected={setStat} /> */}
        {/* <NewSearch /> */}
      </div>
    </div>
  );
}

export default App;
