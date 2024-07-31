interface NavbarProps {
  user: string;
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <nav>
      <p>{user}</p>
    </nav>
  );
};

export default Navbar;
