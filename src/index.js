import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ch03/Book.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialog from "./ch04/ConfirmDialog";
import Button from "./ch04/Button.css";

import Library from './ch04/Clock';
import Clock from './ch04/Clock';



const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {


    root.render(
        <React.StrictMode>
            <Clock/>
        </React.StrictMode>
    );
},1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
