import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["userData"],
    queryFn: () =>
      fetch("http://localhost:3001/api/v1/customers/1").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <nav>
      <p>{data.name}</p>
    </nav>
  );
};

export default Navbar;
