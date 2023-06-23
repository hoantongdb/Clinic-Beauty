import { memo } from "react";
import "./style.scss";
// import { AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
// import WebFont from 'webfontloader'
import img5 from './img/fb.svg';
import img4 from './img/tt.svg';
import img3 from './img/in.svg';
import img2 from './img/yt.svg';
import img1 from './img/ita.svg';

const Footer = () => {
    return (
        <div>
            <div class="footer">
                <div class="left-footer">
                    <div class="title-footer">Beautice</div>
                    <div class="content-footer"><b>Beautice</b> is a Beauty Clinic WordPress Theme.</div>
                    <div class="address">Baker Steet 101, NY, United States.</div>
                    <div class="infor">
                        <div class="address">+521 569 8966.</div>
                        <div class="address email">mail@company.com.</div>
                    </div>
                </div>
                <div class="mid-footer">
                    <div class="title-page">Pages</div>
                    <div class="item-page"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                    </svg>
                        Home</div>
                    <div class="item-page"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                    </svg>
                        About</div>
                    <div class="item-page"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                    </svg>
                        Services</div>
                    <div class="item-page"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                    </svg>
                        Gallery</div>
                    <div class="item-page"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                    </svg>
                        Team</div>
                </div>
                <div class="right-footer mid-footer">
                    <div class="title-page"> Information</div>
                    <div class="item-page"><img src={img5} alt="ins" />Terms & Conditions</div>
                    <div class="item-page"><img src={img5} alt="ins" /> Condivacy Policy</div>
                    <div class="item-page"><img src={img5} alt="ins" /> Blog</div>
                    <div class="item-page"><img src={img5} alt="ins" /> Contact</div>
                    <button class="arrow-top"><img src={img5} alt="ins" /></button>
                </div>
            </div>
            <div class="bottom-footer">
                <div class="icon-bf">
                    <button><img src={img1} alt="fb" /></button>
                    <button><img src={img2} alt="tw" /></button>
                    <button><img src={img3} alt="in" /></button>
                    <button><img src={img4} alt="ytb" /></button>
                    <button><img src={img5} alt="ins" /></button>
                </div>
                <div class="text-bf">© AltDesain Studio 2021 - All right reserved.</div>
            </div>
        </div>

    );


};


export default memo(Footer);