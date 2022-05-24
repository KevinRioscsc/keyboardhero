import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtwAlN6ua0t6jGTbzYJsnZmnPKsbXt0zQ",
  authDomain: "keyboard-b01fa.firebaseapp.com",
  projectId: "keyboard-b01fa",
  storageBucket: "keyboard-b01fa.appspot.com",
  messagingSenderId: "276645112172",
  appId: "1:276645112172:web:85c0920a853154d13aeb49",
  measurementId: "G-YE3HRNYTL8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
