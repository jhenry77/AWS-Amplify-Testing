import React, { useState } from "react";
import "../components/styles/DropdownMenuStyle.css";
import "./styles/AppNav.module.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { fetchAuthSession } from "aws-amplify/auth";


function DropdownMenu(): JSX.Element {

    //Authenticator stuff, such as ui and acessing routers
    const {authStatus} = useAuthenticator((context) => [context.authStatus]);
    const user = useAuthenticator((context) => [context.user]);

    //Used for the hamburger menu
    const [isActive, setIsActive] = useState<boolean>(false);


    //Objects so we can later access things such as username, usergroups, and other info
    const[groups, setGroups] = useState(undefined);
    const[userName, setUserName] = useState(String);

    //The call that actually finds the user details
    useEffect(() => {
        fetchAuthSession({forceRefresh: true})
        .then(({tokens}) => {
            const idToken = tokens?.idToken as any;
            console.log(idToken);
            const userGroups = idToken.payload['cognito:groups'];
            const username = idToken.payload["name"] + " " + idToken.payload["family_name"];
            setGroups(userGroups ? userGroups[0] : "No active Groups");
            setUserName(username);
            console.log(username);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);


    //Handles changing the hamburger menu
    const handleClick = (): void => {
        setIsActive(!isActive);
    };

  return (
    <div className={`navigation${isActive ? " active" : ""}`}>
      <div className="userBx">
        <div className="imgBx">
          {/* <img src="/img/user.jpg" alt="user" /> */}
        </div>
        <p className="username"><>{userName}</></p>
      </div>
      <div className="menuToggle" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="menu">
        <li>
        <a href="/">Hi {groups}</a>
        </li>
        <li>
          <a href="/">My profile</a>
        </li>
        <li>
          <a href="/">Edit</a>
        </li>
        <li>
          <a href="/">Notifications</a>
        </li>
        <li>
          <a href="/">Settings</a>
        </li>
        <li>
          <a href="/">Help &amp; support</a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;