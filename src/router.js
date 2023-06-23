import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import AboutPage from "pages/users/aboutPage";
import ServicePage from "pages/users/servicePage";
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

