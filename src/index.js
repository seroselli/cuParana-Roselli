import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCaAZ5uS3Oj_emiGs9W4crikzXLQ4BwxBE",
    authDomain: "coder-react2022.firebaseapp.com",
    projectId: "coder-react2022",
    storageBucket: "coder-react2022.appspot.com",
    messagingSenderId: "120790235894",
    appId: "1:120790235894:web:b969dc7518ff09ed4d8ad7"
  };
  


export const appFB = initializeApp(firebaseConfig);


    ReactDOM.render(
        <StrictMode>
            <App/>
        </StrictMode>
    
    ,document.getElementById('root'));



reportWebVitals();

