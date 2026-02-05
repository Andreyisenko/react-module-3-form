import { useId } from "react";

const LoginForm = ({ onLogin }) => {
  const nameId = useId();
  const emailId = useId();
  const handleSubmit = (event) => {
    event.preventDefault();
    const forma = event.target;
    const { username, email } = forma;
    onLogin({
      username: username.value,
      email: email.value,
    });
    event.target.reset();
  };
  return (
    <div className="wrapper">
      <h2>LoginForm</h2>
      <form onSubmit={handleSubmit} className="forma">
        <label className="labl" htmlFor={nameId}>
          <p className="par">userName</p>
          <input
            id={nameId}
            className="inp"
            type="text"
            name="username"
            required
          />
        </label>
        <label className="labl" htmlFor={emailId}>
          <p className="par">email</p>
          <input
            id={emailId}
            className="inp"
            type="text"
            name="email"
            required
          />
        </label>
        <button className="btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
