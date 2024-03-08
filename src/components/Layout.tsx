import { Outlet } from "react-router-dom";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";

{/* Your layout structure */ }
function Layout() {
  return (
    <>
      <Nav />
      {/* This line is crucial */}
      <Outlet />
      <div className="bg-blue-800 h-1 w-full mb-10"></div>
      <div className="pb-16 md:px-36 lg:px-36">
        {/* Horizontal line */}
        <Footer />
      </div>
    </>
  );
}

export default Layout;