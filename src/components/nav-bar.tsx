import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white sticky top-0 z-50">
      <div className="text-lg font-bold">
        <Link href="/">PAVE®</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/technology">Technology</Link>
        </li>
        <li>
          <Link href="/solutions">Solutions</Link>
        </li>
        <li>
          <Link href="/newsroom">Newsroom</Link>
        </li>
        <li>
          <Link href="/company">Company</Link>
        </li>
      </ul>
      <div className="flex space-x-4">
        <p>Book a Demo</p>
        <p>Lets Talk</p>
      </div>
    </nav>
  );
};

export default NavBar;
