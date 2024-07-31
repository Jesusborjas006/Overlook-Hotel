import { useQuery } from "@tanstack/react-query";

interface BookingsProp {
  user: {
    id: number;
    name: string;
  };
}

const Bookings = ({ user }: BookingsProp) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["bookingsData"],
    queryFn: () =>
      fetch("http://localhost:3001/api/v1/bookings").then((res) => res.json()),
  });

  const filteredBookings = data?.bookings.filter(
    (booking: { userID: number }) => {
      return booking.userID === user.id;
    }
  );

  if (isPending) return "Loading all bookings...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      <h3>My Bookings</h3>
      {JSON.stringify(filteredBookings)}
    </div>
  );
};

export default Bookings;
