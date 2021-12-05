import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-12 mb-8 ">
      <div className="border-b w-full inline-block border-black py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-semibold text-4xl text-black font-brand">
              Casdm <span className="text-blue-800">Blog</span>
            </span>
          </Link>
        </div>
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
  );
};

export default Header;
