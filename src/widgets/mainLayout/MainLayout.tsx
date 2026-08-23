import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import ThemeProvider from "@/app/providers/themeProvider/ThemeProvider";
import './mainLayoutStyle.scss'

function MainLayout() {
  console.log('Main layout render');

  return (
    <ThemeProvider>
      <div className="wrapper">
        <Header />

        <main className="page">
          <Provider store={store}>
            <Outlet />
          </Provider>
        </main>

        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default MainLayout;