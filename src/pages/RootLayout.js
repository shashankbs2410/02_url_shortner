import { Outlet } from "react-router-dom";

import MainNavigation from "../components/Layout/MainNavigation";

const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
