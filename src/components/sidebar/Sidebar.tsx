import { Box, Drawer } from "@mui/material";
import { useAppSelector } from "../../redux/hooks/reduxHooks";
import SidebarItems from "./SidebarItems";



type SidebarProps = {
    handleDrawerToggle: () => void;
    drawerWidth: number | string;
};

const Sidebar: React.FC<SidebarProps> = ({ handleDrawerToggle, drawerWidth }) => {


    const { show } = useAppSelector(state => state.show_sidebar)



    return (
        <>
            <div style={{ width: `${drawerWidth}px` }}>

            <Drawer
                variant="temporary"
                open={show}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": { width: `${drawerWidth}px` },
                }}
            >
                <SidebarItems />
            </Drawer>


            {/* <SidebarItems /> */}


            {/* <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": { width: `${drawerWidth}px` },
                }}
                open
            >
                <SidebarItems />
            </Drawer> */}
            </div>
        </>
    )
};
export default Sidebar;