import { useQuery } from "@tanstack/react-query";
import Bookings from "../components/Bookings";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const {
    data: user,
    isPending,
    error,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () =>
      fetch("http://localhost:3001/api/v1/customers/1").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <main>
      <Navbar user={user.name} />
      <Bookings user={user} />
    </main>
  );
};

export default Dashboard;
