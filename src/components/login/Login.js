// import { useState, useEffect } from "react";
// import "./login.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const [loginError, setLoginError] = useState("");

//   const [adminUsers, setAdminUsers] = useState([]);

//   useEffect(() => {
//     // Fetch admin user data from the createusers collection
//     axios.get("http://localhost:3000/createusers")
//       .then(response => {
//         setAdminUsers(response.data); 
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   setPasswordError("");
//   //   setLoginError("");

//   //   if (!validateEmail(email)) {
//   //     setEmailError("Please enter a valid email address");
//   //     return;
//   //   }

//   //   // Check if there is a user in adminUsers array that matches the email
//   //   const userMatch = adminUsers.find(user => user.email === email);

//   //   if (userMatch) {
//   //     // Check if the entered password matches the password in adminUsers
//   //     if (userMatch.password === password) {
//   //       navigate("/home", { state: { email } });
//   //     } else {
//   //       setLoginError("Incorrect password. Please try again.");
//   //     }
//   //   } else {
//   //     setLoginError("Invalid email. Please try again.");
//   //   }

//   //   setEmail("");
//   //   setPassword("");
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPasswordError("");
//     setLoginError("");
  
//     if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//       return;
//     }
  
//     const userMatch = adminUsers.find(user => user.email === email);
  
//     if (userMatch) {
//       if (userMatch.password === password) {
//         navigate("/home", { state: { email } });
//       } else {
//         setLoginError("Pease enter correct password.");
//       }
//     } else {
//       setLoginError("Invalid email. Please try again.");
//     }
  
//     setEmail("");
//     setPassword("");
//   };
  

//   return (
//     <div className="container">
//       <div className="login-wrapper">
//         <div className="login-box">
//           <form onSubmit={handleSubmit} className="login-form">
//             <h2>Login Form</h2>

//             <div className="form-group">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 className="input-field"
//                 placeholder="Enter your email"
//               />
//               {emailError && <div className="error">{emailError}</div>}
//             </div>

//             <div className="form-group">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 className="input-field"
//                 placeholder="Enter your password"
//               />
//               {loginError && <div className="error">{loginError}</div>}
//             </div>

//             <div className="forgot-password">
//               <a href="/">Forgot password?</a>
//             </div>

//             <button type="submit" className="login-btn">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;







// import { useState, useEffect } from "react";
// import "./login.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const [loginError, setLoginError] = useState("");

//   const [adminUsers, setAdminUsers] = useState([]);

//   useEffect(() => {
//     // Fetch admin user data from the createusers collection
//     axios.get("http://localhost:3000/createusers")
//       .then(response => {
//         setAdminUsers(response.data); 
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

  

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleUsernameChange = (e) => {
//     const inputUsername = e.target.value;
//     setUsername(inputUsername);
//     setEmailError("");

//     // Find the user with matching username and autofill the email field
//     const userMatch = adminUsers.find(user => user.username === inputUsername);
//     if (userMatch) {
//       setEmail(userMatch.email);
//     } else {
//       setEmail("");
//     }
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPasswordError("");
//     setLoginError("");


//      if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//       return;
//     }

//     if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//       return;
//     }

//     const userMatch = adminUsers.find(user => user.email === email);

//     if (userMatch) {
//       if (userMatch.password === password) {
//         navigate("/home", { state: { email } });
//       } else {
//         setLoginError("Incorrect password. Please try again.");
//       }
//     } else {
//       setLoginError("Invalid email. Please try again.");
//     }

//     setUsername("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="container">
//       <div className="login-wrapper">
//         <div className="login-box">
//           <form onSubmit={handleSubmit} className="login-form">
//             <h2>Login Form</h2>

//             <div className="form-group">
//               <input
//                 type="text"
//                 value={username}
//                 onChange={handleUsernameChange}
//                 className="input-field"
//                 placeholder="Enter your username"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 className="input-field"
//                 placeholder="Enter your email"
//                 readOnly // Make email field read-only since it's autofilled
//               />
//               {emailError && <div className="error">{emailError}</div>}
//             </div>

//             <div className="form-group">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 className="input-field"
//                 placeholder="Enter your password"
//               />
//               {loginError && <div className="error">{loginError}</div>}
//             </div>

//             <div className="forgot-password">
//               <a href="/">Forgot password?</a>
//             </div>

//             <button type="submit" className="login-btn">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;






import { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    // Fetch admin user data from the createusers collection
    axios.get("http://localhost:3000/createusers")
      .then(response => {
        setAdminUsers(response.data); 
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleUsernameChange = (e) => {
    const inputUsername = e.target.value;
    setUsername(inputUsername);
    setUsernameError("");
    setEmailError("");

    // Find the user with matching username and autofill the email field
    const userMatch = adminUsers.find(user => user.username === inputUsername);
    if (userMatch) {
      setEmail(userMatch.email);
    } else {
      setEmail("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setPasswordError("");
  //   setLoginError("");
  //   setEmailError("");
  //   setUsernameError("");

  //   // Validate email format
  //   if (!validateEmail(email)) {
  //     setEmailError("Please enter a valid email address");
  //     return;
  //   }

  //   // Validate username presence
  //   if (!username.trim()) {
  //     setUsernameError("Please enter a username");
  //     return;
  //   }

  //   // Find user by username
  //   const userMatch = adminUsers.find(user => user.username === username);

  //   if (userMatch) {
  //     // Check if the entered password matches the user's password
  //     if (userMatch.password === password) {
  //       navigate("/home", { state: { email: userMatch.email } });
  //     } else {
  //       setLoginError("Incorrect password. Please try again.");
  //     }
  //   } else {
  //     setLoginError("Invalid username. Please try again.");
  //   }

  //   setUsername("");
  //   setEmail("");
  //   setPassword("");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");
    setLoginError("");
    setEmailError("");
    setUsernameError("");
  
    const trimmedUsername = username.trim(); // Trim whitespace
    const trimmedEmail = email.trim(); // Trim whitespace
  
    // Validate email format
    if (!validateEmail(trimmedEmail)) {
      setEmailError("Please enter a valid email address");
      return;
    }
  
    // Validate username presence
    if (!trimmedUsername) {
      setUsernameError("Please enter a username");
      return;
    }
  
    // Find user by username (case-insensitive comparison)
    const userMatch = adminUsers.find(user => user.username.toLowerCase() === trimmedUsername.toLowerCase());
  
    if (userMatch) {
      // Check if the entered password matches the user's password
      if (userMatch.password === password) {
        navigate("/home", { state: { email: userMatch.email } });
      } else {
        setLoginError("Incorrect password. Please try again.");
      }
    } else {
      setLoginError("Invalid username. Please try again.");
    }
  
    setUsername("");
    setEmail("");
    setPassword("");
  };
  

  return (
    <div className="container">
      <div className="login-wrapper">
        <div className="login-box">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login Form</h2>

            <div className="form-group">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="input-field"
                placeholder="Enter your username"
              />
              {usernameError && <div className="error">{usernameError}</div>}
            </div>

            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="input-field"
                placeholder="Enter your email"
                readOnly // Make email field read-only since it's autofilled
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>

            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="input-field"
                placeholder="Enter your password"
              />
              {loginError && <div className="error">{loginError}</div>}
            </div>

            <div className="forgot-password">
              <a href="/">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
