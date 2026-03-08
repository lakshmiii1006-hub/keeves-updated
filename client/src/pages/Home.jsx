'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Layers, Network, ChevronRight, 
  Target, Rocket, ShieldCheck 
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const carouselImages = [
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784195/WCU_INSTITUTE_OF_PRIMARY_CARE_-_PHASE_2_-_W_C_U_HATTIESBURG_MISSISSIPPI_3_t7fqjd.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784179/WHITE_CASTLE_HIGH_SCHOOL_COMPETITION_GYMNASIUM_-_WHITE_CASTLE_LA_70788_4_yl47o4.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784156/THE_NEW_SPENCER_MIDDLE_SCHOOL_-_SPENCER_WV_4_utcrz4.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784149/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_6_jnyqxf.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784135/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_4_sqdgui.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784126/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_3_gjohbc.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784112/RHS_BASEBALL_FIELD_-_RUSTON_HIGH_SCHOOL_2_udar1z.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784108/FIDELITY_BANK_LAFAYETTE_-_LAFAYETTE_LOUISIANA_70508_3_emfhvf.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784100/THE_NEW_SPENCER_MIDDLE_SCHOOL_-_SPENCER_WV_2_mxdza8.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772784079/RHS_BASEBALL_FIELD_-_RUSTON_HIGH_SCHOOL_3_f5mr8e.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783928/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_5_xwqk6e.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783924/NICHOLS_STATE_U_COASTAL_CENTER_-_THIBODAUX_LA_2_laa2wo.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783876/JEFFERSON_PARISH_JUVENILE_SERVICES_CENTER_-_100_DAVID_DRIVE_METAIRIE_LA_1_vtvc3t.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783856/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_1_hotcw9.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783827/PHASE_3_-_NEW_GYMNASIUM-WASHINGTON_MARION_HIGH_SCHOOL_-_2802_PINEVIEW_STREET_LAKE_CHARLES_LOUISIANA_70615_3_mvlpfn.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783805/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_2_mmibnt.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783749/ELEVATOR_A_RAIL_BULK_WEIGHER_REPLACEMENT_-_DECATUR_ILLINOIS_4_jjwgud.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783722/CAMP_SHELBY_JOINT_FORCES_TRAINING_CENTER_-_CAMP_SHELBY_MISSISSIPPI_3_bhnj0g.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783679/CARGILL-PROJECT_SLIDER_-_WICHITA_KS_1_daz72g.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783678/GLENVILLE_STATE_UNIVERSITY_HEALTH_WELLNESS_COMPLEX_-_GLENVILLE_WEST_VIRGINIA_5_oiezkx.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783665/ELEVATOR_A_RAIL_BULK_WEIGHER_REPLACEMENT_-_DECATUR_ILLINOIS_3_z5baab.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783627/EVERGREEN_LIME_KILN_-_1900_W._FIELD_COURT_LAKE_FOREST_ILLINOIS_60045_2_r0qcda.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783576/CARGILL-PROJECT_SLIDER_-_WICHITA_KS_2_rh0tyo.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783570/ELEVATOR_A_RAIL_BULK_WEIGHER_REPLACEMENT_-_DECATUR_ILLINOIS_1_zzjk8o.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783569/ELEVATOR_A_RAIL_BULK_WEIGHER_REPLACEMENT_-_DECATUR_ILLINOIS_2_vrg9ia.png",
  "https://res.cloudinary.com/dyxijlh28/image/upload/v1772783565/BOISE_CASCADE-_JACK_TRUSS_-_BOISE_IDAHO_3_qkl3wm.png"
];

const serviceCardImages = {
  structural: "https://res.cloudinary.com/dyxijlh28/image/upload/v1770742511/Screenshot_2026-02-10_195700_gkgwyk.png",
  connections: "https://res.cloudinary.com/dyxijlh28/image/upload/v1772871066/99191276923_fcfzol.png",
  misc: "https://res.cloudinary.com/dyxijlh28/image/upload/v1770742603/Screenshot_2026-02-10_195616_dzbddw.png"
};

