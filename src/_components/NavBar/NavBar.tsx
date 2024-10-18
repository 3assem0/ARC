"use client";

import DarkmodeButtin from "../DarkmodeButtin/DarkmodeButtin";

export default function NavBar() {
  return (
    <div suppressHydrationWarning={true}>

    <header className="fixed inset-x-0 top-0 z-[1000] mx-auto  border border-gray-100 bg-white/80 py-1 shadow backdrop-blur-lg top-6 rounded-3xl max-w-[300px]">
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
            {/* <p className="navlogotitle">ARC</p> */}
          </a>
        </div>

        {/* <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
          <a
            aria-current="page"
            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            href="/"
          >
            Home 
          </a>
          <a
            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            href="/About"
          >
            About
          </a>
          <a
            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            href="/Contact"
          >
            Contact
          </a>
        </div> */}

        {/* Right side buttons */}
        <div className="flex items-center justify-end gap-3">
          <a
            className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            href="/login"
          >
            Mail
          </a>
          {/* <a
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href="/login"
          >
            Sale
          </a> */}
          <DarkmodeButtin/>
        </div>
      </div>
    </div>
  </header>
  </div>

  );
}
