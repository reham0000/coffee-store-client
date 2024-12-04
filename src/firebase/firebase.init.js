// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIhpXxdg_y8qxNST4DJ-nDlKR_6S6sSo0",
  authDomain: "coffee-store-646eb.firebaseapp.com",
  projectId: "coffee-store-646eb",
  storageBucket: "coffee-store-646eb.firebasestorage.app",
  messagingSenderId: "608850622503",
  appId: "1:608850622503:web:8ec7e24ec266d85e0fb602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);