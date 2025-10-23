import NavBar from "./components/Navbar";
import Parallax from 'parallax-js'
import { useEffect, useRef } from "react";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";

function Home(){


    const sceneRef = useRef(null);

    
    useEffect(() => {
        if (sceneRef.current) {
            const parallaxInstance = new Parallax(sceneRef.current, {
                relativeInput: true,
                hoverOnly: false,
                frictionX: 0.05,
                frictionY: 0.05,
                scalarX: 3,
                scalarY: 1.5
            });

            return () => {
                parallaxInstance.destroy();
            };
        }
    }, []);


    return(
        <>
        <NavBar/>
        <div className="min-h-screen text-white px-7 py-20 relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                <section className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{fontFamily: 'black'}}>
                        Find the <span className="shimmer-text" style={{
                        }} >perfect</span><br/>
                        companies for <br/>
                        you.
                    </h1>

                    <p className="text-gray-400 text-lg max-w-md mb-25">
                        // Level up your career by connecting with top tech companies looking for your skills.
                    </p>

                    <button className="group px-20 py-4 rounded-2xl text-white font-bold text-lg transition-allduration-300 mt-8 relative overflow-hidden hover:scale-105" >
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
    <span className="relative z-10">Get Started</span>
</button>
                </section>

                <section className="relative">
                    <div className="w-full h-[500px] relative">
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            maskImage: 'url(./retangulo-hero.png)',
                            maskSize: '100% 100%',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: 'url(./retangulo-hero.png)',
                            WebkitMaskSize: '100% 100%',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center'
                        }}>
                            <GradientBackground
                                gradientOrigin="top-left"
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
                        <div id="scene" ref={sceneRef} className="w-full h-full">
                            <div data-depth="0.1">
                            <img src="./green_dude.svg" className="w-full h-full object-contain floating-3" style={{position: 'relative', top: '150px'}} alt="boneco verde"/>
                            </div>

                             <div data-depth="0.1">
                            <img src="./java.png" className="w-full h-full object-contain floating" style={{position: 'relative', top: '180px'}} alt="logo java"/>
                            </div>

                            <div>
                            <img src="./balcony.svg" className="w-full h-full object-contain" style={{position: 'relative', top: '150px'}} alt="balcão"/>
                            </div>

                              <div data-depth="0.1">
                            <img src="./python.png" className="w-full h-full object-contain floating-1" style={{position: 'relative', top: '100px', left: '30px'}} alt="logo python" />
                            </div>

                            <div data-depth="0.25">
                            <img src="./yellow_dude.svg" className="w-full h-full object-contain" style={{position: 'relative', top: '150px'}} alt="caboco amarelo" />
                            </div>

                              <div data-depth="0.1">
                            <img src="./javascript.png" className="w-full h-full object-contain floating-2" alt="logo javscript" style={{position: 'relative', top: '150px', right: '30px'} }/>
                            </div>
                            
                            <div data-depth="0.50">
                            <img src="./double_dudes.svg" className="w-full h-full object-contain" style={{position: 'relative', top: '150px'}} alt="dois caboco" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div> 
        </>
    )
}

export default Home;