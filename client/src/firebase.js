// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hirav-7c08a.firebaseapp.com",
  projectId: "hirav-7c08a",
  storageBucket: "hirav-7c08a.appspot.com",
  messagingSenderId: "518897224239",
  appId: "1:518897224239:web:919ba607ba8b5b88e8d4da",
  measurementId: "G-PFT1E7CH3C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);