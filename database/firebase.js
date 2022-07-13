import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSJf8WUYWWGLVELdb62gC__2aYWfx03WQ",
  authDomain: "appm-2020b.firebaseapp.com",
  projectId: "appm-2020b",
  storageBucket: "appm-2020b.appspot.com",
  messagingSenderId: "813947297456",
  appId: "1:813947297456:web:6e2f7b9d723722acf96575"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
