import { memo } from "react";
import "./style.scss";
import gallery1 from './img/gallary-1.png';
import gallery2 from './img/gallary-2.png';
import gallery3 from './img/gallary-3.png';
import gallery4 from './img/gallary-4.png';
import gallery5 from './img/gallary-5.png';
import gallery6 from './img/gallary-6.png';
import gallery7 from './img/gallary-7.png';
import gallery8 from './img/gallary-8.png';
import gallery9 from './img/gallary-9.png';
// import bg1 from './img/BG-gallery.png';
// import btn from '../servicePage/img/Play-Button.png';

const GalleryPage = () => {
    return (
        <div>
            <div className="section-gallery">
                <div className="section-gallery_top">
                    <div className="section-gallery_top_left">
                        <div className="section-gallery_top_left1">
                            Our Gallery
                        </div>
                        <div className="section-gallery_top_left2">
                            Check out the collection pictures from our clinic
                        </div>
                    </div>
                    <div className="section-gallery_top_right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                    </div>

                </div>
                <div className="section-gallery_bottom">
                    <div className="section-gallery_bottom_item">
                        <img src={gallery1} alt="" />
                    </div>
                    <div className="section-gallery_bottom_item"><img src={gallery2} alt="" /></div>
                    <div className="section-gallery_bottom_item"><img src={gallery3} alt="" /></div>
                    <div className="section-gallery_bottom_item"><img src={gallery4} alt="" /></div>
                    <div className="section-gallery_bottom_item"><img src={gallery5} alt="" /></div>
                    <div className="section-gallery_bottom_item"><img src={gallery6} alt="" /></div>
                    <div className="section-gallery_bottom_item"><img src={gallery7} alt="" /></div>
                    <div className="section-gallery_bottom_item"><img src={gallery8} alt="" /></div>
                    <div className="section-gallery_bottom_item"><img src={gallery9} alt="" /></div>
                </div>
                <div className="a">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, our teams.</div>
            </div>

            <div className="section-video-tour">
                <div className="video-tour">
                    <div className="section-video-tour1">Watch the video tour</div>
                    <div className="section-video-tour2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</div>
                    <div className="section-video-tour3"><svg width="165" height="165" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_167_19)">
                            <circle cx="82.5" cy="82.5" r="62.5" stroke="white" stroke-width="2" shape-rendering="crispEdges" />
                        </g>
                        <path d="M103.5 77.4378C108.167 80.1321 108.167 86.8679 103.5 89.5622L78.75 103.852C74.0833 106.546 68.25 103.178 68.25 97.7894L68.25 69.2106C68.25 63.822 74.0833 60.4541 78.75 63.1484L103.5 77.4378Z" stroke="white" stroke-width="2" />
                        <defs>
                            <filter id="filter0_d_167_19" x="0" y="0" width="165" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feMorphology radius="7" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_167_19" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="6" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_167_19" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_167_19" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    </div>
                </div>
            </div>

            <div className="section-quota bg">
                <div className="section-quota_left">
                    <div className="section-quota_left1">
                        Get The Quota
                    </div>
                    <div className="section-quota_left2">
                        Want to be handled by our professional team immediately?
                    </div>
                    <div className="section-quota_left3">
                        Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                    </div>
                </div>

                <div className="section-quota_right">
                    <button className="btn_quota">Make an Appointment</button>
                </div>
            </div>

        </div>

    );
};

export default memo(GalleryPage);