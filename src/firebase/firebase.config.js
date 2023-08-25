// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuROY37sFH6I2VQ8GmjT0vujFgPLgU72M",
  authDomain: "auth-daisyui-firebase.firebaseapp.com",
  projectId: "auth-daisyui-firebase",
  storageBucket: "auth-daisyui-firebase.appspot.com",
  messagingSenderId: "120719524082",
  appId: "1:120719524082:web:e7dbf7c4a768fb6578906b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;