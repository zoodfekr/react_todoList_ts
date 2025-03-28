import { Paper } from "@mui/material";
import { useAppSelector } from "../../redux/hooks/reduxHooks";
import SidebarItems from "./SidebarItems";



type SidebarProps = {
    drawerWidth: number | string;
};

const Sidebar: React.FC<SidebarProps> = ({ drawerWidth }) => {


    const { closed } = useAppSelector(state => state.show_sidebar)



    return (
        <>

            <div
                className=" hidden md:block relative overflow-x-hidden
                 transition-all duration-500"
                style={{ width: closed ? "0px" : `${drawerWidth}px` }}
            >
                <div
                    className="w-full h-full transition-all duration-500 p-0"
                    style={{ width: closed ? "0px" : `${drawerWidth}px`, overflow: 'hidden' }}
                >


                    <Paper className="h-full w-full" sx={{
                        width: 1, borderRadius: 0,
// 
                    }}>
                        <SidebarItems />
                    </Paper>
                </div>
            </div>

        </>
    )
};
export default Sidebar;