// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaB__GRl0rtK1QiL9iFkPyxp-smSnB7V0",
  authDomain: "the-dragon-news-client-7c6a9.firebaseapp.com",
  projectId: "the-dragon-news-client-7c6a9",
  storageBucket: "the-dragon-news-client-7c6a9.appspot.com",
  messagingSenderId: "598583960353",
  appId: "1:598583960353:web:35451bd2ad0db1398a5460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;