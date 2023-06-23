import { memo } from "react";
import './style.scss';
import playbtn from './Image/Play-Button.svg';
import team1 from '../img/team-1.png';
import team2 from '../img/team-2.png';
import team3 from '../img/team-3.png';
import FB from '../img/icon-FB.svg';
import Tiwter from '../img/icon-Twitter.svg';
import inta from '../img/icon-Intagram.svg';
const AboutPage = () => {
    return (
        <div>
            <div className="section-about">
                <div className="titlle-about">
                    <div className="title-about_1">
                        About
                    </div>
                    <div className="title-about_2">
                        We are a leading beauty clinic that has been around since 2002
                    </div>
                    <div className="title-about_3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                    </div>

                </div>
                <div className="play-btn">
                    <img className="playbtn playbt" src={playbtn} alt="" />
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
        </div>
    );
};
export default memo(AboutPage);