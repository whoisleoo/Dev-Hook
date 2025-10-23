import { Link } from 'react-router-dom';
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import Parallax from 'parallax-js'
import { useEffect, useRef } from "react";

function Login() {

      const sceneRef = useRef(null);
    
        
        useEffect(() => {
            if (sceneRef.current) {
                const parallaxInstance = new Parallax(sceneRef.current, {
                    relativeInput: true,
                    hoverOnly: false,
                    frictionX: 0.05,
                    frictionY: 0.05,
                    scalarX: 3,
                    scalarY: 0.3,
              
                });
    
                return () => {
                    parallaxInstance.destroy();
                };
            }
        }, []);
    


    return (
       <>
        <div className="min-h-screen bg-black text-white grid md:grid-cols-2">
             <section className="bg-gray-100 flex items-center justify-center lg:rounded-l-4xl px-6 md:px-8 lg:px-12 xl:pl-16 pt-20 md:pt-24 relative order-2 md:order-1">
                <Link to={'/#'} className='hidden md:flex absolute top-4 left-4 z-50'>
                    <img src="./icon-dark.svg" className="w-25 h-25"/>
                </Link>
                <div className="w-full max-w-lg md:mt-8">
                    <Link to={'/#'} className='flex md:hidden mb-8 justify-center'>
                        <img src="./icon-dark.svg" className="w-20 h-20"/>
                    </Link>
                    <h1 className="text-3xl font-bold text-black mb-8 text-left" style={{fontFamily: 'black'}}>
                        Welcome back
                    </h1>
                    <div className="mb-20 flex gap-3">
                        <button className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                                <img src='./google.svg' className='w-5 h-5'></img>
                            <span className="text-gray-700 font-medium text-sm">Log in with Google</span>
                        </button>

                        <button className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                                 <img src='./github.svg' className='w-5 h-5'></img>
                            <span className="text-gray-700 font-medium text-sm">Log in with GitHub</span>
                        </button>
                    </div>

                    <div className="text-center text-gray-400 text-sm mb-6 font-mono">
                        -OR-
                    </div>

                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-purple-500 focus:outline-none transition placeholder-gray-400 text-gray-700"
                        />

                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-purple-500 focus:outline-none transition placeholder-gray-400 text-gray-700"
                            />
                           
                        </div>
                    </div>

                                   <button className="group w-full mt-20 py-4 rounded-2xl text-white font-bold text-lg transition-allduration-300 relative overflow-hidden hover:scale-105" >
                       <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90">
                           <GradientBackground
                               gradientType="linear-gradient"
                               gradientOrigin="left-middle"
                               colors={[
                                  { color: 'rgba(138, 43, 226, 1)', stop: '0%' }, 
                                                       { color: 'rgba(218, 62, 200, 1)', stop: '30%' },  
                                                       { color: 'rgba(255, 20, 147, 1)', stop: '50%' },  
                                                       { color: 'rgba(255, 95, 31, 1)', stop: '70%' }, 
                                                       { color: 'rgba(255, 140, 0, 1)', stop: '100%' } 
                               ]}
                               noiseIntensity={0.5}
                               noisePatternSize={130}
                               noisePatternRefreshInterval={2}
                           />
                       </div>
                   
                       <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                   
                       </div>
                       <span className="relative z-10">Log In</span>
                   </button>

                    <p className="text-center text-gray-500 text-sm mt-6">
                        Dont have an account?{' '}
                        <Link to={'/signup'}>
                        <span className="text-purple-600 hover:underline font-medium">Create one</span>
                        </Link>
                    </p>
                </div>
            </section>








            <section className="hidden md:flex relative overflow-hidden order-1 md:order-2">
                     <div id="scene" ref={sceneRef} className="w-full h-full">

                            <div data-depth="1.3">
                            <div className="absolute inset-0 blur-3xl opacity-30" style={{
                                    background: 'radial-gradient(circle at center, #DA9EDB, transparent 70%)',
                                    top: '350px',
                                    height: '200px'
                                }}></div>
                            </div>

                            <div data-depth="1.3">
                                 
                        
                            <img src="./boat.png" className="w-full block wave-animate-1" style={{position: 'relative', top: '300px', display: 'block', filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))'}} alt="barco"/>
                            </div>


                            <div data-depth="0" className="relative">
                                
                                <img src="./wave_surface.png" className="w-full block wave-animate-1 relative z-10" style={{position: 'relative', top: '300px', display: 'block', filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))'}} alt="onda"/>
                            </div>


                            <div data-depth="1.3">
                            <img src="./boat_hook.png" className="w-full block wave-animate-1" style={{position: 'relative', top: '300px', display: 'block', filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))'}} alt="gancho"/>
                            </div>


                            <div data-depth="0">
                            <img src="./java_wave.png" className="w-full block wave-animate-2 lg:block sm:hidden" style={{position: 'relative', top: '310px', filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))'}} alt="java"/>
                            </div>

                            <div data-depth="0">
                            <img src="./wave_shallow.png" className="w-full block wave-animate-2" style={{position: 'relative', top: '390px', display: 'block', filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))'}} alt="onda"/>
                            </div>

                            <div data-depth="0">
                            <img src="./cpp_wave.png" className="w-full wave-animate-3 lg:block sm:hidden" style={{position: 'relative', top: '360px', filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))'}} alt="c++"/>
                            </div>


                            <div data-depth="0">
                            <img src="./javascript_wave.png" className="w-full block wave-animate-3 lg:block sm:hidden" style={{position: 'relative', top: '310px', left: '-200px', filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))'}} alt="javascript"/>
                            </div>


                            <div data-depth="0">
                            <img src="./wave_semideep.png" className="w-full block wave-animate-3" style={{position: 'relative', top: '500px', display: 'block', filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))'}} alt="onda"/>
                            </div>

                            <div data-depth="0">
                            <img src="./blackhat_wave.png" className="w-full block wave-animate-4 lg:block sm:hidden" style={{position: 'relative', top: '330px', filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))'}} alt="chapeu"/>
                            </div>

                            <div data-depth="0">
                            <img src="./wave_deep.png" className="w-full block wave-animate-4" style={{position: 'relative', top: '590px', display: 'block', filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))'}} alt="onda"/>
                            </div>


                        </div>
            </section>


             


        </div>
       </>
    );
}

export default Login;