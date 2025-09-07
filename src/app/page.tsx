import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";

export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      {/* Tarjetas Globales */}
      <TarjetaGlobal
        titulo="Mi primera tarjeta"
        contenido="Este es el contenido de la tarjeta global."
        color="#04709e"
      />
      <TarjetaGlobal
        titulo="Otra tarjeta"
        contenido="Contenido diferente, pero mismo estilo."
        color="#04547e"
      />

      {/* Tarjetas con Módulos */}
      <TarjetaModulo
        nombre="Tarjeta 2"
        descripcion="Se crea una segunda tarjeta"
        categoria="Frontend"
      />
      <TarjetaModulo
        nombre="Tarjeta 3"
        descripcion="Se crea una tercera tarjeta"
        categoria="Backend"
      />
    </main>
  );
}
