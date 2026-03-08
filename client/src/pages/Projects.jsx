import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Settings, Users, 
  ShoppingBag, Factory, ChevronRight, 
  ChevronLeft, ArrowLeft, ShieldCheck,GraduationCap
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
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772793048/ALVIN_DARK_STADIUM-_LAKE_CHARLES_LA_70601_1_fes9bd.png",
      
    ]
  },
  {
    id: "institutional",
    title: "Institutional Buildings",
    desc: "Reliable detailing and engineering support for educational, healthcare, and public institutions, ensuring well-coordinated structural systems, safety compliance, and long-term functionality for large-scale facilities.",
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
      "https://res.cloudinary.com/dyxijlh28/image/upload/v1772867523/ATHLETIC_ACADEMIC_CENTER_-_RUSTON_LOUISIANA_3_eglgep.png",
  
    ]
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedProject = selectedCategory ? projectData.find(p => p.id === selectedCategory.id) : null;

  const nextSlide = () => {
    const galleryLength = selectedProject?.gallery.length || 1;
    setCurrentIndex((prev) => (prev + 1) % galleryLength);
  };

  const prevSlide = () => {
    const galleryLength = selectedProject?.gallery.length || 1;
    setCurrentIndex((prev) => (prev - 1 + galleryLength) % galleryLength);
  };

  return (
    <main className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {!selectedCategory ? (
          /* --- CATEGORY GRID VIEW --- */
          <motion.section
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-32 px-6"
          >
            <div className="max-w-7xl mx-auto">
              {/* Simple Intro */}
              {/* Header following SDS2 Badge style */}
            <section className="pt-40 pb-20 px-6">
              <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-slate-900 mb-6">
                  Concept to Completion
                </h1>
                <div className="flex justify-center mb-10">
                  <div className="border-[1px] border-sky-400 bg-sky-50/50 px-8 py-2 rounded-full text-sky-700 font-bold uppercase tracking-[0.2em] text-sm">
                    Excellence Delivered • Steel Detailing Redefined
                  </div>
                </div>
                <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
                  Our projects speak for themselves. At Keeves Steel, we take pride in delivering 
                  precision-driven structural steel detailing for Structural, Miscellaneous, 
                  Public, Commercial, and Industrial sectors.
                </p>
              </div>
            </section>

              {/* Category Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {projectData.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(project);
                      setCurrentIndex(0);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="h-64 relative overflow-hidden">
                      <img 
                        src={project.mainImage} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/50 group-hover:scale-110 transition-all duration-300">
                        <project.icon className="text-sky-600" size={28} />
                      </div>
                    </div>
                    <div className="p-10">
                      <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-4">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed mb-8 min-h-[80px] text-sm">
                        {project.desc}
                      </p>
                      <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                        Explore Details 
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ) : (
          /* --- PROJECT GALLERY VIEW --- */
          <motion.section
            key="gallery"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="pt-32 pb-32 px-6"
          >
            <div className="max-w-5xl mx-auto">
              {/* Back Button */}
              <motion.button 
                onClick={() => setSelectedCategory(null)}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 mb-12 text-slate-500 hover:text-slate-900 font-semibold uppercase text-sm tracking-wider transition-all group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </motion.button>

              {/* Project Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 bg-sky-500/10 border border-sky-500/30 px-6 py-3 rounded-full mb-6">
                  <selectedCategory.icon className="text-sky-600 w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-sky-700 text-sm">{selectedCategory.title}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-slate-900 mb-6">
                  {selectedCategory.title}
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  {selectedCategory.desc}
                </p>
              </div>

              {/* Main Gallery Image */}
              <div className="relative mb-16 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100/50 bg-slate-50/50">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentIndex}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.1, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={selectedProject.gallery[currentIndex]}
                    alt={`${selectedCategory.title} - Image ${currentIndex + 1}`}
                    className="w-full h-[500px] md:h-[600px] object-contain p-8"
                  />
                </AnimatePresence>
                
                {/* Branding Overlay */}
               
              </div>

              {/* Gallery Controls */}
              <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-20">
                {/* Thumbnail Dots */}
                <div className="flex gap-3 flex-wrap justify-center">
                  {selectedProject.gallery.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-4 h-4 rounded-full transition-all ${
                        idx === currentIndex 
                          ? 'bg-sky-600 shadow-lg shadow-sky-500/50 scale-125' 
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-4">
                  <motion.button 
                    onClick={prevSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all flex items-center justify-center"
                  >
                    <ChevronLeft className="text-slate-700 w-6 h-6" />
                  </motion.button>
                  
                  <motion.button 
                    onClick={nextSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-20 border-t border-slate-100">
                <h3 className="text-3xl font-bold uppercase tracking-tight text-slate-900 mb-6">
                  Ready for {selectedCategory.title}?
                </h3>
                <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
                  Our engineers deliver precision detailing that exceeds industry standards.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-12 py-6 rounded-3xl font-bold uppercase tracking-[0.2em] text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  Request Quote
                </motion.button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
