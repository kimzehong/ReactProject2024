import React, {useState} from "react";
import LogOutButton from "./LoginOutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";

function LoginControl(props){
    const [isLoggedin, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let btn;
    if(isLoggedin){
        btn = <LogOutButton onClick={handleLogoutClick}/>;
    }else{
        btn = <LoginButton onClick={handleLoginClick}/>
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedin}/>
            {btn}
        </div>
    );
}

export default LoginControl;