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
    <nav className="flex items-center justify-between px-8 py-4 bg-[#B59E7D] border-b border-[#584738] shadow-md font-serif">

      {/* Logo */}
      <h1 className="text-[#F1EADA] text-2xl font-bold tracking-wide">
        MiTienda
      </h1>

      {/* Menú */}
      <div className="flex items-center gap-4">

        {/* Links normales */}
        {[
          { href: "/", label: "Inicio" },
          { href: "/products", label: "Productos" },
          { href: "/dashboard", label: "Dashboard" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              text-[#F1EADA]
              px-4 py-2
              rounded-lg
              transition 
              transform
              duration-200
              hover:scale-110
              hover:shadow-md
              hover:bg-[#CEC1A8]
              hover:text-[#584738]
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
                text-[#F1EADA]
                px-4 py-2
                rounded-lg
                transition
                hover:bg-[#CEC1A8]
                hover:text-[#584738]
                hover:scale-105
              "
            >
              Iniciar sesión
            </button>
          </SignInButton>

          {/* REGISTER en modal */}
          <SignUpButton mode="modal">
            <button
              className="
                text-[#F1EADA]
                px-4 py-2
                rounded-lg
                transition
                hover:bg-[#CEC1A8]
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
