import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import AboutPage from "pages/users/aboutPage";
import ServicePage from "pages/users/servicePage";
import GalleryPage from "pages/users/galleryPage";
import TeamPage from "pages/users/teamPage";
import BlogPage from "pages/users/blogPage";
import ContactPage from "pages/users/contactPage";
//import MasterLayout from "./pages/users/theme/masterLayout";


const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: < HomePage />,
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: < ProfilePage />,
        },
        {
            path: ROUTERS.USER2.ABOUT,
            component: < AboutPage />,
        },
        {
            path: ROUTERS.USER3.SERVICE,
            component: <ServicePage/>,
        },

        {
            path: ROUTERS.USER4.GALLERY,
            component: <GalleryPage/>,
        },

        {
            path: ROUTERS.USER5.TEAM,
            component: <TeamPage/>,
        },
        {
            path: ROUTERS.USER6.BLOG,
            component: <BlogPage/>,
        },
        {
            path: ROUTERS.USER7.CONTACT,
            component: <ContactPage/>,
        },

    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    )

};
const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;

