import { Drawer } from "@mui/material";
import { useAppSelector } from "../../redux/hooks/reduxHooks";



type SidebarProps = {
    handleDrawerToggle: () => void;
    drawerWidth: number | string;
};

const Sidebar: React.FC<SidebarProps> = ({ handleDrawerToggle, drawerWidth }) => {


    const { show } = useAppSelector(state => state.show_sidebar)



    return (
        <>
            <Drawer
                variant="temporary"
                open={show}
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