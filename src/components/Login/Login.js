import React, { useState } from 'react'
import InputControl from '../../InputControl/InputControl'
import { Link, useHistory } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase';
import styles from "./Login.module.css"
import { Button } from 'antd';

function Login() {

  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const handleSubmit = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields")
      return;
    }
    setErrorMsg("");


    setSubmitButtonDisable(true)
    signInWithEmailAndPassword(auth, values.email, values.pass).then(
      async (res) => {
        setSubmitButtonDisable(false)
        history.push('/')
      }
    ).catch((err) => {
      setSubmitButtonDisable(false)
      setErrorMsg(err.message)
    })


  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <div className={styles.input}>
        <InputControl lable="Email" placeholder="Enter your email" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
        <InputControl type="password" lable="password" placeholder="Enter your password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />
      </div>
      <div>
        <p>{errorMsg}</p>
        <Button
          disabled={submitButtonDisable}
          onClick={handleSubmit}
        >Login</Button>
        <p>Tạo tài khoản ? {" "}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </div>

    </div>
  )
}

export default Login