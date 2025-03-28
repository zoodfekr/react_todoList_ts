import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

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

    const themeText = mode === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2RoundedIcon />;


    return (
        <>
            <AppBar position="fixed" sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}>
                <Toolbar className=" " dir='rtl'>
                    <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ width: 1 }}>


                        <button
                            className={`mx-2 transition-transform duration-500 ease-in-out ${mode === 'dark' ? "rotate-90" : "rotate-0"}`}
                            onClick={handleThemeMode}>{themeText}</button>
                    </Box>
                </Toolbar>
            </AppBar >
        </>
    )
};
export default Appbar