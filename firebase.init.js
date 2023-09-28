/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx1Br8_K9xZP-3VkaKmHf3Qsni205NWNg",
    authDomain: "my-first-firebase-projec-ffb4c.firebaseapp.com",
    projectId: "my-first-firebase-projec-ffb4c",
    storageBucket: "my-first-firebase-projec-ffb4c.appspot.com",
    messagingSenderId: "219999030967",
    appId: "1:219999030967:web:402a66a9fa5ebeaac88732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;