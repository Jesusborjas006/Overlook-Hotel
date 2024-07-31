import { useQuery } from "@tanstack/react-query";

const Bookings = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["bookingsData"],
    queryFn: () =>
      fetch("http://localhost:3001/api/v1/bookings").then((res) => res.json()),
  });

  if (isPending) return "Loading all bookings...";

  if (error) return `An error has occurred: ${error.message}`;

  console.log(data);

  return (
    <div>
      <h3>My Bookings</h3>
      {JSON.stringify(data)}
    </div>
  );
};

export default Bookings;
