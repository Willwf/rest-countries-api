import { Home } from "./pages/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import { lightTheme, darkTheme } from "./styles/variables";
import { useEffect } from "react";

export function App() {
  const queryClient = new QueryClient();

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  // if (!!savedTheme) {
  //   setIsDarkMode(savedTheme);
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
