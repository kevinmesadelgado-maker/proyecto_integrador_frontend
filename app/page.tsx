import React from 'react'

export default function page() {
  return (
    <>
    
    <section className="relative h-screen w-full flex items-center justify-center">

      {/* Gradiente en la parte inferior */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80"></div>

      {/* Contenido */}
      <div className="relative text-center px-6 animate-fade-up">

        {/* Título principal */}
        <h1 className="text-white text-7xl md:text-8xl font-bold tracking-wide drop-shadow-2xl font-BebasNeue uppercase">
          house of artists
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-xl md:text-2xl text-gray-200 tracking-widest font-Bebasneue italic font-bold uppercase">
          donde la creatividad cobra vida
        </p>

        {/* Botón  */}
        <a
          href="/categories"
          className="
            inline-block mt-10 px-10 py-4 
            border border-white/40 
            text-white text-lg tracking-widest uppercase 
            rounded-xl backdrop-blur-md
            transition duration-300 
            hover:bg-white hover:text-black hover:shadow-2xl
            font-BebasNeue         "
        >
          Explorar categorias
        </a>
      </div>
    </section>
    </>
  )
}
