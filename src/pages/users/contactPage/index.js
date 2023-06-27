import { memo } from "react";
import "./style.scss"
import contactimg from '../homePage/Image/Contact Animations.png';
const ContactPage = () => {

    return (
        <div >
            <div className="a"></div>
            <div class="section-contact">
                <div class="contact-form-left">
                    <div className="contact-form-left1">
                        Contact Us
                    </div>
                    <div className="contact-form-left2">
                        Contact service for our customers
                    </div>
                    <img src={contactimg} alt="" />
                </div>
                <div class="contact-form-right">
                    <div class="contact-form-title">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</span>
                    </div>
                    <form class="contact-form">
                        <div class="contact-form1">
                            <div>
                                <input type="text" class="contact-form11" placeholder="First name" />
                                <input type="text" class="contact-form12" placeholder="Last name" /><br />
                            </div>
                        </div>
                        <input type="text" class="contact-form_mid" placeholder="Email address" /><br />
                        <input type="text" class="contact-form_mid" placeholder="Subject message" /><br />
                        <input type="text" class="contact-form_bottom" placeholder="Your inquiry here" /><br />
                        <div class="btn3">
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="section-map">

            </div>

            <div className="section-assistance">
                <div className="section-assistance_1">
                    Get in Touch
                </div>
                <div className="section-assistance_2">
                    Get direct handling by us
                </div>
                <div className="section-assistance_3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </div>


            </div>
            <div className="add">
                <div className="add-box2">
                    <div className="add-box_1">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_184_83)">
                                <path d="M29.995 63.6886C11.5489 36.9473 8.125 34.2028 8.125 24.375C8.125 10.913 19.038 0 32.5 0C45.962 0 56.875 10.913 56.875 24.375C56.875 34.2028 53.4511 36.9473 35.005 63.6886C33.7945 65.4372 31.2053 65.4371 29.995 63.6886ZM32.5 34.5312C38.1092 34.5312 42.6562 29.9842 42.6562 24.375C42.6562 18.7658 38.1092 14.2188 32.5 14.2188C26.8908 14.2188 22.3438 18.7658 22.3438 24.375C22.3438 29.9842 26.8908 34.5312 32.5 34.5312Z" fill="#091156" />
                            </g>
                            <defs>
                                <clipPath id="clip0_184_83">
                                    <rect width="65" height="65" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div className="add-box_2">
                        Address
                    </div>
                    <div className="add-box_3">
                        101 Baker Street, NY
                    </div>
                    <div className="add-box_4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                    </div>
                </div>
                <div className="add-box">
                    <div className="add-box_1">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_184_66)">
                                <path d="M63.1452 45.931L48.9265 39.8372C48.3191 39.5784 47.644 39.5238 47.0029 39.6818C46.3618 39.8398 45.7894 40.2018 45.3718 40.7132L39.0749 48.4066C29.1925 43.7471 21.2395 35.7941 16.5801 25.9117L24.2734 19.6149C24.7859 19.198 25.1486 18.6256 25.3067 17.9842C25.4648 17.3428 25.4095 16.6674 25.1494 16.0602L19.0557 1.84143C18.7702 1.18687 18.2652 0.652442 17.6279 0.330302C16.9906 0.00816279 16.2608 -0.0814987 15.5645 0.0767786L2.36133 3.12365C1.68996 3.27869 1.09097 3.6567 0.662105 4.19601C0.233245 4.73531 -0.000154656 5.40405 7.68854e-08 6.09309C7.68854e-08 38.6566 26.3936 64.9993 58.9062 64.9993C59.5955 64.9998 60.2645 64.7665 60.8041 64.3376C61.3437 63.9087 61.7219 63.3096 61.877 62.638L64.9238 49.4349C65.0811 48.7351 64.9895 48.0025 64.6649 47.3629C64.3403 46.7234 63.8029 46.2171 63.1452 45.931V45.931Z" fill="#091156" />
                            </g>
                            <defs>
                                <clipPath id="clip0_184_66">
                                    <rect width="65" height="65" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                    <div className="add-box_2">
                        Phone
                    </div>
                    <div className="add-box_3">
                        +896 120 5889
                    </div>
                    <div className="add-box_4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                    </div>
                </div>
                <div className="add-box2">
                    <div className="add-box_1">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_184_85)">
                                <path d="M18.0556 54.1668C15.1667 54.1668 12.2778 51.639 10.8333 50.5556C3.61111 45.5001 1.44444 43.6945 0 42.6112V57.7779C0 59.7719 1.6171 61.389 3.61111 61.389H32.5C34.494 61.389 36.1111 59.7719 36.1111 57.7779V42.6112C34.6667 43.6945 32.5 45.5001 25.2778 50.5556C23.8333 51.639 20.9444 54.1668 18.0556 54.1668ZM32.5 32.5001H3.61111C1.6171 32.5001 0 34.1172 0 36.1112V37.9168C2.88889 40.0834 2.52778 40.0834 13 47.6668C14.0833 48.389 16.25 50.5556 18.0556 50.5556C19.8611 50.5556 22.0278 48.389 23.1111 48.0279C33.5833 40.4445 33.2222 40.4445 36.1111 38.2779V36.1112C36.1111 34.1172 34.494 32.5001 32.5 32.5001ZM61.3889 21.6668H25.2778C23.2838 21.6668 21.6667 23.2839 21.6667 25.2779V28.889H32.5C36.2477 28.889 39.3374 31.7576 39.6895 35.4138L39.7222 35.389V50.5556H61.3889C63.3829 50.5556 65 48.9385 65 46.9445V25.2779C65 23.2839 63.3829 21.6668 61.3889 21.6668ZM57.7778 36.1112H50.5556V28.889H57.7778V36.1112ZM18.0556 25.2779C18.0556 21.2955 21.2954 18.0556 25.2778 18.0556H50.5556V7.22232C50.5556 5.22831 48.9385 3.61121 46.9444 3.61121H10.8333C8.83932 3.61121 7.22222 5.22831 7.22222 7.22232V28.889H18.0556V25.2779Z" fill="#091156" />
                            </g>
                            <defs>
                                <clipPath id="clip0_184_85">
                                    <rect width="65" height="65" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="add-box_2">
                        Mail
                    </div>
                    <div className="add-box_3">
                        mail@company.com
                    </div>
                    <div className="add-box_4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                    </div>
                </div>
            </div>
        </div>
    );


};

export default memo(ContactPage);