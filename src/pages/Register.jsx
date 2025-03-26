import { Link } from "react-router-dom";

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const displayName = formData.get("displayName");
    const password = formData.get("password");
    console.log(email, displayName, password);
  };
  return (
    <div className="login-wrapper signup-wrapper">
      <div className="form-wrapper">
        <h1 className="title">Signup</h1>
        <form onSubmit={handleRegister} className="form" action="">
          <label htmlFor="text">
            <span>DisplayName:</span>
            <input
              type="text"
              required
              name="displayName"
              placeholder="Your name"
            />
          </label>
          <label htmlFor="email">
            <span>Email:</span>
            <input type="email" required name="email" placeholder="Email" />
          </label>
          <label htmlFor="password">
            <span>Password:</span>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
            />
          </label>
          <div className="form-btns">
            <button className="btn login">Signup</button>
            <button type="button" className="btn google">
              Google
            </button>
          </div>
        </form>
        <p>
          If you have an account, please{" "}
          <Link className="link" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
