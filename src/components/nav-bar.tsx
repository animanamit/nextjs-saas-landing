const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">PAVE®</div>
      <ul className="flex space-x-4">
        <li>Technology</li>
        <li>Solutions</li>
        <li>Newsroom</li>
        <li>Company</li>
      </ul>
      <div className="flex space-x-4">
        <p>Book a Demo</p>
        <p>Lets Talk</p>
      </div>
    </nav>
  );
};

export default NavBar;
