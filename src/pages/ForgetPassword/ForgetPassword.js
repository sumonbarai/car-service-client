import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  // forget password handler
  const handleForgetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("successfully login");
    }
  };

  return (
    <div onSubmit={handleForgetPassword} className="container">
      <form className="custom-form">
        <h2>Forget your password</h2>
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
        <button type="submit">Reset Your password</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
