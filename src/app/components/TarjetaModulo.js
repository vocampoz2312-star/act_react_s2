"use client";

import React from "react";
import styles from "./TarjetaModulo.module.css";

export default function TarjetaModulo({ nombre, descripcion, categoria }) {
  return (
    <div className={styles.tarjeta}>
      <div className={styles.encabezado}>
        <h2 className={styles.titulo}>{nombre}</h2>
        <span className={styles.categoria}>{categoria}</span>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
}
