import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/pages/dashboard/Dashboard";
import Category from "../components/pages/category/Category";
import Tasks from "../components/pages/tasks/Tasks";
import MainLayout from "../components/containers/MainLayout";

const AppRoutes = () => {
    return (
        <Routes>
            {/* مسیر صفحه لاگین (بدون Layout) */}
            {/* <Route path="/" element={<Home />} /> */}

            {/* مسیرهای داخل داشبورد (با Layout) */}
            <Route path="/home" element={<MainLayout />}>
                <Route index element={<Dashboard />} /> {/* مسیر پیش‌فرض */}
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="category" element={<Category />} />
                <Route path="tasks" element={<Tasks />} />
            </Route>

            {/* صفحه 404 */}
            <Route path="*" element={<p>صفحه مورد نظر یافت نشد</p>} />
        </Routes>
    );
};

export default AppRoutes;
