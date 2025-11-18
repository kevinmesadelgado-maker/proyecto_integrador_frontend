import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#B59E7D] border-b border-[#584738] shadow-md font-serif">
      
      {/* Logo */}
      <h1 className="text-[#F1EADA] text-2xl font-bold tracking-wide">
        MiTienda
      </h1>

      {/* Botones del menú */}
      <div className="flex gap-4">
        {[
          { href: "/", label: "Inicio" },
          { href: "/products", label: "Productos" },
          { href: "/dashboard", label: "Dashboard" },
          { href: "/login", label: "Login" },
          { href: "/register", label: "Register" },
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
      </div>
    </nav>
  );
}
