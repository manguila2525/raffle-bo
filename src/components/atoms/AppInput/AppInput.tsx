import React from "react";

interface AppInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => (
  <div className="flex flex-col space-y-1.5">
    <label className="font-semibold text-sm">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
);

export default AppInput;
