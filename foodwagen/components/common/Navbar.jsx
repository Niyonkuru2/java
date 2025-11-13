"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import AddFoodModal from "../modals/AddFoodModal";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between bg-white shadow-sm px-6 md:px-16 py-3">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 p-2 rounded-full text-white">
          <Menu className="w-5 h-5" />
        </div>
        <span className="font-bold text-xl">
          <span className="text-orange-500">Food</span>
          <span className="text-yellow-500">Wagen</span>
        </span>
      </Link>

      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-5 py-2 rounded-md shadow-md hover:shadow-lg hover:opacity-90 transition"
      >
        Add Meal
      </button>
       <AddFoodModal isOpen={open} onClose={() => setOpen(false)} />
    </nav>
  );
}
