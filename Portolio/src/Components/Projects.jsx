import React from 'react';
import { GrProjects } from "react-icons/gr";
import CloudForge from '../assets/cloudforge.png';
import Grafana from '../assets/Grafana.png';
import FTP from '../assets/FTP Server.png';
import Social from '../assets/SocialMediaAPI.png';
import Weather from '../assets/Weather.png';
import QR from '../assets/QR.png';
import Gemini from '../assets/gemini.png';
import Support from '../assets/Support.png';

function Projects() {
    const Projects=[
        {
            id:1,
            name:"CloudForge",
            description:"Created a cloud-native deployment automation system that enables users to deploy Docker applications through a web-based control panel. The platform leverages BullMQ queues for background processing, AWS EC2 for container hosting, AWS Lambda for post-deployment automation, and MongoDB for deployment tracking. Users can monitor deployment progress in real time through a live status dashboard without refreshing the application.",
            technologies:["React, Node.js, Express.js, MongoDB, Redis, BullMQ, AWS EC2, AWS Lambda, AWS SSM, Socket.IO, Docker"],
            image: CloudForge
        },
        {
            id:2,
            name:'Server Monitoring and Alerting System',
            description:'Design and Deployed a complete Server Monitoring solution to track system performance across multiple windows and linux servers.',
            technologies:["Grafana, Prometheus, Node Exporter, Windows exporter, YAML, JSON"],
            image:Grafana 
        },
         {
            id:3,
            name:'Web-Based FTP Access',
            description:'A Scure Web applicationthat provides users with access to an FTP-server hosted on IIS, along with built-in admin control panel for managing users.',
            technologies:["React.js , node.js , FTP, IIS , Javascript"],
            image:FTP
        },
         {
            id:4,
            name:'Automated Control Support System',
            description:'Developled a ticketing tool to manage work between the customer and parterners also to be used as an internal ticketing tool',
            technologies:[".Net Framework, Bootstrap, JavaScript, SSMS, React.Js"],
            image:Support
        },
         {
            id:5,
            name:'Social Media API',
            description:'A Restfull backend Service built to desgn and power a full featured social Media platform',
            technologies:["Node.js, Express.js, MongoDB, JWT, Socket.IO, Swagger"],
            image:Social
        },
         {
            id:6,
            name:'Weather Forecase App',
            description:'A simple weather forecast application that provides users with current weather information and predictions for the upcoming days.',
            technologies:["React.js, Bootstrap, JavaScript, Weather API"],
            image:Weather
        },
         {
            id:7,
            name:'QR Code Generator',
            description:'A simple Web Page that generated a QR code just by providing an URL and a size to download later',
            technologies:["HTML, Css, JavaScript, TailwindCss"],
            image:QR
        },
         {
            id:8,
            name:'Gemini Clone',
            description:'A web Application that usage the Gemini API to manage various Functionality offered by the Gemini AI',
            technologies:["React,js, JavaScript, Gemini API, Bootstrap Css"],
            image:Gemini
        }
    ]
  return (
   <section className='py-16 bg-gray-900' id='Projects'>
    <div className='container mx-auto px-4 max-w-7xl'>
    <div className='text-center mb-10'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-white'>Projects.</h2>
        <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl '></div>
    </div>
    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {Projects.map((project)=>(
        <div key={project.id}
        className='bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300'>
            <img src={project.image} alt={project.name}
            className='w-full h-44 object-cover hover:opacity-90 transition-opacity duration-300'/>
            <div className='p-4'>
                <h3 className='text-lg font-semibold text-white group-hover:text-primary transition-colors'>
                    {project.name}
                </h3>
                <p className='text-gray-400 text-sm mt-1'>
                    {project.description}
                    </p>
                <div className='flex flex-wrap gap-1.5 mt-3'>
                    {project.technologies.map((tec, idx)=>(
                         <span key={idx} 
                        className='text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded hover:bg-primary hover:text-white transition-colors duration-300'>
                            {tec}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    ))}
    </div>
    </div>
   </section>
  );
};

export default Projects;