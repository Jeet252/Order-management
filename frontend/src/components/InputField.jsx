import React from "react";

export default function InputField({
  id,
  type,
  placeholder,
  icon,
  label,
  value,
  setValue,
}) {
  const Icon = icon;
  const handleChange = (e) => {
    setValue((pre) => {
      return { ...pre, [id]: e.target.value };
    });
  };
  return (
    <div>
      <label className="block text-sm font-semibold mb-1" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          required
          className="w-full border border-slate-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
        />
        <div className="absolute left-3 top-2.5 text-orange-400">
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
