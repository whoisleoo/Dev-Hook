import React from 'react';
import NavBar from './components/Navbar';
import ChromaGrid from './components/ChromaGrid';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';

const items = [

  {

    image: "https://avatars.githubusercontent.com/u/173113236?v=4",

    title: "Leo",

    subtitle: "Front & Backend Developer, UI/UX Designer",

    handle: "@whoisleoo",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg,rgb(174, 1, 243), #000)",

    url: "https://github.com/whoisleoo"

  },

  {

    image: "https://avatars.githubusercontent.com/u/101844142?v=4",

    title: "Gab",

    subtitle: "Front & Backend Developer, Q&A",

    handle: "@niyjn",

    borderColor: "#10B981",

    gradient: "linear-gradient(180deg,rgb(174, 1, 243), #000)",

    url: "https://github.com/niyjn"

  }

];


function AboutUs() {
  return (
    // Camada 0
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/*Camada 1*/}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] sm:w-[40rem] sm:h-[40rem] z-10 rounded-full from-purple-900 to-transparent bg-gradient-to-b blur-3xl"
      />

      {/*Camada 2*/}
      <div className='relative z-20'>

        <NavBar className="bg-transparent" />

        <div className="container mx-auto text-center pt-12 md:pt-20 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">About <span className="shimmer-text" style={{}}>DevHook</span></h1>
        </div>

        <div className="px-4">
          <p className="text-center pt-5 text-sm sm:text-base md:text-lg">O DevHook é uma plataforma criada e pensada para conectar desenvolvedores a empresas de forma simples e prática</p>
          <p className="text-center text-sm sm:text-base md:text-lg"> burlando burocracias e focando no principal. Conheça mais da nossa história a baixo!</p>
        </div>

        {/*Time line*/}
        <div className='text-center px-4'>

        <ScrollStack>

<ScrollStackItem
  itemClassName="text-center bg-black border-2 border-white"
>
  <div className='flex flex-col items-center'> 
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4">
    Verão de 2025
    </h2>
  <p className="text-sm sm:text-base md:text-lg">
    O DevHook surgiu como uma ideia de protótipo a um trabalho de faculdade, que deveria ser realizado no figma
  </p>
  </div>
</ScrollStackItem>

<ScrollStackItem
  itemClassName="text-center bg-black border-2 border-white"
>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4">Maio de 2025</h2>
  <p className="text-sm sm:text-base md:text-lg">Com a prototipagem em mente, outro projeto de faculdade surgiu, necessitando da apresentação de um produto, então o DevHook deu outro passo em sua história, se tornando além de uma prototipagem, o sonho de um projeto funcional</p>
</ScrollStackItem>

<ScrollStackItem
  itemClassName="text-center bg-black border-2 border-white"
>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4">Setembro de 2025</h2>
  <p className="text-sm sm:text-base md:text-lg">A prototipagem ressurgiu, então o antigo projeto do DevHook foi modificado e melhorado.</p>
</ScrollStackItem>

<ScrollStackItem
  itemClassName="text-center bg-black border-2 border-white"
>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4">Outubro de 2025</h2>
  <p className="text-sm sm:text-base md:text-lg">Em outro projeto de faculdade, o mesmo protótipo foi usado como base para a criação de um site simples para uma aula HTML e CSS, que foi o primeiro passo real para a existência contreta do site.</p>
</ScrollStackItem>

<ScrollStackItem
  itemClassName="text-center bg-black border-2 border-white"
>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4">No Breve...</h2>
  <p className="text-sm sm:text-base md:text-lg">Ainda teremos muita história para contar, muito chão para andar, e muitas linhas de código para escrever, até agora, somos gratos pelo que já foi construido!</p>
</ScrollStackItem>

</ScrollStack>

        </div>

        <div className="container mx-auto pt-5 pb-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{fontFamily: "medium"}}>Converse Conosco!</h1>
        </div>

        <div className="h-[400px] sm:h-[500px] md:h-[600px] relative">
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

      </div>
    </div>
  );
}

export default AboutUs;