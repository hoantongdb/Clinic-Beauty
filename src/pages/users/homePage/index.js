import { memo } from "react";
import "./style.scss";
import ser1 from './Image/servi-1.png';
import ser2 from './Image/servi-2.png';
import ser3 from './Image/servi-3.png';
import contactimg from './Image/Contact Animations.png';
import ami from './Image/Animation-1.png';
import team1 from '../img/team-1.png';
import team2 from '../img/team-2.png';
import team3 from '../img/team-3.png';
import FB from '../img/icon-FB.svg';
import Tiwter from '../img/icon-Twitter.svg';
import inta from '../img/icon-Intagram.svg';
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
            <div className="main-services">
                <div className="main-services_1">
                Main Services
                </div>
                <div className="main-services_2">
                Learn services to focus
                    on your beauty
                </div>
                <div className="main-services_3">
                Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat
                    tellus sagittis, scelerisque eget nulla turpis.
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

            <div className="section-teams">
                <div className="section-teams_1">
                    Professional Teams
                </div>
                <div className="section-teams_2">
                    The Professional expert
                </div>
                <div className="section-teams_3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </div>
                <div className="section-teams_bottom">
                    <div className="section-teams_bottom_box">
                        <div className="section-teams_bottom_box_1">
                            <img src={team1} alt="" />
                        </div>
                        <div className="section-teams_bottom_box-2">
                            Surgeon
                        </div>
                        <div className="section-teams_bottom_box_3">
                            Briyan Nevalli
                        </div>
                        <div className="section-teams_bottom_box_4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </div>
                        <div >
                            <button className="section-teams_button">
                                <img src={Tiwter} alt="" />
                                <img src={FB} alt="" />
                                <img src={inta} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="section-teams_bottom_box">
                        <div className="section-teams_bottom_box_1">
                            <img src={team2} alt="" />
                        </div>
                        <div className="section-teams_bottom_box-2">
                            Dermatologist
                        </div>
                        <div className="section-teams_bottom_box_3">
                            Bella sebastian
                        </div>
                        <div className="section-teams_bottom_box_4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </div>
                        <div >
                            <button className="section-teams_button">
                                <img src={Tiwter} alt="" />
                                <img src={FB} alt="" />
                                <img src={inta} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="section-teams_bottom_box">
                        <div className="section-teams_bottom_box_1">
                            <img src={team3} alt="" />
                        </div>
                        <div className="section-teams_bottom_box-2">
                            Stylist expert
                        </div>
                        <div className="section-teams_bottom_box_3">
                            Lilly Adams
                        </div>
                        <div className="section-teams_bottom_box_4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </div>
                        <div >
                            <button className="section-teams_button">
                                <img src={Tiwter} alt="" />
                                <img src={FB} alt="" />
                                <img src={inta} alt="" />
                            </button>
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