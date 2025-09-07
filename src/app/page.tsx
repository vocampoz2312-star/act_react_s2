import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";

export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      {/* Tarjetas Globales */}
      <TarjetaGlobal
        titulo="Mi primera tarjeta"
        contenido="Este es el contenido de la tarjeta global."
        color="#04709e"
      />

      <TarjetaModulo
        nombre="Curso React"
        descripcion="Aprende React desde cero"
        categoria="Frontend"
        variante="tarjetaPrimaria"
      />
      <TarjetaModulo
        nombre="Curso Node.js"
        descripcion="Construye APIs con Node.js y Express"
        categoria="Backend"
        variante="tarjetaSecundaria"
      />
      <TarjetaModulo
        nombre="Curso DevOps"
        descripcion="Automatización y despliegues en la nube"
        categoria="Infraestructura"
        variante="tarjetaExito"
      />

      <TarjetaDinamica
        titulo="Tarjeta Azul"
        contenido="Esta tarjeta tiene fondo azul, texto blanco y 300px de ancho."
        colorFondo="#04709e"
        colorTexto="#ffffff"
        ancho="300px"
      />

      <TarjetaDinamica
        titulo="Tarjeta Verde"
        contenido="Fondo verde claro, texto oscuro y ancho al 60%."
        colorFondo="#c8e6c9"
        colorTexto="#222222"
        ancho="60%"
      />

      <TarjetaDinamica
        titulo="Tarjeta Amarilla"
        contenido="Fondo amarillo, texto negro y ancho completo."
        colorFondo="#fff176"
        colorTexto="#000000"
        ancho="100%"
      />
    </main>
  );
}
