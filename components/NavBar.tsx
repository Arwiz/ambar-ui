import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              {label}
       </div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.png" alt="Logo" />
            </div>
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Navigation links */}
                        <NavLink href="/" label="Home" />
                        <NavLink href="/blogs" label="Blogs" />
                        <NavLink href="/movies" label="Movies" />
                          <NavLink href="/users" label="" />
                          <NavLink href="/posts" label="Contact" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;