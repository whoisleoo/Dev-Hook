import { Link } from 'react-router-dom';
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";

function SignUp() {
    return (
       <>
        <div className="min-h-screen bg-black text-white grid md:grid-cols-2">
            <Link to={'/#'} className='flex absolute left-2'>
               <img src="./icon.svg" className="w-25 h-25"/>
            </Link>
            <section className="hidden md:flex flex-col py-5 relative ml-20 mt-25">

                <div className="mb-12">
                    <p className="text-gray-400 text-2xl px-20 mt-5 font-mono">
                        // We connect developers with<br />
                        the right companies.
                    </p>
                </div>
                

                  <div className="font-mono text-2xl mb-8 mt-5 px-26">
                    <div>
                        <span className="text-purple-500">function</span>{' '}
                        <span className="text-white">devLookingForWork</span>
                        <span className="text-white">(</span>
                        <span className="text-orange-300">dev</span>
                        <span className="text-white">){'{'}</span>
                    </div>
                    
                    <div className="ml-8">
                        <span className="text-purple-500">if</span>{' '}
                        <span className="text-white">(dev.isSearching) {'{'}</span>
                    </div>
                    
                    <div className="ml-16">
                        <span className="text-purple-500">return</span>{' '}
                        <span className="text-white">join(</span>
                        <span className=" ">"DevHook"</span>
                         <span className="text-white">)</span>
                        <span className="text-white">;</span>
                    </div>
                    
                    <div className="ml-8">
                        <span className="text-white">{'}'}</span>
                    </div>
                    
                    <div>
                        <span className="text-white">{'}'}</span>
                    </div>

                    <div className="mt-8">
                        <span className="text-purple-500">const</span>{' '}
                        <span className="text-blue-300">you</span>{' '}
                        <span className="text-white">= {'{'}</span>
                    </div>
                    
                    <div className="ml-8">
                        <span className="text-white">name: </span>
                        <span className="text-yellow-300">"You"</span>
                        <span className="text-white">,</span>
                    </div>
                    
                    <div className="ml-8">
                        <span className="text-white">isSearching: </span>
                        <span className="text-purple-500">true</span>
                    </div>
                    
                    <div>
                        <span className="text-white">{'}'};</span>
                    </div>

                    <div className="mt-8">
                        <span className="text-white">devLookingForWork</span>
                        <span className="text-white">(</span>
                        <span className="text-blue-300">you</span>
                        <span className="text-white">);</span>
                    </div>
                </div>
            </section>


              <section className="bg-gray-100 flex items-center justify-center lg:rounded-l-4xl">
                <div className="w-full max-w-lg">
                    <h1 className="text-3xl font-bold text-black mb-8 text-left" style={{fontFamily: 'black'}}>
                        Create Account
                    </h1>
                    <div className="mb-6 flex gap-3">
                        <button className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="text-gray-700 font-medium text-sm">Sign in with Google</span>
                        </button>

                        <button className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                            <svg className="w-5 h-5" fill="black" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
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