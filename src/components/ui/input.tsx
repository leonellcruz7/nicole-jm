import React, { InputHTMLAttributes } from "react";
interface IProp extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const Input = ({ label, ...props }: IProp) => {
  return (
    <div className="space-y-1 w-full">
      {!!label && (
        <label className="text-[14px] font-semibold text-white uppercase">
          {label}
        </label>
      )}
      <input
        {...props}
        className="h-12 rounded-[10px] shadow-md w-full outline-none px-4 transition-all"
      />
    </div>
  );
};

export default Input;
