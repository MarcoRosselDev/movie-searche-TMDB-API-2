import "swiper/swiper.min.css";
import "./assets/boxicons-2.1.4/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import RoutesConfig from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          render={(props) => (
            <>
              <Header {...props} />
              <RoutesConfig />
              <Footer />
            </>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
