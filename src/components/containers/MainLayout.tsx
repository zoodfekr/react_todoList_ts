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
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <Appbar
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />

            <Sidebar
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />

            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;


