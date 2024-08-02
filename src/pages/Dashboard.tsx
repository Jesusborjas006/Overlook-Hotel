import { useQuery } from "@tanstack/react-query";
import Bookings from "../components/Bookings";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Dashboard = () => {
  const [userID, setUserID] = useState(1);

  const {
    data: user,
    isPending,
    error,
  } = useQuery({
    queryKey: ["userData", userID],
    queryFn: () =>
      fetch(`http://localhost:3001/api/v1/customers/${userID}`).then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <main>
      <Navbar user={user.name} />
      <button onClick={() => setUserID((prevUser) => prevUser + 1)}>
        Next User
      </button>
      <Bookings user={user} />
    </main>
  );
};

export default Dashboard;