const certLogos = {
  sds2: "https://res.cloudinary.com/dyxijlh28/image/upload/v1772792268/c4e4ac5e-9b19-478e-a5fa-859583c4c5e3.png",
  aisc: "https://res.cloudinary.com/dyxijlh28/image/upload/v1772788849/8c4fa5c9-fb5e-45c2-8617-30d653684cba.png"
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('structural');
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = {
    structural: { title: "Structural Steel Detailing", icon: Building2, description: "High-quality detailing for beams, columns, and structural components." },
    connections: { title: "Connecting Engineering", icon: Network, description: "Precise connection designs and calculations to guarantee structural integrity." },
    misc: { title: "Miscellaneous Steel", icon: Layers, description: "Expert detailing for stairs, railings, ladders, and custom steel elements." }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman:ital,wght@0,400;0,700;1,400&display=swap');
        .hero-serif { font-family: 'Times New Roman', Times, serif !important; font-weight: 700 !important; letter-spacing: 0.02em !important; }
      `}</style>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
<section className="relative min-h-[115vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-900 text-white">

  {/* Background Images */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      <motion.img
        key={activeHeroImage}
        src={carouselImages[activeHeroImage]}
        className="w-full h-full object-cover absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.7, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.6 }}
      />
    </AnimatePresence>

    <div className="absolute inset-0 bg-slate-900/60" />
  </div>


  {/* Content */}
  <div className="relative z-40 text-center px-6 max-w-6xl w-full">

    {/* Logos */}
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="flex flex-wrap justify-center items-center gap-6 mb-12"
    >

      {/* SDS2 */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="flex items-center gap-3 bg-white/10 backdrop-blur-xl pl-2 pr-5 py-2 rounded-full border border-white/30 shadow-2xl"
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5 shadow-md">
          <img src={certLogos.sds2} alt="SDS2" className="w-full h-full object-contain" />
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-sky-100">
          SDS2 Certified Detailers
        </span>
      </motion.div>

      {/* AISC */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="flex items-center gap-3 bg-white/10 backdrop-blur-xl pl-2 pr-5 py-2 rounded-full border border-white/30 shadow-2xl"
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-md">
          <img src={certLogos.aisc} alt="AISC" className="w-full h-full object-contain" />
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-sky-100">
          AISC Associate
        </span>
      </motion.div>

    </motion.div>


    {/* TITLE */}
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-serif text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[9.5rem] tracking-[0.05em] mb-12 leading-none bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent"
    >
      KEEVES
      <br />
      <span className="text-sky-400 font-normal">STEEL</span>
    </motion.h1>


    {/* Subtitle */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="max-w-4xl mx-auto mb-12"
    >
      <div className="text-xl md:text-2xl font-light text-slate-200 leading-relaxed tracking-wide">
        Reimagining Steel Detailing with <br />
        <span className="text-sky-400 font-semibold text-2xl md:text-3xl tracking-tight">
          Next Level Innovation
        </span>
        <br />
        and Absolute Accuracy.
      </div>
    </motion.div>


    {/* Button */}
    <motion.button
      onClick={() => navigate("/projects")}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group relative px-12 py-6 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-3xl font-bold uppercase tracking-widest text-xl text-white hover:bg-white/20 transition-all duration-500 shadow-2xl"
    >
      <span className="relative z-10 flex items-center gap-3">
        View Work
        <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
      </span>
    </motion.button>

  </div>
</section>

        {/* JOURNEY SECTION - WITH SMALLER CAROUSEL RESTORED */}
        <section className="py-32 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold uppercase leading-[0.85] tracking-tight text-slate-900 mb-12">
                  OUR <br /><span className="text-sky-700 font-light">JOURNEY</span>
                </h2>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6 max-w-xl text-slate-500 text-lg leading-relaxed">
                  <p>Incorporated on <span className="font-bold text-slate-800">August 4, 2021</span>, Keeves Steel was founded with a vision to become a trusted partner in technical and engineering excellence.</p>
                  <p>Since then, we have shown steady growth, driven by a talented team and dedicated leadership. We deliver top-notch quality structural steel detailing services designed to empower architects, engineers, and fabricators with unmatched accuracy and efficiency.</p>
                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">
                      By combining precision craftsmanship with advanced detailing technology, we produce shop drawings, erection plans, and 3D models that accelerate workflows, reduce rework, and keep projects moving smoothly from concept to completion.
                    </p>
                  </div>
              </motion.div>
            </div>
          </div>

          {/* Original Smaller Carousel Styling restored here */}
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="relative flex overflow-hidden -mx-6">
              <motion.div className="flex gap-8 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 70, ease: "linear" }}>
                {[...carouselImages, ...carouselImages].map((src, index) => (
                  <div key={index} className="w-[300px] md:w-[400px] h-[250px] md:h-[300px] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                    <img src={src} alt="Project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* VISION MISSION VALUES Section */}
        <section id="services" className="py-32 px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-sky-700 font-bold text-sm tracking-[0.4em] uppercase mb-4">Shaping your vision</h2>
              <h3 className="text-4xl lg:text-6xl font-semibold uppercase tracking-tight text-slate-900">Technical Excellence</h3>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-24">
              {Object.entries(services).map(([key, service]) => (
                <motion.div key={key} className="relative group p-10 h-[400px] rounded-[2rem] overflow-hidden flex flex-col justify-end border-2 border-slate-100 hover:border-sky-500 transition-all duration-500">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${serviceCardImages[key]})` }} />
                  <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40" />
                  <div className="relative z-10">
                    <service.icon className="w-12 h-12 mb-6 text-white group-hover:text-sky-400 transition-colors" />
                    <h4 className="text-2xl font-semibold uppercase mb-4 text-white tracking-wider">{service.title}</h4>
                    <p className="text-sm text-white/80">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100">
                <Target className="text-sky-600 mb-6" size={32} />
                <h4 className="text-2xl font-bold uppercase tracking-tight text-slate-800 mb-6">Our Vision</h4>
                <p className="text-slate-500 text-lg">To be a trusted leader in structural steel detailing by delivering innovative, precise solutions and building strong partnerships.</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-slate-900 p-10 rounded-[2.5rem] shadow-xl text-white">
                <Rocket className="text-sky-400 mb-6" size={32} />
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-6">Our Mission</h4>
                <p className="text-slate-300 text-lg">To simplify complex steel structures through innovative detailing, exceptional accuracy, and a client focused approach that supports successful construction.</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100">
                <ShieldCheck className="text-sky-600 mb-6" size={32} />
                <h4 className="text-2xl font-bold uppercase tracking-tight text-slate-800 mb-6">Core Values</h4>
                <div className="grid grid-cols-1 gap-4">
                  {['Precision', 'Innovation', 'Integrity', 'Customer Focus'].map((value, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:bg-sky-50">
                      <div className="w-2 h-2 rounded-full bg-sky-500" />
                      <span className="text-slate-700 font-semibold uppercase text-xs tracking-widest">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}