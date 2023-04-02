// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_vDX1IBKFY5AJpWSBCbH4oLypNQuKNtQ",
    authDomain: "ecommerce-techsnapie.firebaseapp.com",
    projectId: "ecommerce-techsnapie",
    storageBucket: "ecommerce-techsnapie.appspot.com",
    messagingSenderId: "962717184142",
    appId: "1:962717184142:web:a30e0eb25e0be6c951d9df",
    measurementId: "G-G7HHMSE8LE"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


const signUp = async (name, email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateCurrentUser(auth, { displayName: name });
    } catch (error) {
        console.log(error);
    }
};

const signIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
    }
}