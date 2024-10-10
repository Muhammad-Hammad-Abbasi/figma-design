'use client'

import Link from "next/link";
import { useState } from "react";
import { BsBox } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import { FiAlignRight, FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle_Button = () => {

    setIsOpen(!isOpen)
  }

  return (
    <header>
      <main className="flex justify-evenly p-6 font-medium ">

        {/* logo div */}
        <div className="flex text-4xl font-bold">
          <h1 className="text-[#c4ac4f]">
            <BsBox />
          </h1>
          <p className="pl-3">Furniro</p>

          {/* toggle Button */}
          <div className="block md:hidden lg:hidden pl-10 p-1">
            <button onClick={toggle_Button}>{isOpen ? <FaTimes size={20} /> : <FiAlignRight size={28} />}</button>
          </div>
        </div>


        {/* navigation */}
        <div className="hidden md:block lg:block">
          <nav className="flex text-sm md:text-md lg:text-[17px] items-center font-semibold lg:px-4 p-2">
            <ul className="flex md:gap-8 lg:gap-14">
              <li><Link href={"/"} className="hover:text-[#c4ac4f]">Home</Link></li>
              <li><Link href={""} className="hover:text-[#c4ac4f]">Shop</Link></li>
              <li><Link href={""} className="hover:text-[#c4ac4f]">Blog</Link></li>
              <li><Link href={""} className="hover:text-[#c4ac4f]">Contact</Link></li>
            </ul>

            {/* Icons */}
            <ul className="flex md:gap-8 lg:gap-10 md:ml-6 lg:ml-32">
              <li><Link href={"/"}><CgProfile size={30} /></Link></li>
              <li><Link href={"/"}><FiSearch size={30} /></Link></li>
              <li><Link href={"/"}><FaRegHeart size={30} /></Link></li>
              <li><Link href={"/"}><MdOutlineShoppingCart size={30} /></Link></li>
            </ul>
          </nav>
        </div>


        {
          isOpen && (
            <div
              className={`fixed inset-y-0 right-0 z-50 duration-[2000ms] ease-in-out transform 
      `}
            >
              <nav className="flex flex-col bg-white text-lg md:text-md lg:text-[17px] font-semibold h-full w-[300px]">

                <button onClick={toggle_Button} className="self-end p-10 ">
                  <FaTimes size={20} />
                </button>

                {/* Centered Links */}
                <ul className="flex flex-col items-center space-y-10">
                  <li><Link href={"/"} className="hover:text-[#c4ac4f]">Home</Link></li>
                  <li><Link href={"./shop"} className="hover:text-[#c4ac4f]">Shop</Link></li>
                  <li><Link href={"/"} className="hover:text-[#c4ac4f]">Blog</Link></li>
                  <li><Link href={"/contact"} className="hover:text-[#c4ac4f]">Contact</Link></li>
                </ul>

                {/* Icons - Positioned */}
                <ul className="flex space-x-5 justify-center pt-14">
                  <li><Link href={"/contact"}><CgProfile size={30} /></Link></li>
                  <li><Link href={"/shop"}><FiSearch size={30} /></Link></li>
                  <li><Link href={"/blog"}><FaRegHeart size={30} /></Link></li>
                  <li><Link href={"/shop"}><MdOutlineShoppingCart size={30} /></Link></li>
                </ul>
              </nav>
            </div>
          )
        }

      </main>
    </header>
  )
}