

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/post" className="text-white hover:text-gray-300">
            posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
