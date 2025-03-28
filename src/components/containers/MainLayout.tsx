import { Box, CssBaseline, Paper } from "@mui/material";

import Sidebar from "../sidebar/Sidebar";
import Appbar from "../appbar/Appbar";
import { Outlet } from "react-router"
import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { setDrawerSidebar } from "../../redux/reducers/show_sidebar";
import Drawer_Sidebar from "../sidebar/Drawer_Sidebar";


const drawerWidth = 250;

const MainLayout: React.FC = () => {

    const dispatch = useAppDispatch();

    const { drawer, closed } = useAppSelector(state => state.show_sidebar)
    const handleDrawerToggle = () => dispatch(setDrawerSidebar(!drawer));


    return (



        <Box className="flex flex-row h-screen overflow-hidden ">



            <div className="grow relative h-screen" style={{ width: closed ? 'w-full' : 'calc(100vw-340px)' }}>
                {/* اپ بار در صفحات */}
                <Appbar handleDrawerToggle={handleDrawerToggle} />

                {/* محتوا */}
                <div
                    className={`overflow-x-hidden overflow-y-auto box-border transition-all 
            h-[calc(100vh-40px)] relative 
            ${closed ? "w-screen" : "md:w-[calc(100vw-250px)]"}`
                    }
                >
                    <Paper className="w-full h-full" sx={{ borderRadius: "0px" }} elevation={3}>
                        <div className="bg-stone-300/50 w-full h-full">

                            <Outlet />
                        </div>
                    </Paper>
                </div>
            </div >

            {/* ساید بار */}



            < Sidebar drawerWidth={drawerWidth} />

            {/* ساید باز متحرک */}
            < Drawer_Sidebar />


        </Box >



    );
};

export default MainLayout;

