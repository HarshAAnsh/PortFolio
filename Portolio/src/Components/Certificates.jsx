import React from 'react'
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react'

function Certificates() {
    const CertificateData =[
        {
            id:1,
            issuer:"TuteDude",
            title:"MERN stack Development",
            date:"2025-04-01",
            desc: "This course carries the compalete course from basic HTML Css to advance React.js and Node.js",
            link:"#"
        },
        {
            id:2,
            issuer:"TuteDude",
            title:"Competative C++",
            date:"2025-06-01",
            desc: "This Course carries the basic of C++ with the aAdvance competetive concept ",
            link:"#"
        },
        {
            id:3,
            issuer:"TuteDude",
            title:"DevOps Tutorials",
            date:"2025-07-01",
            desc: "Complete DevOps Tutorials including basic linux with docker, kubernates ,taraform, aws with CI/CD pipelines",
            link:"#"
        },
        {
            id:4,
            issuer:"TuteDude",
            title:"Data Science",
            date:"2025-08-01",
            desc: "Complete Data Science course contains from basic Excel to Advance statics and Python",
            link:"#"
        },

    ]
  return (
    <section className='text-white py-20' id='certificates'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>Achievements</p>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white'>Certificates</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {CertificateData.map((cert) => (

                <div key={cert.id} data-aos="zoom-in" className='group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0,2)]'>
                    <div className='absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform'>
                    <Award className='text-white' size={20}/>
                    </div>
                    <div className='flex items-center gap-4 mb-4 text-xs text-gray-400'>
                        <span className='flex items-center gap-1'>
                            <ShieldCheck size={14}/>
                            <div className='text-primary'>{cert.issuer}</div>
                        </span>
                        <span className='flex items-center gap-1'>
                            <Calendar size={14}/>
                            {cert.date}
                        </span>
                    </div>
                    <h3 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>{cert.title}</h3>
                    <p className='text-gray-400 text-sm mb-6 line-clamp-2'>
                        {cert.desc}
                    </p>
                    <a href={cert.link}
                    targer="_blank"
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-white ransition-colors border-b border-transparent hover:border-white pb-1'> View Certificate <ExternalLink size={14}/></a>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Certificates;