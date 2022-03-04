import React from "react";
import Profile from '../../Images/Profile/profile-customer.png'
import Icon from '../../Images/icon/myguest.png'

const Topbar = function() {
    return(
        <nav className="topbar">
            <div className="flexbox between padding align">
                <div>
                    <img src={Icon} alt="myguest"></img>
                </div>
                <div>
                    <img src={Profile} alt="profile"></img>
                </div>
            </div>
        </nav>
    )
}

export default Topbar