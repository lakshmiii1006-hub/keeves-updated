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
  structural: "https://res.cloudinary.com/dyxijlh28/image/upload/v1772958799/Screenshot_2026-03-08_140138_nsjmqs.png",
  connections: "https://res.cloudinary.com/dyxijlh28/image/upload/v1772871066/99191276923_fcfzol.png",
  misc: "https://res.cloudinary.com/dyxijlh28/image/upload/v1774015603/Screenshot_2026-03-20_193010_yj0a1n.png"
};

const certLogos = {
  sds2: "https://res.cloudinary.com/dyxijlh28/image/upload/v1773563093/SDS2_by_ALLPLAN_is_part_of_the_Nemetschek_Group_vzsw6k.jpg",
  aisc: "https://res.cloudinary.com/dyxijlh28/image/upload/v1773563081/associate_member_logo_stpevr.jpg",
  deta: "https://res.cloudinary.com/dyxijlh28/image/upload/v1773563065/detailer_member_logo_qduwfa.jpg"
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
    structural: { title: " Steel Detailing of Structural and Miscellaneous Steel", icon: Building2, description: "Innovative, precision driven steel detailing that delivers exceptional accuracy and clear, build ready documentation." },
    connections: { title: "Connecting Engineering", icon: Network, description: "Efficient, code compliant connection designs that enhance structural integrity and streamline both fabrication and erection." },
    misc: { title: "PE Stamping", icon: ShieldCheck, description: "Licensed Professional Engineer (PE) stamping for drawings and calculations—ensuring safety, accuracy, and full compliance with local building codes." }
  };

  return (
  <>
  <style jsx global>{`
    body {
      font-family: 'Trebuchet MS', Arial, sans-serif;
    }

    .hero-serif {
      font-family: 'Trebuchet MS', Arial, sans-serif !important;
      font-weight: 700 !important;
      letter-spacing: 0.02em !important;
    }
  `}</style>

  <main className="min-h-screen bg-white">
  {/* Hero Section - Light Industrial Theme */}
<section className="relative min-h-[115vh] pt-56 pb-20 flex items-center justify-center overflow-hidden bg-white text-slate-900">
  {/* Background Images */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      <motion.img
        key={activeHeroImage}
        src={carouselImages[activeHeroImage]}
        className="w-full h-full object-cover absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }} // Increased opacity for light mode
        exit={{ opacity: 0 }}
        transition={{ duration: 1.6 }}
      />
    </AnimatePresence>

    {/* Light Overlay: Changed from slate-900/60 to a white/70 gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white" />
  </div>

  {/* Content */}
  <div className="relative z-40 text-center px-6 max-w-6xl w-full">
    
    {/* TITLE - Updated to Dark Text */}
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-serif text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[9.5rem] tracking-[0.05em] mb-12 leading-none bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent"
    >
      KEEVES
      <span className="ml-6 text-sky-600 font-normal">STEEL</span>
    </motion.h1>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="max-w-6xl mx-auto mb-12 text-center"
    >
      <p className="text-xl md:text-2xl font-light text-slate-700 tracking-wide whitespace-nowrap">
        Reimagining Steel Detailing with{" "}
        <span className="text-sky-600 font-semibold">
          Next Level Innovation
        </span>{" "}
        and Absolute Accuracy.
      </p>
    </motion.div>

    {/* Button - Updated for Light Theme */}
    <motion.button
      onClick={() => navigate("/projects")}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group relative px-12 py-6 bg-slate-900 border-2 border-slate-900 rounded-3xl font-bold uppercase tracking-widest text-xl text-white hover:bg-slate-800 transition-all duration-500 shadow-2xl"
    >
      <span className="relative z-10 flex items-center gap-3">
        View Work
        <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
      </span>
    </motion.button>

  </div>
</section>

        {/* JOURNEY SECTION - UPDATED TYPOGRAPHY */}
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
            {/* Removed 'uppercase' and 'text-sm' classes here */}
            <p className="text-slate-600 font-medium tracking-wide">
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
        {/* LICENSES & CERTIFICATIONS SECTION */}
<section className="py-24 px-6 lg:px-8 bg-white border-t border-slate-100">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Text Content */}
      <div className="max-w-xl">
        <h2 className="text-sky-700 font-bold text-sm tracking-[0.3em] uppercase mb-4">
          Industry Standards
        </h2>
        <h3 className="text-4xl font-semibold uppercase tracking-tight text-slate-900 mb-6">
          Certified Excellence
        </h3>
        <p className="text-slate-500 text-lg leading-relaxed">
          Our commitment to quality is backed by industry-leading certifications. 
          We strictly adhere to AISC standards and utilize advanced detailing 
          technologies to ensure every project meets the highest level of structural integrity.
        </p>
      </div>

      {/* Logo Grid - AISC Fixed at 1.125in, others scaled up */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
        
        {/* AISC - Strictly Fixed Size */}
        <motion.div whileHover={{ y: -5 }} className="flex items-center justify-center">
          <img 
            src={certLogos.aisc} 
            alt="AISC Member" 
            className="object-contain"
            style={{ width: '1.125in' }} 
          />
        </motion.div>

        {/* SDS2 - Scaled Larger */}
        <motion.div whileHover={{ y: -5 }} className="flex items-center justify-center">
          <img 
            src={certLogos.sds2} 
            alt="SDS2 Certified" 
            className="object-contain"
            style={{ width: '1.8in' }} 
          />
        </motion.div>

        {/* Third License - Scaled Larger */}
        <motion.div whileHover={{ y: -5 }} className="flex items-center justify-center">
          <img 
            src={certLogos.deta} 
            alt="Professional Certification" 
            className="object-contain"
            style={{ width: '1.125in' }} 
          />
        </motion.div>

      </div>
    </div>
  </div>
</section>
      </main>
    </>
  );
}