import React from 'react'
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react'
import about from '../assets/about.jpeg';

function AboutSection() {
  return (
    <section className='text-white mt-16 relative overflow-hidden' id='about'>
        <div className='mac-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10'>
            <div data-aos="fade-right">
                <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6'>
                    More <span className='text-primary'>About </span>Me
                </h2>
                <p className='text-gray-400 text-base lg:text-lg mb-10 leading-relaxed'>
                    I am a passionate and dedicated web developer with a strong foundation in both frontend and backend technologies. With a keen eye for design and a commitment to writing clean, efficient code, I strive to create seamless and engaging user experiences.
                    <br/><br/>
                     My journey in web development has been driven by a desire to continuously learn and grow, allowing me to stay up-to-date with the latest industry trends and best practices. I am excited to contribute my skills and creativity to build innovative web applications that make a positive impact.
                </p>
                <div className='grid grid-cols-3 gap-6  max-w-xl'>
                    <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50'>
                    <h3 className='text-primary font-bold text-2xl md:text-3xl'>7+</h3>
                    <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>Clients</p>
                    </div>
                      <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50'>
                    <h3 className='text-primary font-bold text-2xl md:text-3xl'>10+</h3>
                    <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>Projects</p>
                    </div>
                      <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50'>
                    <h3 className='text-primary font-bold text-2xl md:text-3xl'>3+</h3>
                    <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>Years </p>
                    </div>
                </div>
            </div>
            <div className='md-16 mt:md-0 flex justify-center lg:justify-end relative' data-aos="fade-left">
                <div className='relative w-64 h-64 md:w-96 md:h-120'>
                    <div className='absolute inset-0 z-0 rounded-full shadow-lg border border-primary translate-x-4 translate-y-4'>

                    </div>
                    <div className='relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>
                        <img src={about} alt='About Me'
                        className='w-full h-full object-cover transition-transform duration-500 hover:scale-10'/>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default AboutSection