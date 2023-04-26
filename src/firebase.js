// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU3r0d6AGhAlgF8vrv8IYZHi2XAPC_fQA",
  authDomain: "blog-app-9781d.firebaseapp.com",
  projectId: "blog-app-9781d",
  storageBucket: "blog-app-9781d.appspot.com",
  messagingSenderId: "1044883456679",
  appId: "1:1044883456679:web:19d6e44a81a82bd1215182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };