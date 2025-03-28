import { AppBar, Box, Button, IconButton, Paper, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { setTheme } from "../../redux/reducers/theme";
import { setCloseSidebar } from "../../redux/reducers/show_sidebar";


type AppbarProps = {
    handleDrawerToggle?: () => void;
};


const Appbar: React.FC<AppbarProps> = ({ handleDrawerToggle }) => {

    const dispatch = useAppDispatch();

    const { mode } = useAppSelector(state => state.theme_slice)
    const { closed } = useAppSelector(state => state.show_sidebar)

    const handleThemeMode = () => dispatch(setTheme(mode === 'dark' ? 'light' : 'dark'))
    const handle_close_open_sidebar = () => dispatch(setCloseSidebar(!closed))

    const themeMode = mode === 'dark'
    const themeText = themeMode ? <WbSunnyRoundedIcon /> : <Brightness2RoundedIcon />;

    return (
        <>

            <div className={` h-10 w-full flex items-center
             ${themeMode ? 'text-white' : 'text-black '}`}
                style={{
                    background: `${themeMode ? '#2c3e50' : '#3498db '}`,


                }}
            >

                <Box sx={{
                    width: 1,
                    // border: '1px solid red',
                    justifyContent: "end",
                    display: "flex"
                }}>
                    <button color="inherit" onClick={handleDrawerToggle}
                        className="block md:hidden"
                    >
                        <MenuIcon />
                    </button>


                    <button color="inherit" onClick={handle_close_open_sidebar}
                        className={` hidden md:block transition-all
                        duration-500 ${closed ? 'rotate-180' : '0'}
                        `}                    >
                        <MenuOpenIcon></MenuOpenIcon>
                    </button>

                    <button
                        className={`mx-2 transition-transform duration-500 ease-in-out ${mode === 'dark' ? "rotate-90" : "rotate-0"}`}
                        onClick={handleThemeMode}
                    >
                        {themeText}
                    </button>


                </Box>
            </div>


        </>
    )
};
export default Appbar