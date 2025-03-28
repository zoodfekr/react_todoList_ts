import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

import logoImg from '../../assets/logo/logo.png';
import { Divider } from '@mui/material';
import { JSX } from 'react';
import { NavLink, To } from 'react-router';

type SidebarItem = { id: number; name: string; icon: JSX.Element, to: To };

const sidebarList: SidebarItem[] = [
    { id: 1, name: 'داشبورد', icon: <DashboardRoundedIcon />, to: '/home/dashboard' },
    { id: 2, name: 'دسته بندی ها', icon: <CategoryRoundedIcon />, to: '/home/category' },
    { id: 3, name: 'تسک ها', icon: <AssignmentRoundedIcon />, to: '/home/tasks' },
];

const SidebarItems = () => {
    return (
        <div className="flex flex-col p-2 h-full overflow-x-hidden overflow-y-auto bg-stone-600/50">
            <div className="p-1 flex items-center justify-end gap-2">
                <p>مدیریت وظایف</p>
                <img src={logoImg} width={47} alt="Logo" />
            </div>

            <Divider />

            <div className="mt-5 p-2">
                {sidebarList.map((value) => (
                    <NavLink
                        key={value.id}
                        to={value.to}
                        className={({ isActive }) => `gap-3 rounded-lg p-2 justify-end my-2 w-full flex items-center
                         ${isActive ? 'bg-blue-500 text-white transition-all duration-700' : ''}`}
                    >
                        {value.name}
                        {value.icon}
                    </NavLink>

                ))}
            </div>
        </div>
    );
};

export default SidebarItems;
