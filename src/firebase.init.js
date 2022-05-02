// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeANF0KaGceLD69rIolppk2vIwuriRUyM",
  authDomain: "carproject-4b9e7.firebaseapp.com",
  projectId: "carproject-4b9e7",
  storageBucket: "carproject-4b9e7.appspot.com",
  messagingSenderId: "772089876457",
  appId: "1:772089876457:web:48531e747a73d1e61b8578",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
