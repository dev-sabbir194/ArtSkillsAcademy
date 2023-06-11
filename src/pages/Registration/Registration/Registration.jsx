import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router-dom";
import app from "../../../firebase/firebase.init";
import Swal from "sweetalert2";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth(app);

 useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(async (user) => {
     if (user) {
       await updateProfile(user, {
         displayName: name,
         photoURL: photoURL,
         
       });
     }
   });

   return () => unsubscribe();
 }, [auth, name, photoURL,]);

 const handleRegistration = async (e) => {
   e.preventDefault();

   if (password.length < 6) {
     setError("Password should be at least 6 characters");
     Swal.fire({
       icon: "error",
       title: "Registration Failed",
       text: "Password should be at least 6 characters",
     });
     return;
   }

   try {
     const userCredential = await createUserWithEmailAndPassword(
       auth,
       email,
       password
     );

     // Create a new user object
     const newUser = {
       name,
       email,
       photoURL,
       password,
     };

     // Send the user data to the server for registration
     const response = await fetch(
       "https://assignment-12-client-side-server.vercel.app/register",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(newUser),
       }
     );

     if (response.ok) {
       // Registration successful
       Swal.fire({
         icon: "success",
         title: "Registration Successful",
         text: "You have successfully registered!",
       }).then(() => {
         window.location.replace("/login");
       });
     } else {
       // Registration failed
       setError("Registration failed");
       Swal.fire({
         icon: "error",
         title: "Registration Failed",
         text: "Registration failed. Please try again later.",
       });
     }
   } catch (error) {
     if (error.code === "auth/email-already-in-use") {
       setError("Email already in use. Please use a different email.");
       Swal.fire({
         icon: "error",
         title: "Registration Failed",
         text: "Email already in use. Please use a different email.",
       });
     } else {
       setError(error.message);
       Swal.fire({
         icon: "error",
         title: "Registration Failed",
         text: error.message,
       });
     }
   }
 };


  return (
    <div>
      <section className="registration-area">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="section-title text-left text-white mb-5">
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
                  onSubmit={handleRegistration}
                  className="course-form-area contact-page-form course-form text-right"
                  id="myForm"
                >
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="url"
                      value={photoURL}
                      placeholder="Enter photo URL"
                      className="form-control"
                      onChange={(e) => setPhotoURL(e.target.value)}
                      id="photoURL"
                      name="photoURL"
                    />
                  </div>
                  <div className="col-lg-12 text-center">
                    <button className="btn text-uppercase" type="submit">
                      Submit
                    </button>
                  </div>
                  <div className="register-link mt-5">
                    <p className="register-text">
                      Already have an account?
                      <Link className="register-link" to="/login">
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
