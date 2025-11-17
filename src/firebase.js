// Import Firebase core
import { initializeApp } from "firebase/app";

// Firebase Services
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDMkGCfNuAEdQr3g112L5KsP5jefD2QOKA",
  authDomain: "voting-1e555.firebaseapp.com",
  projectId: "voting-1e555",
  storageBucket: "voting-1e555.firebasestorage.app",
  messagingSenderId: "931977501177",
  appId: "1:931977501177:web:57aba431fa885b54238528",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);        // For login/signup
export const db = getFirestore(app);     // For storing votes, candidates, users
export const storage = getStorage(app);  // For image uploads (candidate photos)
