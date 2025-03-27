import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { setTheme } from "../../redux/reducers/theme";


type AppbarProps = {
    handleDrawerToggle: () => void;
    drawerWidth: number | string;
};


const Appbar: React.FC<AppbarProps> = ({ drawerWidth, handleDrawerToggle }) => {

    const dispatch = useAppDispatch();

    const { mode } = useAppSelector(state => state.theme_slice)

    const handleThemeMode = () => dispatch(setTheme(mode === 'dark' ? 'light' : 'dark'))

    const themeText = mode === 'dark' ? 'روشن' : 'تیره';


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


                        <button className="mx-2" onClick={handleThemeMode}>{themeText}</button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
};
export default Appbar