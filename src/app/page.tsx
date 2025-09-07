import TarjetaGlobal from "./components/TarjetaGlobal";

export default function Page() {
  return (
    <main>
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
    </main>
  );
}

