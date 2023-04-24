import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import Home from "./components/Home/Home";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUserName(user.email);
      } else setUserName("");
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            {" "}
            <SignUp />{" "}
          </Route>
          <Route path="/">
            {" "}
            <Home name={userName} />{" "}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
