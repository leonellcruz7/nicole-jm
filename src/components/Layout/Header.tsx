"use client";

import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MENUS } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 1.3 }}
      className="w-full fixed bg-slate-900/40 top-0 z-50 backdrop-blur-sm shadow-lg"
    >
      <ul className="hidden bulma-container lg:flex items-center h-16 justify-center gap-8">
        {MENUS.map((item, index) => {
          return (
            <Link
              href={item.url}
              key={index}
            >
              <li className="capitalize text-white font-light tracking-wider cursor-pointer hover:scale-[1.04] transition-all">
                {item.label}
              </li>
            </Link>
          );
        })}
      </ul>

      <div className="h-16 flex justify-end items-center lg:hidden">
        <button className="absolute z-10">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            color="white"
          />
        </button>

        <motion.ul
          initial={{ y: -1000 }}
          animate={isOpen ? { y: 0 } : { y: -1000 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          className="fixed top-0 left-0 w-full bg-main/95 shadow-lg h-[80vh] overflow-hidden flex items-center justify-center"
        >
          <ul className="flex flex-col items-center justify-center text-center gap-10">
            {MENUS.map((item, index) => {
              return (
                <li
                  key={index}
                  className="capitalize hover:bg-slate-200 font-light tracking-wider p-4 cursor-pointer transition-all text-white"
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </motion.ul>
      </div>
    </motion.header>
  );
};

export default Header;
