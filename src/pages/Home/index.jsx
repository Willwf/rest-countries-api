import { Header } from "../../Components/Header";

import { Outlet } from "react-router-dom";

export function Home({ isDarkMode, setIsDarkMode }) {
  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Outlet />
    </>
  );
}
