import { Outlet } from "react-router-dom";
import { useIsLoggedIn } from "../config/hooks";
import Navbar from "../containers/Navbar";
import { Box } from "@mui/material";
import { Footer } from "../containers/Footer";

export default function AppLayout() {
  const isLoggedIn = useIsLoggedIn();

  /*if (isLoggedIn === null) return null;
    else if (isLoggedIn === false) return <Navigate replace to="/login"/>;*/

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
