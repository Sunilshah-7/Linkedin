import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgcponXAKdVCVpyqcBb4IBM43KqQmP2tI",
  authDomain: "linkedin-clone-41cf9.firebaseapp.com",
  projectId: "linkedin-clone-41cf9",
  storageBucket: "linkedin-clone-41cf9.appspot.com",
  messagingSenderId: "426560379262",
  appId: "1:426560379262:web:775741c995080152c17b2f",
  measurementId: "G-T9WEPT5JJF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
