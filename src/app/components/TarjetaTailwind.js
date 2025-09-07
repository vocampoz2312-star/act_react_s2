"use client";
import React from "react";

export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col p-4 m-2 w-64 bg-white text-gray-800 border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
      {/* Imagen */}
      {imagen && (
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}

      {/* Contenido */}
      <h2 className="text-lg font-bold mb-2">{titulo}</h2>
      <p className="text-sm text-gray-600 flex-grow">{descripcion}</p>

      {/* Etiqueta */}
      {etiqueta && (
        <span className="mt-3 inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {etiqueta}
        </span>
      )}
    </div>
  );
}
