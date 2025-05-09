import "./App.css";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";  // Importing Home component
import Register from "./Components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [userstate, setUserState] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Main Route */}
          <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>

          {/* Login Route */}
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>

          {/* Register Route */}
          <Route path="/signup" element={<Register />}></Route>

          {/* Home Route (after successful login) */}
          <Route path="/home" element={<Home />} />  {/* Added Home route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
