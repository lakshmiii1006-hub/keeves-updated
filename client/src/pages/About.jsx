'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, ShieldCheck, CheckCircle2, HardHat, 
  Settings, Zap, Star, Users, FileText, Layers, Network,
  Scale, Ruler, FileCheck, ArrowUpRight
} from 'lucide-react';
export default function About() {
  const coreValues = [
  { 
    title: "Precision", 
    icon: Ruler, 
    desc: "Engineering solutions built with accuracy and attention to detail.",
    color: "border-sky-500"
  },
  { 
    title: "Innovation", 
    icon: Zap, 
    desc: "Continuously improving through modern tools, advanced methods, and deep expertise.",
    color: "border-slate-800"
  },
  { 
    title: "Integrity", 
    icon: ShieldCheck, 
    desc: "Transparent processes and dependable service you can trust.",
    color: "border-sky-500"
  },
  { 
    title: "Customer Focus", 
    icon: Users, 
    desc: "Solutions designed with your goals and success at the center.",
    color: "border-slate-800"
  }
];
  const servicesOffered = [
    { 
      id: "01",
      title: "Steel Detailing of Structural and Miscellaneous Steel", 
      desc: "Innovative, precision-driven steel detailing that delivers exceptional accuracy and clear, build-ready documentation.",
      tag: "CORE SERVICE"
    },
    { 
      id: "02",
      title: "Connection Engineering", 
      desc: "Efficient, code-compliant connection designs that enhance structural integrity and streamline both fabrication and erection.",
      tag: "ENGINEERING"
    },
    { 
      id: "03",
      title: "PE Stamping", 
      desc: "Licensed Professional Engineer (PE) stamping for drawings and calculations—ensuring safety, accuracy, and full compliance with local building codes.",
      tag: "COMPLIANCE"
    },
    { 
      id: "04",
      title: "Material Take-Off & Estimation", 
      desc: "Precise quantity take-offs and accurate cost estimates that support better planning, reduced waste, and reliable budgeting.",
      tag: "PLANNING"
    },
    { 
      id: "05",
      title: "BIM Models for Collaboration", 
      desc: "3D BIM models that improve coordination, enhance project visibility, and ensure seamless collaboration across all project stakeholders.",
      tag: "TECHNOLOGY"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* 1. Introductory Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <span className="text-sky-600 font-bold text-sm tracking-[0.4em] uppercase mb-4 block">About Keeves Steel</span>
             <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 uppercase leading-[0.9] tracking-tighter mb-8">
               Engineering <br /><span className="text-slate-400 font-light">Global Structures</span>
             </h1>
             <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
               Founded in 2021, Keeves Steel is a rapidly growing engineering company committed to delivering top quality engineering and steel detailing services to clients across the United States.
At Keeves Steel, we combine strong engineering expertise with a dedication to precision, innovation, and reliability. Our work is rooted in professional, scientific, and technical services, with a specialized focus on engineering design and steel detailing—helping businesses build stronger, smarter, and more efficient structures and systems.

             </p>
             <div className="text-xl font-bold text-sky-600 mt-6 pt-6 border-t border-slate-200 uppercase tracking-wider">
               Experience the Future of Steel Precision
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100"
           >
             <h3 className="text-2xl font-bold text-slate-900 uppercase mb-6">Our Specialization</h3>
             <div className="space-y-4">
               {["Structural Steel Detailing", "Miscellaneous Steel", "Connection Engineering", "Shop Drawings & 3D Models"].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                   <CheckCircle2 className="text-sky-500 shrink-0" size={20} />
                   <span className="font-bold text-slate-700 uppercase text-xs tracking-widest">{item}</span>
                 </div>
               ))}
             </div>
           </motion.div>
         </div>
        </div>
      </section>

      {/* 2. Process & Technology Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
         <div className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10">
           <Settings className="text-sky-400 mb-8" size={48} />
           <h2 className="text-3xl font-bold uppercase mb-6 tracking-tight">Our Process</h2>
           <p className="text-slate-300 text-lg leading-relaxed font-light">
             From initial model creation to final CNC files, our structured workflow ensures zero RFIs and seamless fabrication.
           </p>
         </div>

         <div className="p-12 rounded-[2.5rem] bg-sky-600">
           <HardHat className="text-white mb-8" size={48} />
           <h2 className="text-3xl font-bold uppercase mb-6 tracking-tight">Our Technology</h2>
           <p className="text-sky-50 text-lg leading-relaxed font-light">
             SDS2, Tekla Structures, and advanced BIM integration power our detailing, delivering CNC-ready files that accelerate timelines.
           </p>
         </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
         <div className="text-center mb-20">
           <h2 className="text-sky-700 font-bold text-sm tracking-[0.4em] uppercase mb-4">Our Foundation</h2>
           <h3 className="text-4xl lg:text-6xl font-semibold uppercase text-slate-900 tracking-tight">Our Core <span className="text-slate-400 font-light">Values</span></h3>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {coreValues.map((value, i) => (
             <div 
               key={i}
               className={`p-10 rounded-[2.5rem] bg-white border-2 ${value.color} flex flex-col items-center text-center`}
             >
               <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
                 <value.icon className="text-sky-600" size={32} />
               </div>
               <h4 className="text-xl font-bold uppercase mb-4 text-slate-800 tracking-tight">{value.title}</h4>
               <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
             </div>
           ))}
         </div>
        </div>
      </section>

      {/* 4. REDESIGNED SERVICES OFFERED (TEXT-CENTRIC & TECHNICAL) */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-sky-700 font-bold text-sm tracking-[0.4em] uppercase mb-4">What We Deliver</h2>
            <h3 className="text-4xl lg:text-6xl font-semibold uppercase tracking-tight text-slate-900">
              Services <span className="text-slate-400 font-light">Offered</span>
            </h3>
          </div>

          <div className="space-y-0">
            {servicesOffered.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative py-12 border-b border-slate-200 flex flex-col md:flex-row gap-8 items-start hover:bg-white transition-all duration-300 px-8 rounded-2xl"
              >
                {/* Technical ID */}
                <div className="text-sky-600 font-mono text-xl font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                  {service.id}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-sky-500 border border-sky-200 px-2 py-0.5 rounded-md uppercase">
                      {service.tag}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold uppercase text-slate-900 tracking-tight mb-4 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-3xl font-light">
                    {service.desc}
                  </p>
                </div>

                {/* Subtle Action Icon */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}