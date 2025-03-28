import { Box, CssBaseline } from "@mui/material";

import Sidebar from "../sidebar/Sidebar";
import Appbar from "../appbar/Appbar";
import { Outlet } from "react-router"
import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { setShowSidebar } from "../../redux/reducers/show_sidebar";


const drawerWidth = 250;

const MainLayout: React.FC = () => {

    const dispatch = useAppDispatch();

    const { show } = useAppSelector(state => state.show_sidebar)
    const handleDrawerToggle = () => dispatch(setShowSidebar(!show));


    return (
        <Box sx={{
            display: "flex",
            position: "relative"
        }}>
            <CssBaseline />




            <div className="border grow">
                <Appbar
                    drawerWidth={drawerWidth}
                    handleDrawerToggle={handleDrawerToggle}
                />

                <Box
                    className={`border border-red-500 h-full p-2 mt-14  overflow-auto grow`}
                    sx={{
                        height: "calc(100vh - 58px)",
                        // flexGrow: 1, // این باعث می‌شود فضای اصلی در دسترس قرار گیرد
                        // marginLeft: show ? drawerWidth : 0, // اگر Sidebar باز باشد، فضا را جابجا می‌کند
                        // transition: "margin-left 0.3s", // افزودن انیمیشن برای حرکت ملایم
                        width: { sm: 1, md: `calc(100vw - ${drawerWidth}px)` }
                    }}
                >
                    <Outlet />
                </Box>

            </div>


            {/* <div style={{width:`${drawerWidth}px`}}> */}
            <Sidebar
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />
            {/* </div> */}

        </Box>
    );
};

export default MainLayout;


