import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


type AppbarProps = {
    handleDrawerToggle: () => void;
    drawerWidth: number | string;
};


const Appbar: React.FC<AppbarProps> = ({ drawerWidth, handleDrawerToggle }) => {



    return (
        <>
            <AppBar position="fixed" sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}>
                <Toolbar>
                    <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ width: 1 }}>
                        appbar items
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
};
export default Appbar