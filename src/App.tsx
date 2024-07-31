import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to our App
    <QueryClientProvider client={queryClient}>
      <Navbar />
    </QueryClientProvider>
  );
}

export default App;
