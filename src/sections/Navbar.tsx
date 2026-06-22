import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
        <a
          href="#"
          className="text-xl font-bold text-[#2A3D63] font-script hover:text-neutral-900"
        >
          Rashifa N
        </a>

        {/* desktop menu */}
        <div className="hidden md:flex gap-6">
          <a
            href="#featured-projects"
            className="text-[#2A3D63] font-boldrussian hover:text-neutral-900 hover:underline transition"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-[#2A3D63] font-boldrussian hover:text-neutral-900 hover:underline transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[#2A3D63] font-boldrussian hover:text-neutral-900 hover:underline transition"
          >
            Contact
          </a>
        </div>

        {/* hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 flex flex-col gap-4">
          <a href="#featured-projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
