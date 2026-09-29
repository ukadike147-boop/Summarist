import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD3F09xwhokl-dO8ELtQTpna4abR7K_gsY",
  authDomain: "summarist-46459.firebaseapp.com",
  projectId: "summarist-46459",
  storageBucket: "summarist-46459.firebasestorage.app",
  messagingSenderId: "167996295260",
  appId: "1:167996295260:web:858d412afad450e0dc3e99",
  measurementId: "G-P66PEXYNXH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };