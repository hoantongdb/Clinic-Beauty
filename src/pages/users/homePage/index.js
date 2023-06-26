import { memo } from "react";
import "./style.scss";
import ser1 from './Image/servi-1.png';
import ser2 from './Image/servi-2.png';
import ser3 from './Image/servi-3.png';
import contactimg from './Image/Contact Animations.png';
import ami from './Image/Animation-1.png';
const HomePage = () => {
    return (
        <div>
            <div className="background">
                <div class="background-left">
                    <div class="background-left1">
                        Clinic & beauty
                        consultant
                    </div>
                    <div class="background-left2">
                        It is a long established fact that a reader will be
                        by the readable content of a page.
                    </div>
                </div>
                <div class="background-right">
                    <img src={ami}alt=""/>
                </div>


            </div>
            <div className="content">
                <h1>Learn services to focus
                    on your beauty</h1>
                <p>
                    Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat
                    tellus sagittis, scelerisque eget nulla turpis.
                </p>
            </div>
            <div className="main-services">
                <div className="main-services_1">
                    Main Services
                </div>
                <div className="main-services_2">
                    Our focus services
                </div>
                <div className="main-services_3">
                    Lorem ipsum dolor sit amet.
                </div>
                <div className="main-blog_bottom">
                    <div className="main-blog_bottom_box">
                        <div className="main-blog_bottom_box_1">
                            <img src={ser1} alt="" />
                        </div>
                        <div className="main-blog_bottom_box-2">
                            Beauty consultation
                        </div>
                        <div className="main-blog_bottom_box_3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </div>
                    </div>
                    <div className="main-blog_bottom_box">
                        <div className="main-blog_bottom_box_1">
                            <img src={ser2} alt="" />
                        </div>
                        <div className="main-blog_bottom_box-2">
                            Beauty consultation
                        </div>
                        <div className="main-blog_bottom_box_3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </div>
                        <div >

                        </div>
                    </div>
                    <div className="main-blog_bottom_box">
                        <div className="main-blog_bottom_box_1">
                            <img src={ser3} alt="" />
                        </div>
                        <div className="main-blog_bottom_box-2">
                            Beauty consultation
                        </div>
                        <div className="main-blog_bottom_box_3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </div>
                        <div >

                        </div>
                    </div>
                </div>
            </div>
            <div class="contact">
                <div class="contact-left">
                    <img src={contactimg} alt=""/>
                </div>
                <div class="contact-right">
                    <div class="con-title">
                        <h5>Contact Us</h5>
                        <h2>Send your inquiry to
                            our expert team</h2>
                        <span>Lorem ipsum dolor sit amet nulla turapis tellus.</span>

                    </div>
                
                <div class="con-form">
                    <form >
                        <div class="name">
                            <div class="first">
                                <input type="text" id="fname" class="fname" placeholder="First name" /><br />
                            </div>
                            <div class="last">
                                <input type="text" id="fname" class="fname" placeholder="Last name" /><br />
                            </div>
                        </div>
                        <input type="text" class="fname esy" placeholder="Email address" /><br />
                        <input type="text" class="fname esy" placeholder="Subject message" /><br />
                        <input type="text" class="fname esy esyhi" placeholder="Your inquiry here" /><br />
                        <div class="btn3">
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>

    );
};

export default memo(HomePage);