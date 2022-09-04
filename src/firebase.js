import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB8USaWSRLWBh11YjR5fv_2FS3uAZy7MdU",
  authDomain: "disney-clone-3421e.firebaseapp.com",
  projectId: "disney-clone-3421e",
  storageBucket: "disney-clone-3421e.appspot.com",
  messagingSenderId: "618109261304",
  appId: "1:618109261304:web:47cee16ff127e3bf48b20d",
  measurementId: "G-YT0FTP13QT"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
