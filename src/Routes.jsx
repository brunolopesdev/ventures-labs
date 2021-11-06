import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDetails } from "./components/Dashboard/userDetails/UserDetails";
import { DataContextProvider } from "./context";
import Main from "./components/Dashboard/main/Main";
import Navbar from "./components/Dashboard/navbar/Navbar";
import Register from "./components/Dashboard/register/Register";
import Sidebar from "./components/Dashboard/sidebar/Sidebar";

const Rotas = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const openSideBar = () => {
    setSideBarOpen(true);
  };
  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  return (
    <Router>
      <DataContextProvider>
        <Navbar sideBarOpen={sideBarOpen} openSideBar={openSideBar} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
        </Routes>
        <Sidebar sideBarOpen={sideBarOpen} closeSideBar={closeSideBar} />
      </DataContextProvider>
    </Router>
  );
};

export default Rotas;
