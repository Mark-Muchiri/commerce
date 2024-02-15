import { Outlet } from "react-router-dom";
import Nav from "./Nav.tsx";

{/* Your layout structure */ }
function Layout() {
  return (
    <>
      <Nav />
      {/* This line is crucial */}
      <Outlet />
    </>
  );
}

export default Layout;