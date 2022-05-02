import React from "react";
import "./SocialLogin.css";
import gmailIcon from "../../../images/social/google.png";
import gitHubIcon from "../../../images/social/github.png";
import facebookIcon from "../../../images/social/facebook.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();

  if (user || userGithub) {
    navigate("/home");
  }

  return (
    <div className="social-section">
      {error && <p className="text-danger">{error.message}</p>}
      {errorGithub && <p className="text-danger">{errorGithub.message}</p>}
      <div className="divider">
        <p>
          <span className="mx-3">or</span>
        </p>
      </div>
      <div className="continueWithGoogle">
        <button type="button" onClick={() => signInWithGoogle()}>
          <img src={gmailIcon} alt="" />
          <span>Continue With google</span>
        </button>
      </div>
      <div className="continueWithGoogle">
        <button type="button" onClick={() => signInWithGithub()}>
          <img src={gitHubIcon} alt="" />
          <span>Continue With gitHub</span>
        </button>
      </div>
      <div className="continueWithGoogle">
        <button type="button">
          <img src={facebookIcon} alt="" />
          <span>Continue With Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
