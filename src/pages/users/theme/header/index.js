import { memo } from "react";
import "./style.scss"
//import { AiOutlineFacebook, AiOutlineMail, AiOutlineInstagram, AiFillTwitterSquare, AiOutlineLogin, AiOutlineGlobal } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { fomatter } from "utils/fomatter";
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <div className="logo-left">
                    <svg className="logo-left1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="white" />
                    </svg>
                    <svg  className="logo-left2" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="white" />
                    </svg>

                    <svg  className="logo-left3" width="40" height="11" viewBox="0 0 40 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="11" rx="5.5" fill="#091156" />
                    </svg>

                </div>
                <div className="logo-right">
                    Beautice
                </div>
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