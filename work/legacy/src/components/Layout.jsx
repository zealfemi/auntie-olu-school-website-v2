import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import { schoolData } from "../data";

export default function Layout() {
  const location = useLocation();
  const page =
    location.pathname.replaceAll("/", "").charAt(0).toUpperCase() +
    location.pathname.slice(2);

  useEffect(() => {
    if (page === "") {
      document.title = `Home - ${schoolData.header.name + " " + schoolData.header.subtitle}`;
    } else {
      document.title = `${page} - ${schoolData.header.name + " " + schoolData.header.subtitle}`;
    }
  }, [page]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
