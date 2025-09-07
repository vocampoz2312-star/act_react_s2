import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";
import TarjetaTailwind from "./components/TarjetaTailwind";

export default function Page() {
  return (
    <main className="p-8 space-y-12 bg-gray-50 min-h-screen">
      {/* Tarjetas Globales */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Tarjetas con CSS Global</h1>
        <div className="flex flex-wrap gap-4">
          <TarjetaGlobal
            titulo="Tarjeta Global 1"
            contenido="Ejemplo con estilos definidos en globals.css"
            color="#04709e"
          />
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-4">Tarjetas con CSS Modules</h1>
        <div className="flex flex-wrap gap-4">
          <TarjetaModulo
            nombre="React Básico"
            descripcion="Aprende los fundamentos de React paso a paso."
            categoria="Frontend"
          />
          <TarjetaModulo
            nombre="Node.js Avanzado"
            descripcion="Profundiza en backend con Express y APIs REST."
            categoria="Backend"
          />
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-4">Tarjetas Dinámicas (Inline Styles)</h1>
        <div className="flex flex-wrap gap-4">
          <TarjetaDinamica
            titulo="Activa"
            contenido="Esta tarjeta está en estado activo."
            colorFondo="#04709e"
            colorTexto="#ffffff"
            ancho="280px"
            activo={true}
          />
          <TarjetaDinamica
            titulo="Inactiva"
            contenido="Esta tarjeta está en estado inactivo."
            colorFondo="#4caf50"
            colorTexto="#ffffff"
            ancho="280px"
            activo={false}
          />
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-4">Tarjetas con TailwindCSS</h1>
        <div className="flex flex-wrap gap-4">
          <TarjetaTailwind
            titulo="Curso de React"
            descripcion="Aprende a crear interfaces modernas con React y Tailwind."
            imagen="https://placehold.co/300x200"
            etiqueta="Frontend"
          />
          <TarjetaTailwind
            titulo="Curso de Node.js"
            descripcion="Construye APIs rápidas y escalables con Node.js."
            imagen="https://placehold.co/300x200"
            etiqueta="Backend"
          />
        </div>
      </section>
    </main>
  );
}
