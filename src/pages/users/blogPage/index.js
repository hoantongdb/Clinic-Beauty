
import { memo } from "react";
import "./style.scss"
import blog1 from '../profilePage/Image/blog-1.png';
import blog2 from '../profilePage/Image/blog-2.png';
import blog3 from '../profilePage/Image/blog-3.png';
const BlogPage = () => {

    return (
        <div>
            <div className="blog">

                <div className="blog_bottom">
                    <div className="blog_bottom_box">
                        <div className="main-blog_bottom_box_1">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="blog_bottom_box-2">
                            How much does a consultation cost at our clinic?
                        </div>
                        <div className="blog_bottom_box_3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </div>
                        <div >
                            <button className="blog_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Learn More</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                    <div className="blog_bottom_box">
                        <div className="blog_bottom_box_1">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="blog_bottom_box-2">
                            Watch out! don't choose the wrong beauty product
                        </div>
                        <div className="blog_bottom_box_3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </div>
                        <div >
                            <button className="blog_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Learn More</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                    <div className="blog_bottom_box">
                        <div className="blog_bottom_box_1">
                            <img src={blog3} alt="" />
                        </div>
                        <div className="blog_bottom_box-2">
                            About skin care you need to know
                        </div>
                        <div className="blog_bottom_box_3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </div>
                        <div >
                            <button className="blog_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Learn More</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>

                </div>


                <div className="blog-right">
                <div className="blog-right_box_search">
                        <div className="blog-right_search_1">
                            Categories
                        </div>
                       
                    </div>
                    <div className="blog-right_box_post">
                        <div className="blog-right_post_1">

                        </div>
                        <div className="blog-right_post-2">
                            Watch out! don't choose the wrong beauty product
                        </div>
                        <div className="blog_right_post_3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </div>
                        <div >
                            <button className="blog-right_button">
                                <div title="Ấn vào đây để xem thêm" className="a">Learn More</div>
                                <div className="b"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z" fill="#FF64AE" />
                                </svg></div>
                            </button>
                        </div>
                    </div>
                    <div className="blog-right_box_cate">
                        <div className="blog-right_cate_1">
                            Categories
                        </div>
                        <div >
                            Consultation
                        </div>
                        <div >
                            Consultation
                        </div>
                        <div >
                            Consultation
                        </div>
                        <div >
                            Consultation
                        </div>
                    </div>

                    <div className="blog-right_box_tags">
                        <div className="blog-right_tags_1">
                            Categories
                        </div>
                        <div >
                            Consultation
                        </div>
                        <div >
                            Consultation
                        </div>
                        <div >
                            Consultation
                        </div>
                        <div >
                            Consultation
                        </div>
                    </div>

                    <div className="blog-right_box_connect">
                        <div className="blog-right_connect_1">
                            Categories
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );


};

export default memo(BlogPage);