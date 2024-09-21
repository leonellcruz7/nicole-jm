import React, { useState } from "react";
import Input from "./input";

interface IProps {
  label?: string;
  placeholder?: string;
  list: string[];
  handleAdd: (val: string) => void;
  max?: number;
  handleRemove: (val: string) => void;
}

const MultipleInput = ({
  label,
  placeholder,
  list = [],
  handleAdd,
  max = 100,
  handleRemove,
}: IProps) => {
  const [val, setval] = useState("");

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    handleAdd(val);
    setval("");
  };
  return (
    <div className="space-y-4">
      {!!label && (
        <label className="text-[14px] font-semibold text-white uppercase">
          {label}
        </label>
      )}
      <div className="space-y-2">
        {list.map((item, index) => {
          return (
            <div
              onClick={() => handleRemove(item)}
              key={index}
              className="flex items-center gap-4"
            >
              <p className="text-white">{item}</p>
              <p className="text-[12px] text-red-500 cursor-pointer hover:scale-[1.03]">
                remove
              </p>
            </div>
          );
        })}
      </div>
      {list.length < max && (
        <form
          onSubmit={add}
          className="flex items-center gap-2 max-w-[340px]"
        >
          <Input
            value={val}
            onChange={(e) => setval(e.target.value)}
            placeholder={placeholder}
          />
          <button
            disabled={list.some(
              (item) => item.toLowerCase() === val.toLowerCase()
            )}
            type="submit"
            className="w-12 h-10 rounded-[12px] bg-white transition-all text-main hover:scale-[1.02]"
          >
            <i className="ri-add-line text-[24px]"></i>
          </button>
        </form>
      )}
    </div>
  );
};

export default MultipleInput;
