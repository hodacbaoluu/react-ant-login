import React from 'react';
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth';
import { Button } from 'antd';

function Home(props) {
  // const {name} = props;
  const handleLogout = () => {
    signOut(auth).then((res) => {
      alert("Đã đăng xuất")
    }).catch(err => err.message)
  };

  return (
    <div className={styles.home}>
      {props.name ? (
        <>
          <h3>{`Welcome - ${props.name}`}</h3>
          <Button type="primary" shape="round" size="large" onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <h2>
          Vui lòng đăng nhập <Link to="/login">Login</Link>
        </h2>
      )}


      {/* {props.name ? `Wellcome - ${props.name}` && <button onClick={handleLogout}>Logout</button> : <h2>Vui lòng đăng nhập <Link to="/login">Login</Link></h2>} */}
    </div>

  )
}
export default Home;


