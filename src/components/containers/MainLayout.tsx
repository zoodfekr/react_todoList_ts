import { Box, CssBaseline } from "@mui/material";

import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Appbar from "../appbar/Appbar";
import { Outlet } from "react-router"


const drawerWidth = 250;

const MainLayout: React.FC = () => {


    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <Appbar
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />

            <Sidebar
                mobileOpen={mobileOpen}
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


