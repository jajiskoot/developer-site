import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        <Route
          key="Home"
          path="/"
          element={<Home />}
        />
        <Route
          key="Patient Management"
          path="/patient-management"
          action={() => window.location.href = 'https://patient-management-eight.vercel.app/'}
        />

      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
