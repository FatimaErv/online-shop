
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAw4zmclGtlRjVSw1Z-XGqNrUIhKfJFuZE",
  authDomain: "online-shop-dd892.firebaseapp.com",
  projectId: "online-shop-dd892",
  storageBucket: "online-shop-dd892.appspot.com",
  messagingSenderId: "785944503645",
  appId: "1:785944503645:web:b5dcd1d7abf8931c24b4b4",
  measurementId: "G-TJW3G1V0HP"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)