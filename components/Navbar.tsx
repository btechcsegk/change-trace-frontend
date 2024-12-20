// components/Navbar.tsx
import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-12" /> {/* Replace with your logo */}
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-blue-400">Home
          </Link>
          <Link href="/challengers" className="text-white hover:text-blue-400">Challengers</Link>
          <Link href="/contact" className="text-white hover:text-blue-400">Contact</Link>
          <Link href="/auth/sign-in" className="text-white hover:text-blue-400">SignIn</Link>
          <Link href="/auth/sign-up" className="text-white hover:text-blue-400">Register</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center"></div>
      </div>
    </nav>
  );
};

export default Navbar;