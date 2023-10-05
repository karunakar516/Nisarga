// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb5nsWcqzEkQb5tmpZ6i6sTyRdV2xCbuc",
  authDomain: "nisarga-69463.firebaseapp.com",
  projectId: "nisarga-69463",
  storageBucket: "nisarga-69463.appspot.com",
  messagingSenderId: "1047513231060",
  appId: "1:1047513231060:web:2030dd94ab9576cd485541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
