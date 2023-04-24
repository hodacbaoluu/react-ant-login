import React from 'react';
import { Input } from 'antd'; 
import styles from "./InputControl.module.css";

function InputControl(props) {
  return (
    <div className={styles.container}>
        <Input placeholder="Username" {...props}/>
    </div>
  )
}

export default InputControl;