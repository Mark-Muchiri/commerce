import { Outlet } from "react-router-dom";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Section5 from "@/pages/home/Section5.tsx";

{/* Your layout structure */ }
function Layout() {
  return (
    <>
      <Nav />
      {/* This line is crucial */}
      <Outlet />
      {/* Email Subscription */}
      <div className="pb-40 md:px-36 lg:px-36">
          <Section5 />
        </div>
      {/* Horizontal line */}
      <div className="bg-blue-800 h-1 w-full mb-10"></div>
      <div className="pb-16 md:px-36 lg:px-36">
        <Footer />
      </div>
    </>
  );
}

export default Layout;