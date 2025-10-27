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
        <div className="min-h-screen bg-black text-white overflow-hidden pb-50">

            <section className="hidden md:flex flex-col justify-center items-center px-8 sm:hidden lg:px-12 xl:px-16 relative scale-90">
            <div className='relative text-center '>
                <img src='./LogoFull.png' className='w-180 h-90'/>

                <p className="text-gray-400 text-2xl mx-auto relative bottom-25 font-bold">
                          DevHook connects talented developers with companies<br />
                            actively looking for their skills and expertise.
                    </p>
            </div>

                <Link to='/aboutus' onClick={() => window.scrollTo(0, 0)}>
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

                    <div style={{fontFamily: 'medium'}} className='absolute top-8 left-8 z-10'>
                        <h1 className='text-6xl font-bold leading-tight'>More <br/> about us</h1>
                    </div>
                    <div className='absolute top-6 right-6 z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'>
                        <img src='./AboutArrow-2.png' className='w-30 h-30 object-contain'/>
                    </div>

                     <div id="scene" ref={sceneRef} className="w-full h-full">

                              <div data-depth="1.3">
                            <div className="absolute inset-0 blur-2xl opacity-100" style={{
                                    background: 'radial-gradient(circle at center, #DA9EDB, transparent 80%)',
                                    top: '250px',
                                    height: '200px'
                                }}></div>
                            </div>

                            <div data-depth="0">
                            <img src="./mobilia.png" className="w-11/12 mx-auto object-contain" style={{position: 'relative', top: '130px'}} alt="bg"/>
                            </div>

                             <div data-depth="0.1">
                            <img src="./buddies.png" className="w-11/12 mx-auto object-contain " style={{position: 'relative', top: '130px'}} alt="buddies"/>
                            </div>

                            <div data-depth="0">
                            <img src="./parallax_mobilia.png" className="w-11/12 mx-auto object-contain" style={{position: 'relative', top: '130px'}} alt="mobilia"/>
                            </div>
                        </div>
                </div>
                </Link>

            </section>

            <section ref={statsRef} className="max-w-4xl mx-auto px-8 py-16 text-center">
                <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'medium'}}>
                    Learn More About Us
                </h2>
                <p className="text-gray-400 font-bold leading-relaxed mb-8 max-w-4xl mx-auto">
                    DevHook was founded with a simple mission: to bridge the gap between talented developers
                    and innovative companies. We streamline the hiring process, making it easier
                    for developers to showcase their skills and find the perfect match.
                </p>
                <div className="grid md:grid-cols-3 gap-12 mt-12">
                    <div className="space-y-4 flex flex-col items-center">
                        <Counter 
                            value={visitors}
                            places={[1000, 100, 10, 1]}
                            fontSize={60}
                            padding={5}
                            gap={8}
                            textColor="#fff"
                            fontWeight={900}
                        />
                        <h3 className="text-xl font-bold text-white" style={{fontFamily: 'black'}}>Total Visitors</h3>
                       
                    </div>
                    <div className="space-y-4 flex flex-col items-center">
                        <Counter
                            value={users}
                            places={[1000, 100, 10, 1]}
                            fontSize={60}
                            padding={5}
                            gap={8}
                            textColor="#fff"
                            fontWeight={900}
                        />
                        <h3 className="text-xl font-bold text-white" style={{fontFamily: 'black'}}>Active Users</h3>
                       
                    </div>
                    <div className="space-y-4 flex flex-col items-center">
                        <Counter
                            value={companies}
                            places={[1000, 100, 10, 1]}
                            fontSize={60}
                            padding={5}
                            gap={8}
                            textColor="#fff"
                            fontWeight={900}
                        />
                        <h3 className="text-xl font-bold text-white" style={{fontFamily: 'black'}}>Partner Companies</h3>
                        
                    </div>
                </div>
            </section>

        </div>
       </>
    );
}

export default About;