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
    </main>
  );
}
