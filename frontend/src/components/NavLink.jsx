import React from "react";

export default function NavLink({ label, mobile }) {
  return (
    <a
      href="#"
      className={`${
        mobile ? "block" : ""
      } text-orange-600 font-medium hover:text-orange-700 transition`}
    >
      {label}
    </a>
  );
}
