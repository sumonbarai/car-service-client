import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "./Register.css";
import { Spinner } from "react-bootstrap";

const Register = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [customError, setCustomError] = useState("");
  const [checked, setChecked] = useState(false);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  // go to login page
  const handleLogin = () => {
    navigate("/login");
  };
  // if loading state
  if (loading || updating) {
    return (
      <div className="spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  // user registered
  const handleRegistered = async (event) => {
    event.preventDefault();
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (password.length >= 8) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName });
    } else {
      setCustomError("please enter your password more then 8 character");
    }
  };
  // set user name is firebase
  if (user) {
    navigate("/home");
  }

  return (
    <div className="container">
      <form className="custom-form" onSubmit={handleRegistered}>
        <h2>please registration</h2>
        <div className="custom-input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Type Your Name"
            id="name"
            name="name"
            ref={nameRef}
            required
          />
        </div>
        <div className="custom-input-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            placeholder="Type Your Email"
            id="email"
            name="email"
            ref={emailRef}
            required
          />
        </div>
        <div className="custom-input-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="Type Your password"
            id="password"
            name="password"
            ref={passwordRef}
            required
          />
        </div>
        <div className="custom-checkbox">
          <input
            onClick={() => setChecked(!checked)}
            type="checkbox"
            name="checkbox"
            id="checkbox"
            required
          />
          <label className={checked ? "" : "text-danger"} htmlFor="checkbox">
            Accepted our terms and conditions
          </label>
        </div>
        {customError && <p className="text-danger mt-2">{customError}</p>}
        <button disabled={!checked} type="submit">
          Registration
        </button>
        <p>
          Are have an account ? <span onClick={handleLogin}>please login</span>
        </p>
        {error && <p className="text-danger">{error.message}</p>}
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
