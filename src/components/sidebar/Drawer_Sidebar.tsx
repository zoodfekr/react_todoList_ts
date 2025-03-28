import Drawer from '@mui/material/Drawer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';
import { setDrawerSidebar } from '../../redux/reducers/show_sidebar';
import React from 'react';
import SidebarItems from './SidebarItems';



const Drawer_Sidebar: React.FC = () => {

    const {  drawer } = useAppSelector(state => state.show_sidebar);
    const dispatch = useAppDispatch();

    return (

        <Drawer
            className="md:hidden h-full p-0 m-0"
            anchor={"left"}
            open={drawer}
            onClose={() => dispatch(setDrawerSidebar(false))}

        >
            <SidebarItems />
        </Drawer>


    );
}
export default Drawer_Sidebar
