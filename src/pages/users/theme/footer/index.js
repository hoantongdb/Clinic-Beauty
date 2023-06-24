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
                    <div class="item-page"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                    </svg>Terms & Conditions</div>
                    <div class="item-page"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                    </svg> Condivacy Policy</div>
                    <div class="item-page"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                    </svg> Blog</div>
                    <div class="item-page"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                    </svg> Contact</div>
                    <button class="arrow-top"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.35205 10.5198L1.57158 9.73936C1.24111 9.40889 1.24111 8.87451 1.57158 8.54756L8.40244 1.71318C8.73291 1.38271 9.26729 1.38271 9.59424 1.71318L16.4251 8.54404C16.7556 8.87451 16.7556 9.40889 16.4251 9.73584L15.6446 10.5163C15.3106 10.8503 14.7657 10.8433 14.4388 10.5022L10.4063 6.26943V16.3733C10.4063 16.8409 10.0302 17.2171 9.5626 17.2171H8.4376C7.97002 17.2171 7.59385 16.8409 7.59385 16.3733V6.26943L3.55791 10.5058C3.23096 10.8503 2.68604 10.8573 2.35205 10.5198Z" fill="white" />
                    </svg>
                    </button>
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