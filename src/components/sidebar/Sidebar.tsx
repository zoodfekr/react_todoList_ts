import { Drawer } from "@mui/material";



type SidebarProps = {
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
    drawerWidth: number | string;
};

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, handleDrawerToggle, drawerWidth }) => {



    return (
        <>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": { width: drawerWidth },
                }}
            >
              محتوای ساید بار
            </Drawer>

            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": { width: drawerWidth },
                }}
                open
            >
              محتوای ساید بار
            </Drawer>
        </>
    )
};
export default Sidebar;