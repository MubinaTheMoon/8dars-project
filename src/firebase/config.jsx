import { initializeApp } from "firebase/app";
import { getAuth } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGFJZAAAtt_3Vc6J1ZhJY5lykKap9zOWM",
  authDomain: "apps-c53c3.firebaseapp.com",
  projectId: "apps-c53c3",
  storageBucket: "apps-c53c3.firebasestorage.app",
  messagingSenderId: "78244795159",
  appId: "1:78244795159:web:9516d0790ecd552e719d52",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
