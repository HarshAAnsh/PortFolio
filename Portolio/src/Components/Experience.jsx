import React from "react";
import { Award, Calendar, ExternalLink, ShieldCheck, Briefcase, Building } from "lucide-react";
import { Layout, Code, Database, GitBranch, Container } from "lucide-react";
import {FaHtml5, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaGithub, FaLinux, FaAngular} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiMongodb, SiKubernetes, SiGrafana } from "react-icons/si";

function Experience() {
  const skills = [
    { id: 1, name: "HTML & CSS", width: "90%", icon: FaHtml5 },
    { id: 2, name: "JavaScript", width: "80%", icon: FaJs },
    { id: 3, name: "React JS", width: "75%", icon: FaReact },
    { id: 4, name: "Node JS", width: "75%", icon: FaNodeJs },
    { id: 5, name: "MongoDB", width: "65%", icon: SiMongodb },
    { id: 6, name: "Git & GitHub", width: "85%", icon: FaGithub },
    { id: 7, name: "Docker", width: "60%", icon: FaDocker },
    { id: 8, name: ".NET Framework", width: "90%", icon: AiOutlineDotNet },
    { id: 9, name: "Python", width: "70%", icon: FaPython },
    { id: 10, name: "Java", width: "65%", icon: FaJava },
    { id: 11, name: "AWS", width: "55%", icon: FaAws },
    { id: 12, name: "Azure", width: "50%", icon: VscAzure },
    { id: 13, name: "Linux", width: "75%", icon: FaLinux },
    { id: 14, name: "Kubernetes", width: "60%", icon: SiKubernetes },
    { id: 15, name: "Grafana", width: "70%", icon: SiGrafana },
    { id: 16, name: "Angular", width: "65%", icon: FaAngular },
  ];
  const Experience = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Altitude Software Asia Pacific pvt. ltd.",
      duration: "Oct 2023 - July 2026",
      description:
        "Developed and maintained web applications using .net framework, React, Node.js, and MongoDB. Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in user engagement.",
    },
  ];
  return (
    <section className="text-white py-20 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold  mb-2">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="space-y-8">
              {skills.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <div key={skill.id} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#111a3e] rounded-lg group-hover:bg-primary transition-colors duration-300">
                          <SkillIcon
                            className="text-primary group-hover:text-white"
                            size={20}
                          />
                        </div>
                        <span className="font-medium tracking-wide">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary font-bold">
                        {skill.width}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#131d30] rounded-full p-0.5">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-primary to-cyan-400 shadow-[0_0_10px_#06a2c2]"
                        style={{ width: skill.width }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="fade-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="space-y-8">
              {Experience.map((exp) => (
                <div
                  key={exp.id}
                  className="group relative p-6 rounded-2xl bg-[#1f1641] hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="p-3 bg-[#050816] rounded-xl border border-gray-800 group-hover:border-primary transition-colors">
                        <Briefcase className="text-primary " size={24} />
                      </div>
                    </div>
                    <div className="grow">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className=" flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Building className="text-primary" size={14} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="text-primary" size={14} />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
