import { memo } from "react";
import './style.scss';
// import playbtn from './Image/Play-Button.svg';
import team1 from '../img/team-1.png';
import team2 from '../img/team-2.png';
import team3 from '../img/team-3.png';
import FB from '../img/icon-FB.svg';
import Tiwter from '../img/icon-Twitter.svg';
import inta from '../img/icon-Intagram.svg';
import meet1 from './img/meet-team-1.png';
import meet2 from './img/meet-team-2.png';
import meet3 from './img/meet-team-3.png';
import imgslide from './img/slide.png';
import aleft from './img/arrow-left.svg';
import aright from './img/arrow-right.svg';
import star from './img/star.svg';
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
const TeamPage = () => {
    return (
        <div>

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

            <div className="section-assistance">
                <div className="section-assistance_1">
                    Assistance Team
                </div>
                <div className="section-assistance_2">
                    Meet the pro assistance
                </div>
                <div className="section-assistance_3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </div>

                <div className="meet-team">
                    <div className="meet-team_left">
                        <img src={meet1} alt="" />
                    </div>
                    <div className="meet-team_right">
                        <div className="meet-team_right_top">
                            Lina Gustav / <p>Pharmacist</p>
                        </div>
                        <div className="meet-team_right_bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.
                        </div>
                    </div>
                </div>
                <div className="meet-team">
                    <div className="meet-team_left">
                        <img src={meet2} alt="" />
                    </div>
                    <div className="meet-team_right">
                        <div className="meet-team_right_top">
                            Adam White / <p>Finance</p>
                        </div>
                        <div className="meet-team_right_bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.
                        </div>
                    </div>
                </div>
                <div className="meet-team">
                    <div className="meet-team_left">
                        <img src={meet3} alt="" />
                    </div>
                    <div className="meet-team_right">
                        <div className="meet-team_right_top">
                            Jane Doe / <p>Marketer</p>
                        </div>
                        <div className="meet-team_right_bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-bg-team">
                <div className="bg-team">
                    <div className="section-bg-team1">Customer satisfaction is
                        our main goal</div>
                    <div className="section-bg-team2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</div>
                </div>
            </div>

            <div className="section-assistance">
                <div className="section-assistance_1">
                    Our Testimonials
                </div>
                <div className="section-assistance_2">
                    What our customer says
                </div>
                <div className="section-assistance_3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </div>
                <div className="section-assistance_4">
                    <img src={imgslide} alt="" />
                </div>
                <div className="section-assistance_5">
                    <div className="a"><button>
                        <img src={aleft} alt="" />
                    </button></div>
                   <div className="b"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.</div>
                   <div className="c"> <button>
                        <img src={aright} alt="" />
                    </button></div>
                </div>
                <div className="section-assistance_6">
                    <img className="d" src={star} alt="" />
                    <img className="d" src={star} alt="" />
                    <img className="d" src={star} alt="" />
                    <img className="d" src={star} alt="" />
                    <img className="d" src={star} alt="" />
                </div>
            </div>
        </div>
    );
};
export default memo(TeamPage);