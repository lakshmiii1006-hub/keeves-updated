import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Settings, ShoppingBag, 
  ChevronRight, ChevronLeft, ArrowLeft, GraduationCap
} from 'lucide-react';

const projectData = [
  {
    id: "government",
    title: "Government Buildings",
    desc: "High-precision detailing and engineering support for government infrastructure projects, ensuring strict compliance with regulatory standards, safety requirements, and long-term structural reliability.",
    icon: Building2,
    mainImage: "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866186/CAMP_SHELBY_JOINT_FORCES_TRAINING_CENTER_-_CAMP_SHELBY_MISSISSIPPI_1_qflo74.png",
    gallery: [
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866176/APSO_DISTRICT_3_HEADQUARTERS_-_PRAIRIEVILLE_LA_1_-_Copy_-_Copy_gnhpvz.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866182/APSO_DISTRICT_3_HEADQUARTERS_-_PRAIRIEVILLE_LA_1_-_Copy_vyqfwj.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866183/APSO_DISTRICT_3_HEADQUARTERS_-_PRAIRIEVILLE_LA_1_cm2y6t.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866186/CAMP_SHELBY_JOINT_FORCES_TRAINING_CENTER_-_CAMP_SHELBY_MISSISSIPPI_1_qflo74.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866186/CAMP_SHELBY_JOINT_FORCES_TRAINING_CENTER_-_CAMP_SHELBY_MISSISSIPPI_3_ye3tda.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866187/CAMP_SHELBY_JOINT_FORCES_TRAINING_CENTER_-_CAMP_SHELBY_MISSISSIPPI_2_wusgwb.png"
    ]
  },
  {
    id: "industrial",
    title: "Industrial Buildings",
    desc: "Comprehensive detailing and engineering support for factories, warehouses, and production facilities, designed to optimize structural performance, operational efficiency, and long-term durability while meeting all industry standards.",
    icon: Settings,
    mainImage: "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866570/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_6_wrgnq9.png",
    gallery: [
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866570/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_6_wrgnq9.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866570/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_4_zmigl2.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866570/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_1_znhvru.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866566/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_5_nkmzid.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866565/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_3_fb42yo.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866562/MOUNTAINEER_FOOD_BANK_-_PHASE_1-_GASSAWAY_WEST_VIRGINIA_3_r1vikw.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866561/PRIMIENT_SLUDGE_PRESS_BUILDING_-_DECATUR_ILLINOIS_2_qsfu0s.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866561/OPTIMA_BELLE_BUILDING_216_-_901_W_DUPONT_AVE_BELLE_WV_25015_3_fvqvn1.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866561/ELEVATOR_A_RAIL_BULK_WEIGHER_REPLACEMENT_-_DECATUR_ILLINOIS_3_upn9mj.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866557/MOUNTAINEER_FOOD_BANK_-_PHASE_1-_GASSAWAY_WEST_VIRGINIA_2_erlutn.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866556/ELEVATOR_A_RAIL_BULK_WEIGHER_REPLACEMENT_-_DECATUR_ILLINOIS_4_bhhgyl.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866555/EVERGREEN_LIME_KILN_-_1900_W._FIELD_COURT_LAKE_FOREST_ILLINOIS_60045_4_hkdyuf.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866553/EVERGREEN_LIME_KILN_-_1900_W._FIELD_COURT_LAKE_FOREST_ILLINOIS_60045_2_zl8y8h.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866553/BOISE_CASCADE-_JACK_TRUSS_-_BOISE_IDAHO_2_unhtac.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866550/CARGILL-PROJECT_SLIDER_-_WICHITA_KS_1_eusmdb.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866550/BOISE_CASCADE-_JACK_TRUSS_-_BOISE_IDAHO_3_sqcfnd.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866547/ELEVATOR_A_RAIL_BULK_WEIGHER_REPLACEMENT_-_DECATUR_ILLINOIS_2_gy3p73.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866547/CARGILL-PROJECT_SLIDER_-_WICHITA_KS_2_i0kvwn.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772866547/ELEVATOR_A_RAIL_BULK_WEIGHER_REPLACEMENT_-_DECATUR_ILLINOIS_1_tjmsxe.png"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Buildings",
    desc: "Expertise in steel detailing for offices, retail spaces, and multi-use commercial buildings.",
    icon: ShoppingBag,
    mainImage: "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793146/RHS_BASEBALL_FIELD_-_RUSTON_HIGH_SCHOOL_3_oql7k4.png",
    gallery: [
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793154/RHS_BASEBALL_FIELD_-_RUSTON_HIGH_SCHOOL_1_ccmswu.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793153/RHS_BASEBALL_FIELD_-_RUSTON_HIGH_SCHOOL_2_w7g86m.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793147/NICHOLS_STATE_U_COASTAL_CENTER_-_THIBODAUX_LA_2_ii7btx.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793121/NICHOLS_STATE_U_COASTAL_CENTER_-_THIBODAUX_LA_3_phdkd9.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793076/NICHOLS_STATE_U_COASTAL_CENTER_-_THIBODAUX_LA_1_uhiivd.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793074/FIDELITY_BANK_LAFAYETTE_-_LAFAYETTE_LOUISIANA_70508_3_nb0kcx.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793068/FIDELITY_BANK_LAFAYETTE_-_LAFAYETTE_LOUISIANA_70508_1_oemenn.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793068/ALVIN_DARK_STADIUM-_LAKE_CHARLES_LA_70601_2_cuui81.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793060/FIDELITY_BANK_LAFAYETTE_-_LAFAYETTE_LOUISIANA_70508_2_jt71ng.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793048/ALVIN_DARK_STADIUM-_LAKE_CHARLES_LA_70601_1_fes9bd.png"
    ]
  },
  {
    id: "institutional",
    title: "Institutional Buildings",
    desc: "Reliable detailing and engineering support for educational, healthcare, and public institutions, ensuring well-coordinated structural systems, safety compliance, and long-term functionality.",
    icon: GraduationCap,
    mainImage: "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867585/PHASE_3_-_NEW_GYMNASIUM-WASHINGTON_MARION_HIGH_SCHOOL_-_2802_PINEVIEW_STREET_LAKE_CHARLES_LOUISIANA_70615_3_uhrcjx.png",
    gallery: [
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867625/THE_NEW_SPENCER_MIDDLE_SCHOOL_-_SPENCER_WV_4_isxuwo.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867624/WHITE_CASTLE_HIGH_SCHOOL_COMPETITION_GYMNASIUM_-_WHITE_CASTLE_LA_70788_4_yczeo8.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867621/WHITE_CASTLE_HIGH_SCHOOL_COMPETITION_GYMNASIUM_-_WHITE_CASTLE_LA_70788_3_s2kf8k.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867624/WCU_INSTITUTE_OF_PRIMARY_CARE_-_PHASE_2_-_W_C_U_HATTIESBURG_MISSISSIPPI_3_dzvqa6.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867619/GLENVILLE_STATE_UNIVERSITY_HEALTH_WELLNESS_COMPLEX_-_GLENVILLE_WEST_VIRGINIA_5_lbu5hx.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867614/STERLINGTON_HIGH_SCHOOL_RENOVATIONS-_STERLINGTON_LOUISIANA_2_xkccwx.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867602/WCU_INSTITUTE_OF_PRIMARY_CARE_-_PHASE_2_-_W_C_U_HATTIESBURG_MISSISSIPPI_2_foycvk.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867596/JEFFERSON_PARISH_JUVENILE_SERVICES_CENTER_-_100_DAVID_DRIVE_METAIRIE_LA_1_yjnu1y.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867593/THE_NEW_SPENCER_MIDDLE_SCHOOL_-_SPENCER_WV_3_nn323l.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867592/JEFFERSON_PARISH_JUVENILE_SERVICES_CENTER_-_100_DAVID_DRIVE_METAIRIE_LA_4_gbbnla.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867592/THE_NEW_SPENCER_MIDDLE_SCHOOL_-_SPENCER_WV_2_uydoxy.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867585/PHASE_3_-_NEW_GYMNASIUM-WASHINGTON_MARION_HIGH_SCHOOL_-_2802_PINEVIEW_STREET_LAKE_CHARLES_LOUISIANA_70615_3_uhrcjx.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867573/GLENVILLE_STATE_UNIVERSITY_HEALTH_WELLNESS_COMPLEX_-_GLENVILLE_WEST_VIRGINIA_4_yzwx1f.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867570/ORANGEFIELD_SCHOOL_-_JUNIOR_HIGH_ADDITION_-7745_SAND_BAR_ROAD_ORANGE_1_nlaa4s.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867570/JEFFERSON_PARISH_JUVENILE_SERVICES_CENTER_-_100_DAVID_DRIVE_METAIRIE_LA_3_vlrtsn.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867566/ORANGEFIELD_SCHOOL_-_ELEMENTARY_ADDITION-_7745_SAND_BAR_ROAD_ORANGE_4_cz9md8.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867558/ORANGEFIELD_SCHOOL_-_HIGH_SCHOOL_ADDITION_-_7745_SAND_BAR_ROAD_ORANGE_2_lj2g07.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867556/DUVAL_PK-8_-_GRIFFITHSVILLE_WEST_VIRGINIA_5_hwfxjy.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867554/ORANGEFIELD_SCHOOL_-_ELEMENTARY_ADDITION-_7745_SAND_BAR_ROAD_ORANGE_3_zctbub.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867544/ATHLETIC_ACADEMIC_CENTER_-_RUSTON_LOUISIANA_1_zy7thj.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867543/ORANGEFIELD_SCHOOL_-_ELEMENTARY_ADDITION-_7745_SAND_BAR_ROAD_ORANGE_5_aw27t8.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867528/CHILD_DEVELOPMENT_CENTER_-_FORT_POLK_LOUISIANA_2_iicnl2.png",
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867523/ATHLETIC_ACADEMIC_CENTER_-_RUSTON_LOUISIANA_3_eglgep.png"
    ]
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // The specific text you requested
  const disclaimerText = "By contacting us, you consent to Keeves Steel using your details solely to respond to your inquiry, with your information securely transferred and processed in India in accordance with our Privacy Policy.";
  
  // Encoded mailto link that includes the disclaimer in the body of the email
  const mailtoHref = `mailto:keeves@keevessteel.com?subject=Project%20Inquiry%20-%20Keeves%20Steel&body=${encodeURIComponent("\n\n---\n" + disclaimerText)}`;

  // HELPER: Professional parser that removes ALL digits and applies Title Case
  const getProjectDetails = (url) => {
    try {
      const fileName = url.split('/').pop().split('.')[0]; 
      // Remove Cloudinary hash and common "copy" suffixes
      const cleanName = fileName.replace(/_[a-z0-9]+$/, '').replace(/-_Copy.*$/, '');
      const parts = cleanName.split('_-_');
      
      const rawName = parts[0]?.replace(/_/g, ' ') || "Structural Project";
      const rawLocation = parts[1]?.replace(/_/g, ' ') || "Site Location";

      const scrubAndFormat = (str) => {
        return str
          .replace(/\d+/g, '')             // REMOVE ALL DIGITS
          .replace(/[-_]/g, ' ')           // Clean symbols
          .replace(/\s+/g, ' ')            // Remove double spaces
          .trim()
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Title Case
          .join(' ');
      };

      return {
        name: scrubAndFormat(rawName),
        location: scrubAndFormat(rawLocation)
      };
    } catch (e) {
      return { name: "Steel Project", location: "Global" };
    }
  };

  const selectedProject = selectedCategory ? projectData.find(p => p.id === selectedCategory.id) : null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  };

  return (
    <main className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {!selectedCategory ? (
          /* --- CATEGORY GRID --- */
          <motion.section key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-48 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-slate-900 mb-6 text-center">Concept to Completion</h1>
                <div className="flex justify-center mb-10">
                   <div className="border-[1px] border-sky-400 bg-sky-50/50 px-8 py-2 rounded-full text-sky-700 font-bold uppercase tracking-[0.2em] text-sm">
                    Excellence Delivered • Steel Detailing Redefined
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {projectData.map((project) => (
                  <div key={project.id} onClick={() => { setSelectedCategory(project); setCurrentIndex(0); window.scrollTo(0,0); }} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl cursor-pointer">
                    <div className="h-64 relative overflow-hidden">
                      <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-10 text-center">
                      <h3 className="text-2xl font-bold text-slate-900 uppercase mb-4">{project.title}</h3>
                      <div className="flex items-center justify-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest">Explore Gallery <ChevronRight size={16} /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        ) : (
          /* --- PROJECT GALLERY VIEW --- */
          <motion.section key="gallery" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-56 pb-32 px-6">
            <div className="max-w-6xl mx-auto">
              {/* Back Button */}
              <button onClick={() => setSelectedCategory(null)} className="flex items-center gap-2 mb-8 text-slate-500 hover:text-slate-900 font-bold uppercase text-xs tracking-widest transition-all">
                <ArrowLeft size={18} /> Back to Projects
              </button>

              {/* IMAGE DISPLAY */}
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-slate-100 bg-white shadow-sm mb-6">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={selectedProject.gallery[currentIndex]}
                    className="w-full h-[400px] md:h-[650px] object-contain p-4 md:p-8"
                  />
                </AnimatePresence>
              </div>

              {/* LUXURY INFO BAR */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-slate-50/80 backdrop-blur-md border border-slate-100 rounded-[2rem] p-8 md:p-10 mb-8">
                <div className="flex flex-col gap-2 border-l-4 border-sky-500 pl-6">
                  <span className="text-sky-600 font-bold uppercase tracking-[0.3em] text-[10px]">Project Name</span>
                  <h3 className="text-slate-900 text-2xl md:text-3xl font-bold tracking-tight">
                    {getProjectDetails(selectedProject.gallery[currentIndex]).name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Job Site Name:</span>
                    <span className="text-slate-600 font-medium text-sm md:text-lg">
                      {getProjectDetails(selectedProject.gallery[currentIndex]).location}
                    </span>
                  </div>
                </div>

                {/* CONTROLS */}
                <div className="flex gap-4 ml-auto md:ml-0">
                  <button onClick={prevSlide} className="p-5 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all shadow-sm group">
                    <ChevronLeft size={28} className="text-slate-400 group-hover:text-slate-900" />
                  </button>
                  <button onClick={nextSlide} className="p-5 bg-sky-600 text-white rounded-2xl hover:bg-sky-700 transition-all shadow-lg">
                    <ChevronRight size={28} />
                  </button>
                </div>
              </div>

              {/* PROGRESS INDICATOR */}
              <div className="flex justify-center gap-2 overflow-x-auto py-4 scrollbar-hide">
                {selectedProject.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all flex-shrink-0 ${idx === currentIndex ? 'w-12 bg-sky-600' : 'w-3 bg-slate-200 hover:bg-slate-300'}`}
                  />
                ))}
              </div>

              {/* FOOTER CTA */}
              <div className="mt-20 pt-12 border-t border-slate-100 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-6">Interested in this project type?</p>
                <a href={mailtoHref} className="inline-block px-14 py-6 rounded-2xl bg-[#005bc4] text-white font-bold uppercase tracking-widest text-sm hover:bg-slate-900 transition-all shadow-xl hover:-translate-y-1">
                  Request a Quote
                </a>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}