'use client';
import React from 'react';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-slate-900 mb-6">
            GET IN <br /><span className="text-sky-700 font-light italic">TOUCH</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            Have a project in mind? Let's discuss how our precision detailing can move your construction forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <Mail className="text-sky-600 mb-4" size={32} />
                <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Email Us</h3>
                <a href="mailto:office@keevessteel.com" className="text-slate-600 hover:text-sky-600 transition-colors">
                  office@keevessteel.com
                </a>
              </div>
              
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <Clock className="text-sky-600 mb-4" size={32} />
                <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Working Hours</h3>
                <p className="text-slate-600">Mon - Fri: 8AM - 5PM</p>
              </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-[3rem] text-white shadow-2xl">
              <MapPin className="text-sky-400 mb-4" size={32} />
              <h3 className="font-bold uppercase tracking-widest text-sm mb-2 text-sky-300">Our Location</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Available for projects across <br />
                the United States & Internationally.
              </p>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-white p-2 rounded-[3rem] border border-slate-200 shadow-xl">
            <form className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2">Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2">Email</label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2">Message</label>
                <textarea rows="4" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full py-5 bg-[#005bc4] text-white rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-lg">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}