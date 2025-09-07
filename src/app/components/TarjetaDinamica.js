"use client";

import React from "react";

export default function TarjetaDinamica({ titulo, contenido, colorFondo, colorTexto, ancho }) {
  // Estilos dinámicos en objeto style
  const estiloTarjeta = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: "16px",
    margin: "12px auto",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    textAlign: "center",
  };

  const estiloTitulo = {
    marginBottom: "8px",
    fontSize: "1.4rem",
    fontWeight: "bold",
  };

  const estiloContenido = {
    fontSize: "1rem",
    lineHeight: "1.5",
  };

  return (
    <div style={estiloTarjeta}>
      <h2 style={estiloTitulo}>{titulo}</h2>
      <p style={estiloContenido}>{contenido}</p>
    </div>
  );
}
