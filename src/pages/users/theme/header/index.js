import { memo } from "react";
import "./style.scss"
//import { AiOutlineFacebook, AiOutlineMail, AiOutlineInstagram, AiFillTwitterSquare, AiOutlineLogin, AiOutlineGlobal } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { fomatter } from "utils/fomatter";
<link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet"></link>
const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                Beautice
            </div>
            <div className="nav">
                <div>Home
                </div>
                <div>
                    About
                </div>
                <div>
                    Service
                </div>
                <div>
                    Gallery
                </div>
                <div>
                    Blog
                </div>
            </div>
            <button className="btn">Contact</button>

        </div>
    );


};

export default memo(Header);