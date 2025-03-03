"use client";
import DarkmodeButtin from "../DarkmodeButtin/DarkmodeButtin";

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0  z-[1000] mx-auto  border border-gray-100 bg-white/15 py-1 shadow backdrop-blur-lg top-6 rounded-3xl  max-w-[300px]">
    <div className="px-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex shrink-0">
          <a aria-current="page" className="flex items-center" href="/">
            <img
              className="w-[100px] "
              src="Untitled (5).PNG"
              alt="helal Logo"
            />
          </a>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center justify-end gap-3">
        <a href="/Contact"
          className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
        >
          Mail
      </a>
          <DarkmodeButtin/>
        </div>
      </div>
    </div>
  </header>
  );
}
