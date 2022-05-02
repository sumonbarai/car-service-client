import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleRegister = () => {
    navigate("/register");
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  // user login function
  const handleUserLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  // navigate user
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container">
      <form onSubmit={handleUserLogin} className="custom-form">
        <h2>please login</h2>
        <div className="custom-input-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            placeholder="Type Your Email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="custom-input-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="Type Your password"
            id="password"
            required
            name="password"
          />
        </div>
        {error && <p className="text-danger mt-2">{error.message}</p>}
        <button type="submit">Login</button>
        <p>
          Are You new ? <span onClick={handleRegister}>please register</span>
        </p>
        <div className="forget-password text-center">
          <Link className="text-decoration-none" to="/forgetpassword">
            Forget password
          </Link>
        </div>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Login;
