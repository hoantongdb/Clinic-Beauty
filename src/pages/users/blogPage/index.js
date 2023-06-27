
import { memo } from "react";
import "./style.scss"
import blog1 from '../profilePage/Image/blog-1.png';
import blog2 from '../profilePage/Image/blog-2.png';
import blog3 from '../profilePage/Image/blog-3.png';
import ifb from '../img/icon-FB.svg';
import iin from '../img/icon-Intagram.svg';
import itt from '../img/icon-Twitter.svg';
import ili from '../img/linkedin-in.svg';
import post1 from './img/post-1.png';
import post2 from './img/post-2.png';
import post3 from './img/post-3.png';
const BlogPage = () => {

    return (
        <div>
            <div className="blog-banner">
                <div className="blog-banner-content">
                    <button className="blog">Blog</button>
                </div>
                <div className="blog-banner-content">
                    <button className="home">Home	• Blog</button>
                </div>
            </div>
            <div className="blog">

                <div className="blog_bottom">
                    <div className="blog_bottom_box">
                        <div className="main-blog_bottom_box_1">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="blog_bottom_box-2">
                            <div className="blog_bottom_box-21">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6562 6.25H13.2812L10.1562 3.125H2.34375C1.04932 3.125 0 4.17432 0 5.46875V19.5312C0 20.8257 1.04932 21.875 2.34375 21.875H22.6562C23.9507 21.875 25 20.8257 25 19.5312V8.59375C25 7.29932 23.9507 6.25 22.6562 6.25Z" fill="#FF64AE" />
                                </svg>

                            </div>
                            <div className="blog_bottom_box-22">
                            Consultation
                            </div>
                        </div>
                        <div className="blog_bottom_box_3">
                        How much does a consultation cost at our clinic?
                        </div>
                        <div className="blog_bottom_box_4">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…
                        </div>
                        <div >
                            <button className="blog_button">
                                <div title="Ấn vào đây để xem thêm" className="g">Read More</div>
                                <div className="h"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                                </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="blog_bottom_box">
                        <div className="main-blog_bottom_box_1">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="blog_bottom_box-2">
                            <div className="blog_bottom_box-21">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6562 6.25H13.2812L10.1562 3.125H2.34375C1.04932 3.125 0 4.17432 0 5.46875V19.5312C0 20.8257 1.04932 21.875 2.34375 21.875H22.6562C23.9507 21.875 25 20.8257 25 19.5312V8.59375C25 7.29932 23.9507 6.25 22.6562 6.25Z" fill="#FF64AE" />
                                </svg>

                            </div>
                            <div className="blog_bottom_box-22">
                                Beauty
                            </div>
                        </div>
                        <div className="blog_bottom_box_3">
                            Watch out! don't choose the wrong beauty product
                        </div>
                        <div className="blog_bottom_box_4">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…
                        </div>
                        <div >
                            <button className="blog_button">
                                <div title="Ấn vào đây để xem thêm" className="g">Read More</div>
                                <div className="h"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                                </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="blog_bottom_box">
                        <div className="main-blog_bottom_box_1">
                            <img src={blog3} alt="" />
                        </div>
                        <div className="blog_bottom_box-2">
                            <div className="blog_bottom_box-21">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6562 6.25H13.2812L10.1562 3.125H2.34375C1.04932 3.125 0 4.17432 0 5.46875V19.5312C0 20.8257 1.04932 21.875 2.34375 21.875H22.6562C23.9507 21.875 25 20.8257 25 19.5312V8.59375C25 7.29932 23.9507 6.25 22.6562 6.25Z" fill="#FF64AE" />
                                </svg>

                            </div>
                            <div className="blog_bottom_box-22">
                            Treatments
                            </div>
                        </div>
                        <div className="blog_bottom_box_3">
                        About skin care you need to know
                        </div>
                        <div className="blog_bottom_box_4">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…
                        </div>
                        <div >
                            <button className="blog_button">
                                <div title="Ấn vào đây để xem thêm" className="g">Read More</div>
                                <div className="h"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 10.1088V3.57523C4.0625 3.12282 4.60949 2.89626 4.92939 3.21616L8.1962 6.48296C8.3945 6.68127 8.3945 7.00281 8.1962 7.20111L4.92939 10.4679C4.60949 10.7878 4.0625 10.5613 4.0625 10.1088Z" fill="#D7DBFF" />
                                </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                  
                </div>

                <div className="blog-right">
                    <div className="blog-right_box_search">
                        <input type="text" placeholder="Search here ..." />
                        <div className="blog-right_search_1">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="search" clip-path="url(#clip0_178_73)">
                                    <path id="Vector" d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_178_73">
                                        <rect width="25" height="25" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>

                    </div>
                    <div className="blog-right_box_post">
                        <div className="blog-right_box_post1">
                            Recent Posts
                        </div>
                        <div className="blog-right_box_post2">
                            <div className="blog-right_box_post_left">
                                <img src={post1} alt="" />
                            </div>
                            <div className="blog-right_box_post_right">
                                <div className="blog-right_box_post_right1">
                                    01 jan 2021
                                </div>
                                <div className="blog-right_box_post_right2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </div>
                            </div>
                        </div>
                        <div className="blog-right_box_post2">
                            <div className="blog-right_box_post_left">
                                <img src={post2} alt="" />
                            </div>
                            <div className="blog-right_box_post_right">
                                <div className="blog-right_box_post_right1">
                                    01 jan 2021
                                </div>
                                <div className="blog-right_box_post_right2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </div>
                            </div>
                        </div>
                        <div className="blog-right_box_post2">
                            <div className="blog-right_box_post_left">
                                <img src={post3} alt="" />
                            </div>
                            <div className="blog-right_box_post_right">
                                <div className="blog-right_box_post_right1">
                                    01 jan 2021
                                </div>
                                <div className="blog-right_box_post_right2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-right_box_cate">
                        <div className="blog-right_cate_1">
                            Consultation
                        </div>
                        <div className="blog-right_cate_2">
                            Consultation
                        </div>
                        <div className="blog-right_cate_2">
                            Beauty
                        </div>
                        <div className="blog-right_cate_2">
                            Consultation
                        </div>
                        <div className="blog-right_cate_2">
                            News
                        </div>
                    </div>

                    <div className="blog-right_box_tags">
                        <div className="blog-right_tags_1">
                            Categories
                        </div>
                        <div class="container">
                            <div class="grid-container">
                                <div class="grid-item">beauty</div>
                                <div class="grid-item">cute</div>
                                <div class="grid-item">clinic</div>
                                <div class="grid-item">glow</div>
                                <div class="grid-item">style</div>
                                <div class="grid-item">clinic</div>
                                <div class="grid-item">style</div>
                                <div class="grid-item">great</div>
                                <div class="grid-item">cute</div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-right_box_connect">
                        <div className="blog-right_connect_1">
                            Categories
                        </div>
                        <div className="blog-right_connect_2">
                            <img src={ifb} alt="" />
                            <img src={itt} alt="" />
                            <img src={iin} alt="" />
                            <img src={ili} alt="" />

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );


};

export default memo(BlogPage);