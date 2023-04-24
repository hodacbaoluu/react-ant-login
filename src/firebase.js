
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBYsdwydhdihQrYAJnMkJEDvgozRoc5ykA",
  authDomain: "react-antd-firebase-ef386.firebaseapp.com",
  projectId: "react-antd-firebase-ef386",
  storageBucket: "react-antd-firebase-ef386.appspot.com",
  messagingSenderId: "606118279195",
  appId: "1:606118279195:web:e78df9cca8f3a7bebd20be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth }


