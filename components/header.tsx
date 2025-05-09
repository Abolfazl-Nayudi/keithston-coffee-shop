import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Button from "./button";

const navItems = [
  { id: "1", name: "Home", active: true },
  { id: "2", name: "Blog", active: false },
  { id: "3", name: "Contact Us", active: false },
  { id: "4", name: "Services", active: false },
];

export default function Header() {
  return (
    <header
      className={`bg-[url(../public/hero.webp)] bg-no-repeat bg-cover bg-bottom h-screen`}
    >
      <section className="flex items-center justify-between p-10 w-full max-w-2xl">
        <div>
          <Image src={logo} alt="logo" width={100} />
        </div>
        <nav>
          <ul className="flex gap-5 font-poppins font-semibold text-xl text-ui-primary">
            {navItems.map(({ id, name, active }) => {
              return (
                <li key={id} className={`nav-item ${active && "text-ui-gold"}`}>
                  <a href="#">{name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>

      <section className="relative flex flex-col ms-30 mt-45 ">
        <span className="font-inter text-2xl text-ui-gold font-semibold">
          Delicious Cafe
        </span>
        <h1 className="font-sansita-swashed text-7xl text-ui-primary">
          Sweet Treats,
          <br />
          Perfect Eats
        </h1>
        <div className=" mt-20 flex gap-10">
          <Button text="Shop Now" className="px-8" />
          <button className="text-ui-gold text-2xl">Learn More</button>
        </div>
      </section>
    </header>
  );
}
