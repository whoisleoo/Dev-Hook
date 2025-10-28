import React from 'react';
import NavBar from './components/Navbar';
import ChromaGrid from './components/ChromaGrid';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import Footer from './Footer';

const items = [

  {

    image: "https://avatars.githubusercontent.com/u/173113236?v=4",

    title: "Leo",

    subtitle: "Front and Backend Developer UX/UI Designer",

    handle: "@whoisleoo",

    borderColor: "#3B82F6",

    gradient: "linear-gradient(145deg,rgb(174, 1, 243), #000)",

    url: "https://github.com/whoisleoo"

  },

  {

    image: "https://avatars.githubusercontent.com/u/101844142?v=4",

    title: "Gab",

    subtitle: "Front and Backend Developer, Q&A",

    handle: "@niyjn",

    borderColor: "#10B981",

    gradient: "linear-gradient(180deg,rgb(174, 1, 243), #000)",

    url: "https://github.com/niyjn"

  }

];


function AboutUs() {
  return (
    // Camada 0
    <div className="relative min-h-screen bg-black text-white">

      {/*Camada 1*/}


      {/*Camada 2*/}
      <div className='relative'>

        <NavBar className="bg-transparent" />

        <div className="container mx-auto text-center pt-12 md:pt-20 px-5">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl" style={{fontFamily: 'black'}}>About <span className="shimmer-text-2" data-text="DevHook" style={{}}>DevHook</span></h1>
        </div>

        <div className="px-5 max-w-4xl mx-auto">
          <p className="text-center pt-6 md:pt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
            <span className="font-semibold">Conectamos desenvolvedores a empresas</span> <br></br> de forma simples e direta!
          </p>


        </div>

        <div className='text-center px-0 md:px-4'>

        <ScrollStack
          useWindowScroll={true}
          itemDistance={150}
          itemStackDistance={25}
          stackPosition="20%"
          scaleEndPosition="10%"
        >

<ScrollStackItem
  itemClassName="text-center bg-black border-0 md:border-2 md:border-white flex flex-col px-4 md:px-0"
>
   <div className="w-full h-[180px] md:h-[200px] relative mb-4 md:mb-5 rounded-lg overflow-hidden">
                          <div style={{
                              position: 'absolute',
                              inset: 0,
                              width: '100%',
                              height: '100%',
                              maskImage: 'url(./teste.png)',
                              maskSize: '100% 100%',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskImage: 'url(./teste.png)',
                              WebkitMaskSize: '100% 100%',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center'
                          }}>
                              <GradientBackground
                                  gradientOrigin="top-left"
                                  colors={[
                                      { color: 'rgba(255, 215, 0, 1)', stop: '0%' },
                                      { color: 'rgba(255, 165, 0, 1)', stop: '25%' },
                                      { color: 'rgba(255, 140, 0, 1)', stop: '50%' },
                                      { color: 'rgba(255, 69, 0, 1)', stop: '75%' },
                                      { color: 'rgba(255, 20, 60, 1)', stop: '100%' }
                                  ]}
                                  noiseIntensity={0.5}
                                  noisePatternSize={130}
                                  noisePatternRefreshInterval={2}
                              />
                          </div>
  </div>
  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-3 md:mb-4" style={{fontFamily: 'medium'}}>
    Verão de 2025
  </h2>
  <p className="text-base sm:text-base md:text-2xl font-bold leading-relaxed">
    O DevHook surgiu como uma ideia de protótipo a um trabalho de faculdade, que deveria ser realizado no figma
  </p>
</ScrollStackItem>

<ScrollStackItem
  itemClassName="text-center bg-black border-0 md:border-2 md:border-white flex flex-col px-4 md:px-0"
>
   <div className="w-full h-[180px] md:h-[200px] relative mb-4 md:mb-5 rounded-lg overflow-hidden">
                          <div style={{
                              position: 'absolute',
                              inset: 0,
                              width: '100%',
                              height: '100%',
                              maskImage: 'url(./teste.png)',
                              maskSize: '100% 100%',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskImage: 'url(./teste.png)',
                              WebkitMaskSize: '100% 100%',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center'
                          }}>
                              <GradientBackground
                                  gradientOrigin="top-left"
                                  colors={[
                                      { color: 'rgba(218, 165, 32, 1)', stop: '0%' },
                                      { color: 'rgba(205, 133, 63, 1)', stop: '25%' },
                                      { color: 'rgba(210, 105, 30, 1)', stop: '50%' },
                                      { color: 'rgba(188, 74, 60, 1)', stop: '75%' },
                                      { color: 'rgba(139, 69, 19, 1)', stop: '100%' }
                                  ]}
                                  noiseIntensity={0.5}
                                  noisePatternSize={130}
                                  noisePatternRefreshInterval={2}
                              />
                          </div>
  </div>
  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-3 md:mb-4" style={{fontFamily: 'medium'}}>Maio de 2025</h2>
  <p className="text-base sm:text-base md:text-2xl font-bold leading-relaxed">Com a prototipagem em mente, outro projeto de faculdade surgiu, necessitando da apresentação de um produto, então o DevHook deu outro passo em sua história, se tornando além de uma prototipagem, o sonho de um projeto funcional</p>
</ScrollStackItem>

<ScrollStackItem
  itemClassName="text-center bg-black border-0 md:border-2 md:border-white flex flex-col px-4 md:px-0"
>
   <div className="w-full h-[180px] md:h-[200px] relative mb-4 md:mb-5 rounded-lg overflow-hidden">
                          <div style={{
                              position: 'absolute',
                              inset: 0,
                              width: '100%',
                              height: '100%',
                              maskImage: 'url(./teste.png)',
                              maskSize: '100% 100%',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskImage: 'url(./teste.png)',
                              WebkitMaskSize: '100% 100%',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center'
                          }}>
                              <GradientBackground
                                  gradientOrigin="top-left"
                                  colors={[
                                      { color: 'rgba(152, 251, 152, 1)', stop: '0%' },
                                      { color: 'rgba(144, 238, 144, 1)', stop: '25%' },
                                      { color: 'rgba(255, 182, 193, 1)', stop: '50%' },
                                      { color: 'rgba(221, 160, 221, 1)', stop: '75%' },
                                      { color: 'rgba(186, 85, 211, 1)', stop: '100%' }
                                  ]}
                                  noiseIntensity={0.5}
                                  noisePatternSize={130}
                                  noisePatternRefreshInterval={2}
                              />
                          </div>
  </div>
  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-3 md:mb-4" style={{fontFamily: 'medium'}}>Setembro de 2025</h2>
  <p className="text-base sm:text-base md:text-2xl font-bold leading-relaxed">A prototipagem ressurgiu, então o antigo projeto do DevHook foi modificado e melhorado.</p>
</ScrollStackItem>

<ScrollStackItem
  itemClassName="text-center bg-black border-0 md:border-2 md:border-white flex flex-col px-4 md:px-0"
>
   <div className="w-full h-[180px] md:h-[200px] relative mb-4 md:mb-5 rounded-lg overflow-hidden">
                          <div style={{
                              position: 'absolute',
                              inset: 0,
                              width: '100%',
                              height: '100%',
                              maskImage: 'url(./teste.png)',
                              maskSize: '100% 100%',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskImage: 'url(./teste.png)',
                              WebkitMaskSize: '100% 100%',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center'
                          }}>
                              <GradientBackground
                                  gradientOrigin="top-left"
                                  colors={[
                                      { color: 'rgba(135, 206, 250, 1)', stop: '0%' },
                                      { color: 'rgba(100, 149, 237, 1)', stop: '25%' },
                                      { color: 'rgba(65, 105, 225, 1)', stop: '50%' },
                                      { color: 'rgba(72, 61, 139, 1)', stop: '75%' },
                                      { color: 'rgba(75, 0, 130, 1)', stop: '100%' }
                                  ]}
                                  noiseIntensity={0.5}
                                  noisePatternSize={130}
                                  noisePatternRefreshInterval={2}
                              />
                          </div>
  </div>
  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-3 md:mb-4" style={{fontFamily: 'medium'}}>Outubro de 2025</h2>
  <p className="text-sm sm:text-base md:text-2xl font-bold ">Em outro projeto de faculdade, o mesmo protótipo foi usado como base para a criação de um site simples para uma aula HTML e CSS, que foi o primeiro passo real para a existência contreta do site.</p>
</ScrollStackItem>

<ScrollStackItem
  itemClassName="text-center bg-black border-0 md:border-2 md:border-white flex flex-col px-4 md:px-0"
>
   <div className="w-full h-[180px] md:h-[200px] relative mb-4 md:mb-5 rounded-lg overflow-hidden">
                          <div style={{
                              position: 'absolute',
                              inset: 0,
                              width: '100%',
                              height: '100%',
                              maskImage: 'url(./teste.png)',
                              maskSize: '100% 100%',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskImage: 'url(./teste.png)',
                              WebkitMaskSize: '100% 100%',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center'
                          }}>
                              <GradientBackground
                                  gradientOrigin="top-left"
                                  colors={[
                                      { color: 'rgba(138, 43, 226, 1)', stop: '0%' },
                                      { color: 'rgba(147, 51, 234, 1)', stop: '25%' },
                                      { color: 'rgba(236, 72, 153, 1)', stop: '50%' },
                                      { color: 'rgba(59, 130, 246, 1)', stop: '75%' },
                                      { color: 'rgba(6, 182, 212, 1)', stop: '100%' }
                                  ]}
                                  noiseIntensity={0.5}
                                  noisePatternSize={130}
                                  noisePatternRefreshInterval={2}
                              />
                          </div>
  </div>
  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-3 md:mb-4" style={{fontFamily: 'medium'}}>Em resumo...</h2>
  <p className="text-base sm:text-base md:text-2xl font-bold leading-relaxed">Ainda teremos muita história para contar, muito chão para andar, e muitas linhas de código para escrever, até agora, somos gratos pelo que já foi construido!</p>
</ScrollStackItem>

</ScrollStack>

        </div>

        <div className="container mx-auto pt-5 pb-10 text-center px-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{fontFamily: "medium"}}>Converse <span className='text-black bg-white px-2 py-1 md:p-2'>Conosco!</span></h1>
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
      <Footer />
    </div>
  );
}

export default AboutUs;