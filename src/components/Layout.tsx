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
      <div className="pb-40 md:px-36 lg:px-36">
        <Footer />
      </div>
    </>
  );
}

export default Layout;