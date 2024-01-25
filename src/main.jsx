import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCciIZf1ybXr1rzmSkLdiTMKVwSIaCR44I",
  authDomain: "react-e8f25.firebaseapp.com",
  projectId: "react-e8f25",
  storageBucket: "react-e8f25.appspot.com",
  messagingSenderId: "563617209726",
  appId: "1:563617209726:web:f8b7158a66c6ee87a7a72f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ChakraProvider>
    
    <App />

  </ChakraProvider>



)
