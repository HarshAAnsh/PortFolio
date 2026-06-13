import React from "react";
import { GraduationCap, X, Calendar, CheckCircle } from "lucide-react";
import education from "../assets/education.png";

function Education() {
  const EducationData = [
    {
      id: 1,
      Degree: "Bachelor of Computer Application(BCA)",
      Insitute: "Manav Rachna University Faridabad",
      Duration: "2021 - 2023",
      MarksObtain: "73%",
    },
    {
      id: 2,
      Degree: "I.sc 12th Board",
      Insitute: "L M High School Pupri Sitamarhi(BSEB)",
      Duration: "2019-2021",
      MarksObtain: "81%",
    },
    {
      id: 3,
      Degree: "10th Board",
      Insitute: "L M High School Pupri Sitamarhi(BSEB)",
      Duration: "2018-2019",
      MarksObtain: "76%",
    },
  ];
  return (
    <section className="text-white py-20 overflow-hidden" id="education">
      <div className="maw-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
            Laerning Path
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Education
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div
            className="w-full lg:w-5/12 flex justify-center lg:justify-start"
            data-aos="fade-right"
          >
            <div className="relative">
              <div className="absolute h-full w-full z-0 p-2 translate-w-4 translate-y-4 rounded-2xl shadow-lg border border-cyan-500"></div>
              <div className="relative z-10 bg-[#111a3e] rounded-2xl overflow-hidden border-[#1f1641]">
                <img
                  src={education}
                  alt="Education"
                  className="w-64 h-64 md:w-96 md:h-120 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-primary/20 w-16 gh-16 rounded-full blur-2xl"></div>
            </div>
          </div>
          <div className="w-full lg:w-7/12 space-y-6" data-aos="fade-left">
            {EducationData.map((edu) => (
              <div
                key={edu.id}
                className="group relative p-6 rounded-2xl bg-[#111a3a] border border-[#1f1641] transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#050816] rounded-lg border border-primary/20 group-hover:border-primary transition-colors">
                      <GraduationCap className="text-primary" size={24} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {edu.Degree}
                      </h3>

                      <p className="text-gray-400 text-sm">{edu.Insitute}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium bg-[#050816] px-3 py-1 rounded-full border border-gray-700 w-fit">
                    <Calendar size={12} className="text-primary" />
                    {edu.Duration}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mt-4 mb-2">
                  Marks Obtained: {edu.MarksObtain}
                </p>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-primary font-bold">
                  <CheckCircle size={12} />
                  Academic Excellence
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
