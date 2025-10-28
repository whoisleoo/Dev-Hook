import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import FuzzyText from '@/components/ui/FuzzyText';

function Error() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
    
    

    

    
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center text-center max-w-9xl mx-auto">
          {/* Número 404 grande */}
          <div className="mb-4 flex justify-center items-center w-full">
            <FuzzyText
              baseIntensity={0.2}
              hoverIntensity={0.5}
              enableHover={true}
              className="text-9xl md:text-[200px] font-bold text-purple-500 leading-none text-center"
            >
              404
            </FuzzyText>
          </div>


       


          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-md mx-auto">
           Oops! Lamentamos por isso, parece que essa página não existe!
          </p>

         
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-white text-black  font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Voltar para Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 border-2 hover:bg-white hover:text-black text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Página Anterior
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Error;