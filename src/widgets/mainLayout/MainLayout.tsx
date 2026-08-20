import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function MainLayout() {
  console.log('Main layout render');

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;