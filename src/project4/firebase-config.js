// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB112EU8sO8eAuJ9MyiWqvuyOP8KBQyM1o",
  authDomain: "userdeatils-2b501.firebaseapp.com",
  projectId: "userdeatils-2b501",
  storageBucket: "userdeatils-2b501.firebasestorage.app",
  messagingSenderId: "1005710270795",
  appId: "1:1005710270795:web:e07c07c1b47b8e3da708ce",
  measurementId: "G-YBGWTTQPTP"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);