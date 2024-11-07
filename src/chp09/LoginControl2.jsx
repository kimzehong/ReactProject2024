import React, {useState} from "react";
import LogOutButton from "./LoginOutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";
import WarningBanner from "./WarningBanner";

function LoginControl2(props){
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }


    return(
        <div>
            <WarningBanner warning = {true}/>
            <Greeting isLoggedIn={IsLoggedIn}/>
            {IsLoggedIn ?
                <LogOutButton onClick={handleLogoutClick}/> :
                <LoginButton onClick={handleLoginClick}/>}
        </div>
    );
}

export default LoginControl2;