import { Link } from 'react-router-dom';
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";


function About() {



    return (
       <>
        <div className="min-h-screen bg-black text-white overflow-hidden">
      
            <section className="hidden md:flex flex-col justify-center items-center px-8 sm:hidden lg:px-12 xl:px-16 relative">
            <div className='relative text-center '>
                <img src='./LogoFull.png' className='w-200 h-100'/>

                <p className="text-gray-400 text-3xl mx-auto relative bottom-30">
                          DevHook connects talented developers with companies<br />
                            actively looking for their skills and expertise.
                    </p>
            </div>
            
         
            </section>

        </div>
       </>
    );
}

export default About;