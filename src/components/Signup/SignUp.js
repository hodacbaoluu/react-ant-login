import React, { useState } from "react";
import InputControl from "../../InputControl/InputControl";
import { Link, useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { Button } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from './Signup.module.css'

function SignUp() {
  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const handleSubmit = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        history.push("/");
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <InputControl
        lable="email"
        placeholder="Enter your email"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }
      />
      <InputControl
        type="password"
        lable="password"
        placeholder="Enter your password"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))
        }
      /> 

      <div>
        <p>{errorMsg}</p>
        <Button 
          onClick={handleSubmit}
          disabled={submitButtonDisable}
        >
          SignUp
        </Button>
        <p>
          Bạn đã có tài khoản ?{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
