// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyBQrABPkPHBRa5qw2zDfcE4TD0LF-I2F2o",
  authDomain: "tiktok---jornada-ca5a4.firebaseapp.com",
  projectId: "tiktok---jornada-ca5a4",
  storageBucket: "tiktok---jornada-ca5a4.appspot.com",
  messagingSenderId: "1093304458300",
  appId: "1:1093304458300:web:7275955abda17aa4437739",
  measurementId: "G-45HXMYR27M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;