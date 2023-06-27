import { memo } from "react";
import './style.scss';
import imgus from './Image/aboutus.png';
import services1 from './Image/main-services-1.png';
import services2 from './Image/main-services-2.png';
import services3 from './Image/main-services-3.png';
import blog1 from './Image/blog-1.png';
import blog2 from './Image/blog-2.png';
import blog3 from './Image/blog-3.png';
const ProfilePage = () => {
    return (
        <div >
            <div className="banner">
                <div className="banner-left">
                    <div className="a">Your beauty center place</div>
                    <p>.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</p>
                    <button className="btn2">More Ditails</button>
                </div>
                <div className="baner-right">
                    <svg width="165" height="165" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M102.5 77.4378C107.167 80.1321 107.167 86.8679 102.5 89.5622L77.75 103.852C73.0833 106.546 67.25 103.178 67.25 97.7894L67.25 69.2106C67.25 63.822 73.0833 60.4541 77.75 63.1484L102.5 77.4378Z" stroke="white" stroke-width="2" />
                        <g filter="url(#filter0_d_1191_5004)">
                            <circle cx="82.5" cy="82.5" r="62.5" stroke="white" stroke-width="2" shape-rendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1191_5004" x="0" y="0" width="165" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feMorphology radius="7" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1191_5004" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="6" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1191_5004" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1191_5004" result="shape" />
                            </filter>
                        </defs>
                    </svg>


                    <p>Tour Video</p>
                </div>

            </div>
            <div className="aboutus">
                <div className="aboutus-img">
                    <img src={imgus} alt="" />
                </div>
                <div className="aboutus-title">
                    <div className="aboutus-title_1">
                        About Us
                    </div>
                    <div className="aboutus-title_2">
                        We are the best beauty clinic
                    </div>
                    <div className="aboutus-title_3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                    </div>
                    <div >
                        <button className="aboutus-title_4">Learn More</button>
                    </div>
                </div>

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
                <div className="main-services_bottom">
                    <div className="main-services_bottom_box">
                        <div className="main-services_bottom_box_1">
                            <img src={services1} alt="" />
                        </div>
                        <div className="main-services_bottom_box-2">
                            Beauty consultation
                        </div>
                        <div className="main-services_bottom_box_3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </div>
                        <div >
                            <button className="main-services_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Learn More</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                    <div className="main-services_bottom_box">
                        <div className="main-services_bottom_box_1">
                            <img src={services2} alt="" />
                        </div>
                        <div className="main-services_bottom_box-2">
                            Skin treatments
                        </div>
                        <div className="main-services_bottom_box_3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </div>
                        <div >
                            <button className="main-services_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Learn More</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                    <div className="main-services_bottom_box">
                        <div className="main-services_bottom_box_1">
                            <img src={services3} alt="" />
                        </div>
                        <div className="main-services_bottom_box-2">
                            Beauty product
                        </div>
                        <div className="main-services_bottom_box_3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </div>
                        <div >
                            <button className="main-services_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Learn More</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-blog">
                <div className="main-blog_1">
                The Blog
                </div>
                <div className="main-blog_2">
                Our latest news
                </div>
                <div className="main-blog_3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="main-blog_bottom">
                    <div className="main-blog_bottom_box">
                        <div className="main-blog_bottom_box_1">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="main-blog_bottom_box-2">
                        How much does a consultation cost at our clinic?
                        </div>
                        <div className="main-blog_bottom_box_3">
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </div>
                        <div >
                            <button className="main-blog_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Learn More</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                    <div className="main-blog_bottom_box">
                        <div className="main-blog_bottom_box_1">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="main-blog_bottom_box-2">
                        Watch out! don't choose the wrong beauty product
                        </div>
                        <div className="main-blog_bottom_box_3">
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </div>
                        <div >
                            <button className="main-blog_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Learn More</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                    <div className="main-blog_bottom_box">
                        <div className="main-blog_bottom_box_1">
                            <img src={blog3} alt="" />
                        </div>
                        <div className="main-blog_bottom_box-2">
                        About skin care you need to know
                        </div>
                        <div className="main-blog_bottom_box_3">
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </div>
                        <div >
                            <button className="main-blog_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Learn More</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default memo(ProfilePage);

