import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firebase-functions";
import "firebase/firebase-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwQKJDForz599lCZw0FFrkCafQLPzxJjw",
  authDomain: "ecommercegeek-34a05.firebaseapp.com",
  projectId: "ecommercegeek-34a05",
  storageBucket: "ecommercegeek-34a05.appspot.com",
  messagingSenderId: "805825432372",
  appId: "1:805825432372:web:91914ab126869a843a3361",
};

// Initialize Firebase
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.storage = app.storage();
    this.db = app.firestore(0);
    this.auth = app.auth();
  }
  createAccount = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  signInWithGoogle = () =>
    this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());
  signOut = () => this.auth.signOut();
}
