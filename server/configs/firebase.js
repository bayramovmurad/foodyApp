import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBahWVO9-ReueJfK5xlrRe-2qJ35M2QzRw",
  authDomain: "foody-24f44.firebaseapp.com",
  projectId: "foody-24f44",
  storageBucket: "foody-24f44.appspot.com",
  messagingSenderId: "945488838376",
  appId: "1:945488838376:web:d3c63ffcf3a7203842d35d"
};

const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);