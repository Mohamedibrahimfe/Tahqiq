import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="mb-16">
        <NavBar />
      </div>
      <div className="max-w-screen-xl mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
