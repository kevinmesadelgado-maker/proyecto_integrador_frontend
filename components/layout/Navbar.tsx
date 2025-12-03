"use client";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-8 bg-black border-b border-black-900 shadow-md font-BebasNeue uppercase font-bold">

      {/* Logo */}
      <div className="grid grid-cols-2 items-center gap-2"> 
        <h1 className="text-white text-2xl font-bold tracking-wide">
        House of Artist
      </h1>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiONa_AtHHSlge6zq1mE8r_0rKGGJVOagNTg&s" alt="avatar" className="   w-10 h-10 rounded-full object-cover"/></div>
     


      {/* Menú */}
      <div className="flex items-center gap-4">

        {/* Links normales */}
        {[
          { href: "/", label: "Inicio" },
          
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              text-white
              px-4 py-2
              rounded-lg
              transition 
              transform
              duration-200
              hover:scale-110
              hover:shadow-md
              hover:bg-white
              hover:text-black
            "
          >
            {item.label}
          </Link>
        ))}

        {/* Autenticación con Clerk */}
        <SignedOut>
          
          {/* LOGIN en modal */}
          <SignInButton mode="modal">
            <button
              className="
                text-white
                px-4 py-2
                rounded-lg
                transition
                hover:bg-white
                hover:text-black
                hover:scale-105
                uppercase
              "
            >
              Iniciar sesión
            </button>
          </SignInButton>

          {/* REGISTER en modal */}
          <SignUpButton mode="modal">
            <button
              className="
                text-white
                px-4 py-2
                rounded-lg
                transition
                hover:bg-white
                hover:text-black
                uppercase
                hover:scale-105
              "
            >
              Registrarse
            </button>
          </SignUpButton>

        </SignedOut>

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10",
              },
            }}
          />
        </SignedIn>

      </div>
    </nav>
  );
}
