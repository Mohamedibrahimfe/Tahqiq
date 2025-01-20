import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import MayShowNaviagtopn from "../../components/mayshownavigation/MayShowNaviagtopn";
const Layout = () => {
  return (
    <div>
      <MayShowNaviagtopn >
        <NavBar />
      </MayShowNaviagtopn>
      <div className="max-w-screen-xl mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
