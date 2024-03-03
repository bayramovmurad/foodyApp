import { initializeApp } from "firebase/app";
import { getStorage  } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkUTsl7QZbeof8BZfrMz03NQjmG_LGxJQ",
  authDomain: "foodyapp-a959a.firebaseapp.com",
  projectId: "foodyapp-a959a",
  storageBucket: "foodyapp-a959a.appspot.com",
  messagingSenderId: "467538371653",
  appId: "1:467538371653:web:11fd1c14acdf308939ef2c"
};

const app = initializeApp(firebaseConfig);


export const fileStorage = getStorage(app);
export const db = getFirestore(app);