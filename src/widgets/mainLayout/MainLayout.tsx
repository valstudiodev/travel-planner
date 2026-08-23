import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TripProvider from "@/app/providers/tripProvider/TripProvider";

function MainLayout() {
  console.log('Main layout render');

  return (
    <div className="wrapper relative ">
      <Header />

      <main className="page bg-text ">
        <TripProvider>
          <Outlet />
        </TripProvider>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;