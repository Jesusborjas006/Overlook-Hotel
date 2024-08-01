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

  const { data: roomsData } = useQuery({
    queryKey: ["roomsData"],
    queryFn: () =>
      fetch("http://localhost:3001/api/v1/rooms").then((res) => res.json()),
  });

  const userBookings = data?.bookings.filter((booking: { userID: number }) => {
    return booking.userID === user.id;
  });

  const totalSpent = userBookings?.reduce((total, booking) => {
    const room = roomsData?.rooms.find(
      (room) => room.number === booking.roomNumber
    );
    return room ? total + room.costPerNight : total;
  }, 0);

  if (isPending) return "Loading all bookings...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      <h3>My Bookings</h3>
      {JSON.stringify(userBookings)}
      <p>Total Spending: ${+totalSpent.toFixed(2)}</p>
    </div>
  );
};

export default Bookings;
