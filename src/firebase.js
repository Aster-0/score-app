
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database"; // Ensure correct imports

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJErJLwJBBt939Zw4LnTe3fVHTP_8Yr3k",
    authDomain: "realtime-scoring-app.firebaseapp.com",
    databaseURL: "https://realtime-scoring-app-default-rtdb.firebaseio.com",
    projectId: "realtime-scoring-app",
    storageBucket: "realtime-scoring-app.firebasestorage.app",
    messagingSenderId: "128615701890",
    appId: "1:128615701890:web:efddd90ef73110265f839b"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Realtime Database
const database = getDatabase(app);

// Export references and functions to use in components
export { database, ref, push, onValue };

