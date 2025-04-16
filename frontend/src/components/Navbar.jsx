import React, { useState } from "react";
import { Menu, User } from "react-feather";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Navbar({
  userName = JSON.parse(sessionStorage.getItem("user")).username,
}) {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md px-6 py-4 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-orange-600 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden md:flex gap-6">
            <Link
              className="text-orange-600 font-medium hover:text-orange-700 transition"
              to="/"
            >
              Submit Orders
            </Link>
            <Link
              className="text-orange-600 font-medium hover:text-orange-700 transition"
              label=""
              to="/manageorder"
            >
              Track Orders
            </Link>
            <button
              onClick={logout}
              className=" cursor-pointer text-orange-600 font-medium hover:text-orange-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-orange-500" />
          <span className="text-sm font-medium text-slate-700">{userName}</span>
        </div>
      </div>

      {open && (
        <div className="md:hidden top-full left-0 w-full bg-white mt-2 shadow-md space-y-2 transition-all absolute">
          <Link
            to="/"
            className={`block text-orange-600 font-medium hover:text-orange-700 transition`}
          >
            Submit Orders
          </Link>
          <Link
            to="/manageorder"
            className={`block text-orange-600 font-medium hover:text-orange-700 transition`}
          >
            Track Orders
          </Link>
          <button
            onClick={logout}
            className="block text-orange-600 font-medium hover:text-orange-700 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
