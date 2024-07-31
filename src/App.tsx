import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Bookings from "./components/Bookings";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to our App
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Bookings />
    </QueryClientProvider>
  );
}

export default App;
