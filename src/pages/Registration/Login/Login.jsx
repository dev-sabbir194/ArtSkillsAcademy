import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";
import app from "../../../firebase/firebase.init";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      const response = await fetch(
        "https://assignment-12-client-side-server.vercel.app/register"
      );
      const userData = await response.json();

     
      const user = userData.find((user) => user.email === email);

      if (user) {
       
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("photoUrl", user.photoURL);
      }

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in!",
      }).then(() => {
        window.location.replace("/");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
      });
    }
  };



const handleSignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);

      const photoUrl = user.photoURL;

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Logged in successfully!",
      }).then(() => {
        localStorage.setItem("userEmail", user.email);

        // Save the profile picture URL in local storage
        localStorage.setItem("photoUrl", photoUrl);

        window.location.replace("/");
      });
    })
    .catch((error) => {
      console.log("error", error.message);
    });
};


  return (
    <div>
      <section className="registration-area">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="section-title text-left text-white">
                <h2 className="text-white">
                  Watch Our Trainers in Live Action
                </h2>
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price. You may see some for
                  as low as $.17 each.
                </p>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-4 col-md-6">
              <div className="course-form-section">
                <h3 className="text-white">Courses for Free</h3>
                <p className="text-white">It is high time for learning</p>
                <form
                  onSubmit={handleLogin}
                  className="course-form-area contact-page-form course-form text-right"
                  id="myForm"
                >
                  <div className="form-group col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Type your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="col-lg-12 text-center">
                    <button className="btn text-uppercase" type="submit">
                      Submit
                    </button>
                  </div>

                  <div className="register-link mt-5">
                    <p className="register-text">
                      Don't have an account?
                      <Link className="register-link" to="/registration">
                        Registration
                      </Link>
                    </p>
                  </div>
                </form>

                <div className="login-options">
                  <p className="login-text">Or login with:</p>
                  <Button
                    className="google-button"
                    onClick={handleSignInWithGoogle}
                  >
                    <img
                      className="google"
                      src="https://drive.google.com/uc?id=1LoLyVAwrJA1vwlG9U2yeNV2bru47JpSw"
                      alt=""
                    />
                    <span className="g-text"> Google Sign-in</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
