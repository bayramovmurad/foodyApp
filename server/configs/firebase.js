import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKvKqNpah32h0AxF5YDyUpEeppEJeucwI",
  authDomain: "foody2-6eae4.firebaseapp.com",
  projectId: "foody2-6eae4",
  storageBucket: "foody2-6eae4.appspot.com",
  messagingSenderId: "561022428418",
  appId: "1:561022428418:web:4ff660861561d1c4e5ce1b"
};

const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);