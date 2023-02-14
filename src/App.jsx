import { Home } from "./pages/Home";
import { QueryClientProvider, QueryClient } from "react-query";

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
