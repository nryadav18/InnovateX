import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const adminInfo = localStorage.getItem('innovateAdminToken');
  return adminInfo ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminRoute;
