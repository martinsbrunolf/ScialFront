import {  useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";
// import { login } from "../../api/auth.js";
import "./login.scss"

const Login = () => { 
  
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/")
    } catch (err) {
      // setErr(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Friends</h1>
          <p>
          Bienvenu sur votre réseaux social, retrouver tous vos amis et partager des moments unique en image.
          </p>
          <span>N'avez-vous pas un compte ?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}  
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;