import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";

import { useState } from "react";
import { useEffect } from "react";

import { Home } from "./pages/Home";
import { lightTheme, darkTheme } from "./styles/variables";

export function App() {
  const queryClient = new QueryClient();

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
