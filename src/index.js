import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './ch03/Book.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ConfirmDialog from "./ch04/ConfirmDialog";
// import Button from "./ch04/Button.css";
import Clock from "./ch04/Clock";
//import './ch04/Clock.css'
import Library from "./ch03/Library"
// import CommentList from "./ch05/CommentList";
// import NotificationList from "./ch06/NotificationList";
// import Accomodate from "./ch08/Toggle2";
// import Toggle2 from "./ch08/Toggle2";
// import ClickButton from "./ch08/ClickButton";
// import Counter from "./ch08/Counter";
// import InputTest from "./ch08/InputTest";
// import ConfirmButton from "./ch08/ConfirmButton";
// import ConfirmButton2 from "./ch08/ConfirmButton2";
// import ConfirmButton3 from "./ch08/ConfirmButton3";
import MyButton from "./ch08/MyButton";
import NotificationList from "./ch06/NotificationList";
import Greeting from "./chp09/Greeting";
import LoginControl from "./chp09/LoginControl";
import MailBox from "./chp09/MailBox";
import LoginControl2 from "./chp09/LoginControl2";
import LandingPage from "./chp09/LandingPage";




const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <LandingPage/>
        </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
