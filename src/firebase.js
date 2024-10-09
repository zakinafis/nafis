// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRdmtO3BhFSd-PL5UdgqkKiqAx_PQDleg",
  authDomain: "nafis-4f1c1.firebaseapp.com",
  projectId: "nafis-4f1c1",
  storageBucket: "nafis-4f1c1.appspot.com",
  messagingSenderId: "1080550777375",
  appId: "1:1080550777375:web:8a1dd347fa0f55f21beb2a",
  measurementId: "G-SMR8HH3NMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
