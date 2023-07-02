"use client";

import PadreRicoPadrePobre from "../content/01-padre-rico-padre-pobre.mdx";
import HabitosAtomicos from "../content/02-habitos-atomicos.mdx";
import SiLoCreasLoCreas from "../content/03-si-lo-creas-lo-creas.mdx";

import { H2 } from "../components-mdx/mdxComponents";
import { MDXProvider } from "@mdx-js/react";
import ButtonGroup from "./ButtonGroup";
import { useState } from "react";

const components = {
  h2: H2,
};

export default function LadoDerecho() {
  const componetElement = [
    <PadreRicoPadrePobre />,
    <HabitosAtomicos />,
    <SiLoCreasLoCreas />,
  ];

  const [indiceElement, setIndiceElement] = useState(0);

  const handleNavegacion = (incremento) => {
    const nuevoIndice = indiceElement + incremento;
    if (nuevoIndice >= 0 && nuevoIndice < componetElement.length) {
      setIndiceElement(nuevoIndice);
    }
  };

  return (
    <div className="h-screen w-full lg:overflow-y-auto p-6 px-24 xl:w-1/2 bg-white">
      <div className="py-10">
       <ButtonGroup
        handleNavegacion={handleNavegacion}
        indiceElement={indiceElement}
        setIndiceElement={setIndiceElement}
      />
      </div>
      <MDXProvider components={components}>
        {" "}
        {componetElement[indiceElement]}
      </MDXProvider>
     
    </div>
  );
}
