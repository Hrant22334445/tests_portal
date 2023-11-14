import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBXFwdAQZQD6GK_RUQdgjComVrvIsJZXnU",
  authDomain: "tests-protal.firebaseapp.com",
  projectId: "tests-protal",
  storageBucket: "tests-protal.appspot.com",
  messagingSenderId: "904366334577",
  appId: "1:904366334577:web:8cdd8f68db2354e56fb1d0",
  measurementId: "G-M1D4MEEVNV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth, app }