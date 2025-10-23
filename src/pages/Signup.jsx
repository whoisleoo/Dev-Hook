import { Link } from 'react-router-dom';
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";

function SignUp() {
    return (
       <>
        <div className="min-h-screen bg-black text-white grid md:grid-cols-2 relative">
            <Link to={'/#'} className='hidden md:flex absolute top-4 left-4 z-50'>
               <img src="./icon.svg" className="w-25 h-25"/>
            </Link>
            <section className="hidden md:flex flex-col justify-center items-center px-8 lg:px-12 xl:px-16">

                <div className="max-w-2xl w-full">
                    <div className="mb-8 lg:mb-12">
                        <p className="text-gray-400 text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-mono leading-relaxed">
                            // We connect developers with<br />
                            the right companies.
                        </p>
                    </div>

                    <div className="font-mono text-base lg:text-xl xl:text-2xl 2xl:text-3xl" style={{fontFamily: 'nerd'}}>
                    <div>
                        <span className="text-indigo-500">function</span>{' '}
                        <span className="text-white">devLookingForWork</span>
                        <span className="text-orange-300">(</span>
                        <span className="text-yellow-300">dev</span>
                        <span className="text-orange-300">)</span>
                        <span className="text-orange-300">{'{'}</span>
                    </div>
                    
                        <div className="ml-6 lg:ml-8 xl:ml-10">
                            <span className="text-purple-500">if</span>{' '}
                             <span className="text-purple-500">(</span>
                            <span className="text-white">dev.isSearching</span>
                              <span className="text-purple-500">)</span>
                                        <span className="text-purple-500">{' {'}</span>
                        </div>

                        <div className="ml-12 lg:ml-16 xl:ml-20">
                            <span className="text-purple-500">return</span>{' '}
                            <span className="text-white">join</span>
                            <span className="text-indigo-500">(</span>
                            <span className="shimmer-text-2" data-text='"DevHook"'>"DevHook"</span>
                            <span className="text-indigo-500">)</span>
                            <span className="text-white">;</span>
                        </div>

                        <div className="ml-6 lg:ml-8 xl:ml-10">
                            <span className="text-purple-500">{'}'}</span>
                        </div>

                        <div>
                            <span className="text-orange-500">{'}'}</span>
                        </div>

                        <div className="mt-6 lg:mt-8 xl:mt-10">
                            <span className="text-purple-500">const</span>{' '}
                            <span className="text-white">you</span>{' '}
                            <span className="text-purple-500">= </span>
                            <span className="text-orange-300">{'{'}</span>
                        </div>

                        <div className="ml-6 lg:ml-8 xl:ml-10">
                            <span className="text-white">name: </span>
                            <span className="text-orange-300">"You"</span>
                            <span className="text-white">,</span>
                        </div>

                        <div className="ml-6 lg:ml-8 xl:ml-10">
                            <span className="text-white">isSearching: </span>
                            <span className="text-purple-500">true</span>
                        </div>

                        <div>
                            <span className="text-orange-300">{'}'};</span>
                        </div>

                        <div className="mt-6 lg:mt-8 xl:mt-10">
                            <span className="text-white">devLookingForWork</span>
                            <span className="text-orange-300">(</span>
                            <span className="text-yellow-300">you</span>
                            <span className="text-orange-300">);</span>
                        </div>
                    </div>
                </div>
            </section>


              <section className="bg-gray-100 flex items-center justify-center lg:rounded-l-4xl px-6 md:px-8 lg:px-12 xl:pl-16">
                <div className="w-full max-w-lg">
                    <h1 className="text-3xl font-bold text-black mb-8 text-left" style={{fontFamily: 'black'}}>
                        Create Account
                    </h1>
                    <div className="mb-6 flex gap-3">
                        <button className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                                <img src='./google.svg' className='w-5 h-5'></img>
                            <span className="text-gray-700 font-medium text-sm">Sign in with Google</span>
                        </button>

                        <button className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                                 <img src='./github.svg' className='w-5 h-5'></img>
                            <span className="text-gray-700 font-medium text-sm">Sign in with GitHub</span>
                        </button>
                    </div>

                    <div className="text-center text-gray-400 text-sm mb-6 font-mono">
                        -OR-
                    </div>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-purple-500 focus:outline-none transition placeholder-gray-400 text-gray-700"
                        />

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
                       <span className="relative z-10">Create account</span>
                   </button>

                    <p className="text-center text-gray-500 text-sm mt-6">
                        Allready have an account?{' '}
                        <a href="#" className="text-purple-600 hover:underline font-medium">Log In</a>
                    </p>
                </div>
            </section>


        </div>
       </>
    );
}

export default SignUp;