import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import { MenuIcon } from "@heroicons/react/outline";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-12 mb-6 ">
      <div className="flex justify-between border-b w-full border-black py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-semibold text-4xl text-black font-brand relative hidden lg:inline">
              Casdm <span className="text-blue-800">Blog</span>
            </span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer font-semibold text-3xl text-black font-brand lg:hidden relative flex-shrink-0 ">
              C <span className="text-blue-800">B</span>
            </span>
          </Link>
        </div>
        <div className=" flex items-center justify-end space-x-4">
          <MenuIcon className="h-6 md:hidden float-right cursor-pointer align-middle " />
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-black p-2 rounded-full ml-4 font-semibold cursor-pointer hover:bg-blue-800 hover:text-white">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
