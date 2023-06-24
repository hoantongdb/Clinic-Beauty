import { memo } from "react";
import './style.scss';
// import imgus from './Image/aboutus.png';
import ourservices1 from './img/our-service-1.png';
import ourservices2 from './img/our-service-2.png';
import ourservices3 from './img/our-service-3.png';
import ourservices4 from './img/our-service-4.png';
// import services3 from './Image/main-services-3.png';
import beauty from '../img/servi-1.png';
import beauty2 from '../img/servi-2.png';
import beauty3 from '../img/servi-3.png';
// import blog2 from './Image/blog-2.png';
// import blog3 from './Image/blog-3.png';
const ServicePage = () => {
    return (

        <div>
            <div className="section-our-services">
                <div className="section-our-services_1">
                    Our Services
                </div>
                <div className="section-our-services_2">
                    We focus on your beauty
                </div>
                <div className="section-our-services_3">
                    Lorem ipsum dolor sit amet
                </div>

                <div class="flex-container">
                    <div className="flex-container_1">
                        <img src={ourservices2} alt="" />
                    </div>
                    <div className="flex-container_2">
                        <img src={ourservices1} alt="" />
                    </div>
                </div>
                <div class="flex-container">
                    <div className="flex-container_1">
                        <img src={ourservices3} alt="" />
                    </div>
                    <div className="flex-container_2">
                        <img src={ourservices4} alt="" />
                    </div>

                </div>

            </div>
            <div className="section-beauty">
                <div className="section-beauty_left">
                    <img src={beauty} alt="" />
                </div>
                <div className="section-beauty_right">
                    <div className="section-beauty_right_1">
                        Beauty Consultation
                    </div>
                    <div className="section-beauty_right_2">
                        We services beauty
                        consultation
                    </div>
                    <div className="section-beauty_right_3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                    </div>
                    <div className="section-beauty_right_4">


                        <div title="Ấn vào đây để xem thêm" className="a"> Make an Appointment</div>
                        <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                        </svg></div>
                    </div>
                </div>
            </div>
            <div className="section-beauty">
                
                <div className="section-beauty_right">
                    <div className="section-beauty_right_1">
                        Beauty Consultation
                    </div>
                    <div className="section-beauty_right_2">
                        We services beauty
                        consultation
                    </div>
                    <div className="section-beauty_right_3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                    </div>
                    <div className="section-beauty_right_4">


                        <div title="Ấn vào đây để xem thêm" className="a"> Make an Appointment</div>
                        <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                        </svg></div>
                    </div>
                </div>
                <div className="section-beauty_left">
                    <img src={beauty2} alt="" />
                </div>
            </div>

            <div className="section-beauty">
                <div className="section-beauty_left">
                    <img src={beauty3} alt="" />
                </div>
                <div className="section-beauty_right">
                    <div className="section-beauty_right_1">
                        Beauty Consultation
                    </div>
                    <div className="section-beauty_right_2">
                        We services beauty
                        consultation
                    </div>
                    <div className="section-beauty_right_3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                    </div>
                    <div className="section-beauty_right_4">


                        <div title="Ấn vào đây để xem thêm" className="a"> Make an Appointment</div>
                        <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                        </svg></div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default memo(ServicePage)