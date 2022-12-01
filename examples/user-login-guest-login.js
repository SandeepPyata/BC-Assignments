import React from "react";
import { ReactDOM, useState } from "react";

// User Login/Guest Login

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn)  return <UserGreeting/>
    return <GuestGreeting/>
}

function LoginButton(props){
    return (
        <button onClick={props.onClick}>Login</button>
    );
}
function LogoutButton(props){
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}

function LoginControl(props) {
    let [isLoggedIn,setLoggedIn] = useState(false);
    let button;

    function handleLoginClick(){
        setLoggedIn(false);
    }
    function handleLogoutClick(){
        setLoggedIn(true);
    }

    if(isLoggedIn){
        button = <LogoutButton onClick={handleLoginClick}/>
    }
    else{
        button = <LoginButton onClick={handleLogoutClick}/>
    }

    return (
        <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginControl isLoggedIn={false} />)



