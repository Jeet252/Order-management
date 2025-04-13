import React, { useState } from "react";
import { Menu, User } from "react-feather";
import NavLink from "./NavLink";

export default function Navbar({ userName }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-orange-600 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden md:flex gap-6">
            <NavLink label="Submit Orders" />
            <NavLink label="Track Orders" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-orange-500" />
          <span className="text-sm font-medium text-slate-700">{userName}</span>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-4 space-y-2 transition-all">
          <NavLink label="Submit Orders" mobile />
          <NavLink label="Track Orders" mobile />
        </div>
      )}
    </nav>
  );
}
