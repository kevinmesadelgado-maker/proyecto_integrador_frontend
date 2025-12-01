// components/PinturaFlipCard.tsx

import React from 'react';
import Link from 'next/link';
import { fotografia } from '@/types/fotografia'; // La interfaz ya corregida

interface fotografiaFlipCardProps {
    item: fotografia;
}

export const FotografiaFlipCard: React.FC<fotografiaFlipCardProps> = ({ item }) => {
    return (
        <div className="card-flip w-[190px] h-[254px] overflow-visible">
            <div className="content-flip w-full h-full transform-style-3d transition-transform duration-300 shadow-xl rounded-[5px]">

                {/* ✅ LADO 1: FRONT-FLIP (IMAGEN) - Se ve primero */}
                <div className="front-flip absolute w-full h-full bg-[#151515] text-white">

                    <div className="img absolute w-full h-full">
                        {/* Círculos flotantes */}
                        <div className="circle w-[90px] h-[90px] rounded-full bg-[#ffbb66] absolute blur-[15px] animate-floating-blur"></div>
                        <div className="circle bottom-pos w-[150px] h-[150px] rounded-full bg-[#ff8866] absolute blur-[15px] animate-floating-blur"></div>
                        <div className="circle right-pos w-[30px] h-[30px] rounded-full bg-[#ff2233] absolute blur-[15px] animate-floating-blur"></div>

                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute w-full h-full object-cover object-center"
                        />
                    </div>

                    <div className="front-content absolute w-full h-full p-2 flex flex-col justify-between">
                        <small className="badge bg-[#00000055] px-2 py-1 rounded-[10px] backdrop-blur-[2px] w-fit">
                            fotografia
                        </small>
                        <div className="description shadow-lg w-full p-2 bg-[#00000099] backdrop-blur-[5px] rounded-[5px]">
                            <div className="title text-[11px] flex justify-between">
                                <p className="w-1/2">
                                    <strong>{item.title}</strong>
                                </p>
                            </div>
                            <p className="card-footer text-[#ffffff88] mt-1 text-[8px]">
                                Año: {item.creation}
                            </p>
                        </div>
                    </div>
                </div>

                {/* ✅ LADO 2: BACK-FLIP (INFORMACIÓN) - CORREGIDO CON SCROLL */}
                <div className="back-flip absolute w-full h-full bg-[#151515] flex justify-center items-center overflow-hidden">
                    {/* Contenedor principal del Back: usa flex-col y justify-between para colocar el botón abajo */}
                    <div className="absolute w-[99%] h-[99%] bg-[#151515] rounded-[5px] text-white flex flex-col justify-between items-center gap-2 p-4">

                        <strong className="text-xl text-center mt-2">{item.title}</strong>
                        
                        <div 
                            className="w-full text-sm text-center max-h-32 overflow-y-auto pr-1"
                            style={{ scrollbarWidth: 'thin' }} 
                        >
                            {/* 💡 Se elimina line-clamp-3 y se usa toda la descripción */}
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};