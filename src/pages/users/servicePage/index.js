import { memo } from "react";
import './style.scss';
// import imgus from './Image/aboutus.png';
import ourservices1 from './img/our-service-1.png';
import ourservices2 from './img/our-service-2.png';
import ourservices3 from './img/our-service-3.png';
import ourservices4 from './img/our-service-4.png';
// import services3 from './Image/main-services-3.png';
// import blog1 from './Image/blog-1.png';
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
        </div>
    );
};
export default memo(ServicePage)