import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import BackgroundAnimation from './components/layout/BackgroundAnimation';
import Home from './pages/Home';
import About from './pages/About';
import Programme from './pages/Programme';
import Coding from './pages/Coding';
import Robotics from './pages/Robotics';
import Trainer from './pages/Trainer';
import Book from './pages/Book';
import Schools from './pages/Schools';
import Contact from './pages/Contact';

// Admin imports
import AdminRoute from './components/layout/AdminRoute';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen relative">
      <BackgroundAnimation />
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollToTop />
        {!isAdminRoute && <Navbar />}
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/robotics" element={<Robotics />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route path="/book" element={<Book />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            {/* <Route path="/admin/login" element={<Login />} />
            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<Dashboard />} />
            </Route> */}
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
      </div>
    </div>
  );
}

export default App;
