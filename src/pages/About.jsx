import { Link } from 'react-router-dom';
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import Parallax from 'parallax-js'
import { useEffect, useRef, useState } from "react";
import Counter from "@/components/ui/Counter";

function About() {
 const sceneRef = useRef(null);
 const statsRef = useRef(null);
 const [visitors, setVisitors] = useState(0);
 const [users, setUsers] = useState(0);
 const [companies, setCompanies] = useState(0);
 const [hasAnimated, setHasAnimated] = useState(false);


    useEffect(() => {
        if (sceneRef.current) {
            const parallaxInstance = new Parallax(sceneRef.current, {
                relativeInput: true,
                  invertX: false,
                  invertY: false,
                hoverOnly: false,
                frictionX: 0.05,
                frictionY: 0.05,
                scalarX: 9,
                scalarY: 2
            });

            return () => {
                parallaxInstance.destroy();
            };
        }
    }, []);


    // ALERTA AO PROFESSOR ESSA FUNÇÃO É PROPRIA DO REACT BITS E NÃO FUI EU QUEM FEZ
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);

                        const animateCounter = (setter, finalValue, duration = 2000) => {
                            const startTime = Date.now();
                            const interval = setInterval(() => {
                                const elapsed = Date.now() - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                const currentValue = Math.floor(progress * finalValue);
                                setter(currentValue);

                                if (progress >= 1) {
                                    clearInterval(interval);
                                }
                            }, 50);
                        };
                        animateCounter(setVisitors, 8456);
                        animateCounter(setUsers, 2348);
                        animateCounter(setCompanies, 2340);
                    }
                });
            },
            { threshold: 0.3 } 
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);


    return (
       <>
        <div className="min-h-screen bg-black text-white overflow-hidden pb-16 md:pb-24">

            <section className="flex flex-col justify-center items-center px-5 md:px-8 lg:px-12 xl:px-16 relative md:scale-90 py-8 md:py-0">
            <div className='relative text-center'>
                <img src='./LogoFull.png' className='w-180 h-60 md:h-90 mx-auto'/>

                <p className="text-gray-400 text-base md:text-2xl mx-auto relative bottom-10 md:bottom-25 font-bold px-4 md:px-0">
                          DevHook connects talented developers with companies
                            actively looking for their skills and expertise.
                    </p>
            </div>

                <Link to='/aboutus' onClick={() => window.scrollTo(0, 0)} className="hidden md:block">
                <div className='group w-215 h-140 rounded-3xl overflow-hidden relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl '>
                    <GradientBackground
                        gradientType="linear-gradient"
                        gradientOrigin="left-middle"
                        colors={[
                            { color: '#6d17b8', stop: '0%' },
                            { color: '#ae18d4', stop: '50%' },
                            { color: '#ff94c1', stop: '100%' }
                        ]}
                        noiseIntensity={0.5}
                        noisePatternSize={130}
                        noisePatternRefreshInterval={2}
                    />

                    <div style={{fontFamily: 'medium'}} className='absolute top-4 left-4 md:top-8 md:left-8 z-10'>
                        <h1 className='text-3xl md:text-6xl font-bold leading-tight'>More <br/> about us</h1>
                    </div>
                    <div className='absolute top-4 right-4 md:top-6 md:right-6 z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'>
                        <img src='./AboutArrow-2.png' className='w-16 h-16 md:w-30 md:h-30 object-contain'/>
                    </div>

                     <div id="scene" ref={sceneRef} className="w-full h-full absolute inset-0">

                              <div data-depth="1.3">
                            <div className="absolute inset-0 blur-2xl opacity-100" style={{
                                    background: 'radial-gradient(circle at center, #DA9EDB, transparent 80%)',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    height: '200px'
                                }}></div>
                            </div>

                            <div data-depth="0" className="absolute inset-0">
                            <img src="./mobilia.png" className="w-11/12 mx-auto object-contain absolute bottom-0 left-1/2" style={{transform: 'translateX(-50%)'}} alt="bg"/>
                            </div>

                             <div data-depth="0.1" className="absolute inset-0">
                            <img src="./buddies.png" className="w-11/12 mx-auto object-contain absolute bottom-0 left-1/2" style={{transform: 'translateX(-50%)'}} alt="buddies"/>
                            </div>

                            <div data-depth="0" className="absolute inset-0">
                            <img src="./parallax_mobilia.png" className="w-11/12 mx-auto object-contain absolute bottom-0 left-1/2" style={{transform: 'translateX(-50%)'}} alt="mobilia"/>
                            </div>
                        </div>
                </div>
                </Link>

            </section>

            {/* Versão Mobile - Imagens sobrepostas */}
            <section className="block md:hidden px-5 pb-0">
                <div className="relative w-full max-w-md mx-auto h-[400px]">
                    <img src="./balcony.svg" className="absolute w-full h-full object-contain" style={{bottom: '0'}} alt="balcão"/>
                    <img src="./python.png" className="absolute w-100 h-100 object-contain floating-1" style={{top: '60px', left: '20px'}} alt="logo python"/>
                    <img src="./yellow_dude.svg" className="absolute w-full h-full object-contain" style={{bottom: '0'}} alt="caboco amarelo"/>
                    <img src="./javascript.png" className="absolute w-100 h-100 object-contain floating-2" style={{top: '80px', right: '20px'}} alt="logo javascript"/>
                    <img src="./double_dudes.svg" className="absolute w-full h-full object-contain" style={{bottom: '0'}} alt="dois caboco"/>
                </div>
            </section>

            <section ref={statsRef} className="max-w-4xl mx-auto px-5 md:px-8 pt-0 md:py-16 pb-16 md:pb-24 text-left md:text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6" style={{fontFamily: 'medium'}}>
                    Learn More About Us
                </h2>
                <p className="text-gray-400 font-bold text-base md:text-lg leading-relaxed mb-8 max-w-4xl md:mx-auto">
                    DevHook was founded with a simple mission: to bridge the gap between talented developers
                    and innovative companies. We streamline the hiring process, making it easier
                    for developers to showcase their skills and find the perfect match.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-10 md:mt-12">
                    <div className="space-y-3 md:space-y-4 flex flex-col items-start md:items-center">
                        <Counter
                            value={visitors}
                            places={[1000, 100, 10, 1]}
                            fontSize={60}
                            padding={5}
                            gap={8}
                            textColor="#fff"
                            fontWeight={900}
                        />
                        <h3 className="text-lg md:text-xl font-bold text-white" style={{fontFamily: 'black'}}>Total Visitors</h3>

                    </div>
                    <div className="space-y-3 md:space-y-4 flex flex-col items-start md:items-center">
                        <Counter
                            value={users}
                            places={[1000, 100, 10, 1]}
                            fontSize={60}
                            padding={5}
                            gap={8}
                            textColor="#fff"
                            fontWeight={900}
                        />
                        <h3 className="text-lg md:text-xl font-bold text-white" style={{fontFamily: 'black'}}>Active Users</h3>

                    </div>
                    <div className="space-y-3 md:space-y-4 flex flex-col items-start md:items-center">
                        <Counter
                            value={companies}
                            places={[1000, 100, 10, 1]}
                            fontSize={60}
                            padding={5}
                            gap={8}
                            textColor="#fff"
                            fontWeight={900}
                        />
                        <h3 className="text-lg md:text-xl font-bold text-white" style={{fontFamily: 'black'}}>Partner Companies</h3>

                    </div>
                </div>
            </section>

        </div>
       </>
    );
}

export default About;