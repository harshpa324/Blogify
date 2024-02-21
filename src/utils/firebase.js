// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-414911.firebaseapp.com",
  projectId: "blogapp-414911",
  storageBucket: "blogapp-414911.appspot.com",
  messagingSenderId: "711755576086",
  appId: "1:711755576086:web:b8c4ead8fc043773b41637",
  measurementId: "G-0NN4Z17CF7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
