import { memo } from "react";
import './style.scss';


import ourservices1 from './img/our-service-1.png';
import ourservices2 from './img/our-service-2.png';
import ourservices3 from './img/our-service-3.png';
import ourservices4 from './img/our-service-4.png';

import beauty from '../img/servi-1.png';
import beauty2 from '../img/servi-2.png';
import beauty3 from '../img/servi-3.png';

import playbt from './img/Play-Button.png';
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
            <div className="section-slogan">
                <div className="slogan">
                    <div className="slogan-tittle">
                        <div className="slogan-tittle-1">Best responsibility and service
                            for our customers</div>
                        <div className="slogan-tittle-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</div>

                    </div>

                    <div className="slogan-button">
                        <img src={playbt} alt="" />

                    </div>
                </div>
            </div>

            <div className="section-FQA">
                <div className="fqa-title-1">
                    Services FAQ’s
                </div>
                <div className="fqa-title-2">
                    <svg width="40" height="5" viewBox="0 0 40 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.5" y1="2.5" x2="37.5" y2="2.5" stroke="#FF64AE" stroke-width="5" stroke-linecap="round" />
                    </svg>

                </div>
                <div className="fqa-title-3">
                    Is beauty consultation handled thoroughly?<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3301 7.79773L19.9707 14.4384C20.4297 14.8973 20.4297 15.6395 19.9707 16.0936L18.8672 17.1971C18.4082 17.6561 17.666 17.6561 17.2119 17.1971L12.5 12.495L7.79297 17.202C7.33398 17.661 6.5918 17.661 6.1377 17.202L5.0293 16.0985C4.57031 15.6395 4.57031 14.8973 5.0293 14.4432L11.6699 7.80261C12.1289 7.33875 12.8711 7.33875 13.3301 7.79773Z" fill="#091156" />
                    </svg>

                </div>
                <div className="fqa-title-4">

                    <div className="fqa-title-41">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</div>

                    <div className="fqa-title-42">porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</div>
                </div>
                <div className="fqa-title-5">
                    Can I be beautiful in an instant time?<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3301 7.79773L19.9707 14.4384C20.4297 14.8973 20.4297 15.6395 19.9707 16.0936L18.8672 17.1971C18.4082 17.6561 17.666 17.6561 17.2119 17.1971L12.5 12.495L7.79297 17.202C7.33398 17.661 6.5918 17.661 6.1377 17.202L5.0293 16.0985C4.57031 15.6395 4.57031 14.8973 5.0293 14.4432L11.6699 7.80261C12.1289 7.33875 12.8711 7.33875 13.3301 7.79773Z" fill="#091156" />
                    </svg>

                </div>
                <div className="fqa-title-6">
                    Are there any side effects to the treatment methods or treatments at this clinic?<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3301 7.79773L19.9707 14.4384C20.4297 14.8973 20.4297 15.6395 19.9707 16.0936L18.8672 17.1971C18.4082 17.6561 17.666 17.6561 17.2119 17.1971L12.5 12.495L7.79297 17.202C7.33398 17.661 6.5918 17.661 6.1377 17.202L5.0293 16.0985C4.57031 15.6395 4.57031 14.8973 5.0293 14.4432L11.6699 7.80261C12.1289 7.33875 12.8711 7.33875 13.3301 7.79773Z" fill="#091156" />
                    </svg>

                </div>
                <div className="fqa-title-7">
                    Do professionals have accreditation in their respective fields?<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3301 7.79773L19.9707 14.4384C20.4297 14.8973 20.4297 15.6395 19.9707 16.0936L18.8672 17.1971C18.4082 17.6561 17.666 17.6561 17.2119 17.1971L12.5 12.495L7.79297 17.202C7.33398 17.661 6.5918 17.661 6.1377 17.202L5.0293 16.0985C4.57031 15.6395 4.57031 14.8973 5.0293 14.4432L11.6699 7.80261C12.1289 7.33875 12.8711 7.33875 13.3301 7.79773Z" fill="#091156" />
                    </svg>

                </div>
            </div>


        </div>
    );
};
export default memo(ServicePage)