// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsoxvg8fnJ6VezqbE9gFtf33HA6EDVU6Y",
  authDomain: "auth-moha-milon-3171a.firebaseapp.com",
  projectId: "auth-moha-milon-3171a",
  storageBucket: "auth-moha-milon-3171a.firebasestorage.app",
  messagingSenderId: "1074682155784",
  appId: "1:1074682155784:web:89284ff2125f1163fa52bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;