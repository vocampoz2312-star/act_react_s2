"use client";
import React from "react";

export default function TarjetaDinamica({
  titulo,
  contenido,
  colorFondo,
  colorTexto,
  ancho,
  activo = false,
}) {
  const estiloTarjeta = {
    backgroundColor: activo ? colorFondo : "#f0f0f0",
    color: activo ? colorTexto : "#555",
    width: ancho,
    padding: "16px",
    margin: "12px auto",
    borderRadius: "12px",
    border: activo ? "2px solid #222" : "1px solid #ccc",
    boxShadow: activo
      ? "0 6px 16px rgba(0, 0, 0, 0.25)"
      : "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    textAlign: "center",
    transform: activo ? "scale(1.02)" : "scale(1)",
  };

  return (
    <div style={estiloTarjeta}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}
