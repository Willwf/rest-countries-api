import { Header } from "../../Components/Header";

import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
