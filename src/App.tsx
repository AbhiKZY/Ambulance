/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  Snowflake, 
  Wind, 
  MapPin, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  Menu,
  X,
  PhoneCall,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  ChevronRight,
  Award,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  primary: '#b91c1c', // red-700
  secondary: '#0f172a', // slate-900
  accent: '#f8fafc', // slate-50
};

const StatBlock = ({ label, value, isRed }: { label: string; value: string; isRed?: boolean }) => (
  <motion.div 
    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
    className="p-4 md:p-8 flex flex-col items-center justify-center text-center transition-colors"
  >
    <motion.span 
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tighter ${isRed ? 'text-red-500' : 'text-white'}`}
    >
      {value}
    </motion.span>
    <span className="text-[8px] md:text-[10px] uppercase tracking-wider md:tracking-[0.2em] opacity-60 mt-1 md:mt-2 font-bold max-w-[120px] md:max-w-none">
      {label}
    </span>
  </motion.div>
);

const FacilityItem = ({ en, ml, index }: { en: string; ml: string; index: number }) => (
  <motion.li 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors"
  >
    <div className="mt-2 w-3 h-3 bg-red-700 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
    <div>
      <p className="text-xl font-black text-slate-900 leading-tight uppercase tracking-tight group-hover:text-red-700 transition-colors">{en}</p>
      <p className="text-lg font-bold text-red-700 font-sans mt-0.5">{ml}</p>
    </div>
  </motion.li>
);

const TestimonialCard = ({ name, role, text }: { name: string; role: string; text: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative"
  >
    <QuoteIcon className="absolute top-6 right-8 text-slate-100 w-12 h-12" />
    <div className="flex items-center space-x-1 mb-6">
      {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} className="w-4 h-4 text-orange-400 fill-current" />)}
    </div>
    <p className="text-slate-600 mb-8 font-medium italic">"{text}"</p>
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">
        {name[0]}
      </div>
      <div>
        <h4 className="font-black text-slate-900 uppercase tracking-tight text-sm">{name}</h4>
        <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">{role}</p>
      </div>
    </div>
  </motion.div>
);

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44771 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.01701 8.44771 5.01701 9V12C5.01701 12.5523 4.56929 13 4.01701 13H2V21H5.017Z" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const phoneNumber = "8086503053";
  const ownerName = "കരീം (Kareem)";

  const faqs = [
    { q: "Is the service available at night?", a: "Yes, we operate 24/7 including midnight and early mornings for emergency medical transport." },
    { q: "Do you have a mobile freezer?", a: "Absolutely. We have a dedicated mobile freezer unit for handling sensitive transport requests." },
    { q: "What areas do you cover?", a: "We primarily serve Karipur and surrounding regions, but we provide long-distance services across Kerala and neighboring states." },
    { q: "How fast can you arrive?", a: "Response time depends on traffic and distance, but we prioritize emergency calls and aim for under 15-20 minutes in our core area." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-900 flex flex-col box-border">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] border-[50px] border-red-700 rounded-full"
        />
      </div>

      {/* Header Bar */}
      <header className="bg-red-700 text-white p-6 md:px-12 flex justify-between items-center shadow-xl relative z-50">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-6"
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="bg-white text-red-700 w-14 h-14 rounded-full flex items-center justify-center font-black text-4xl shadow-inner cursor-pointer"
          >
            +
          </motion.div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter leading-none uppercase italic">NHRAC AMBULANCE</h1>
            <p className="text-[10px] md:text-xs tracking-[0.2em] opacity-80 uppercase font-black mt-1">National Human Rights Anti Corruption Association</p>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-12">
          <div className="text-right">
            <p className="text-[10px] font-black opacity-70 tracking-widest uppercase mb-1">24/7 SUPPORT</p>
            <a href={`tel:${phoneNumber}`} className="text-3xl font-black tracking-tighter hover:text-red-100 transition-colors flex items-center">
              <Phone className="w-6 h-6 mr-3 text-red-300" />
              {phoneNumber}
            </a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(`https://wa.me/91${phoneNumber}`, '_blank')}
            className="bg-white text-red-700 p-4 rounded-xl shadow-lg border border-red-100 flex items-center justify-center group"
          >
            <MessageCircle className="w-6 h-6 group-hover:text-green-600 transition-colors" />
          </motion.button>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </header>

      {/* Mobile Menu Content Remains Same but with better styling */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-red-700/95 backdrop-blur-xl p-8 flex flex-col text-white"
          >
            <div className="flex justify-between items-center">
              <span className="font-black tracking-tighter text-2xl">NHRAC</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 border-2 border-white/20 rounded-full hover:bg-white/10"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col space-y-10 mt-20 items-center text-center">
              {[
                { label: 'Facilities', href: '#services' },
                { label: 'About Owner', href: '#about' },
                { label: 'Contact', href: '#contact' }
              ].map(link => (
                <a 
                  key={link.label}
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-5xl font-black uppercase tracking-tighter hover:text-red-200 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${phoneNumber}`} className="bg-white text-red-700 w-full py-6 rounded-sm text-3xl font-black shadow-2xl flex items-center justify-center space-x-4 mt-8">
                <PhoneCall className="w-8 h-8" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col relative z-10 overflow-x-hidden">
        {/* Banner with extra motion */}
        <section className="bg-slate-950 overflow-hidden py-3 border-b border-slate-800">
          <div className="flex whitespace-nowrap overflow-hidden group">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center space-x-12 px-6"
            >
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex items-center space-x-4">
                  <span className="text-red-600 font-black text-xl">•</span>
                  <span className="text-white font-bold tracking-widest uppercase text-xs md:text-sm">24/7 Emergency Service AVAILABLE</span>
                  <span className="text-white/40 font-bold tracking-widest uppercase text-xs md:text-sm">BEST RATES ACROSS KERALA</span>
                  <span className="text-white font-bold tracking-widest uppercase text-xs md:text-sm">FREEZER & OXYGEN SUPPORT</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Hero Section Enhanced */}
        <section className="flex-1 grid lg:grid-cols-12 bg-white min-h-[600px] border-b border-slate-100">
          <div className="lg:col-span-7 p-8 lg:p-24 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-5" />
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="border-l-[12px] md:border-l-[20px] border-red-700 pl-6 md:pl-16 relative z-10"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase mb-6 md:mb-8">
                National <br/>
                Human Rights <br/>
                <span className="text-red-700">Anti Corruption <br className="hidden sm:block" /> Ambulance</span>
              </h2>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <p className="text-xl sm:text-2xl lg:text-4xl text-slate-800 font-black italic tracking-tight leading-tight">
                    നാഷണൽ ഹ്യൂമൻ റൈറ്റ്സ് <span className="text-red-700 uppercase">ആന്റി കറപ്ഷൻ ആംബുലൻസ്</span>
                  </p>
                </div>
                <div className="flex items-center space-x-3 bg-slate-50 border border-slate-100 p-3 md:p-4 rounded-xl w-fit">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-red-700 shrink-0" />
                  <p className="text-lg md:text-2xl text-slate-500 font-bold font-sans line-clamp-2 md:line-clamp-none">
                    മിതമായ നിരക്കിൽ 24 മണിക്കൂറും സർവീസ്.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 md:mt-16 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-8"
            >
              <a 
                href={`tel:${phoneNumber}`} 
                className="group bg-red-700 text-white px-8 md:px-12 py-5 md:py-8 rounded-sm font-black text-xl md:text-3xl flex items-center justify-center shadow-2xl hover:bg-black transition-all transform hover:-translate-y-1"
              >
                <Phone className="w-6 h-6 md:w-10 md:h-10 mr-4 md:mr-6 group-hover:rotate-12 transition-transform" fill="currentColor" />
                ഇപ്പൊൾ വിളിക്കുക
              </a>
              <div className="bg-slate-50 border-t-2 md:border-t-0 md:border-l-4 border-slate-900 px-8 py-4 md:py-6 rounded-sm flex flex-col justify-center">
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Service Leader / ഉടമ</span>
                <span className="text-xl md:text-3xl font-black text-slate-900 italic tracking-tighter">{ownerName}</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 flex items-center justify-center p-8 lg:p-20 relative overflow-hidden border-l border-slate-100">
            <div className="absolute top-0 right-0 w-full h-full bg-grid-slate-100 opacity-20" />
            <motion.div 
              style={{ rotateZ: -2 }}
              className="absolute top-10 left-10 w-24 h-24 border-t-8 border-l-8 border-red-700/10" 
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="relative bg-white p-12 lg:p-16 rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200 w-full max-w-xl z-10"
            >
              <div className="flex items-center space-x-6 mb-12 border-b border-slate-100 pb-10">
                <div className="w-20 h-20 bg-red-700 rounded-2xl flex items-center justify-center shadow-xl shadow-red-200">
                  <ShieldCheck className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-3xl text-slate-800 uppercase tracking-tighter leading-none">Premium <br/> Facilities</h3>
                  <p className="text-red-700 font-bold uppercase text-[10px] tracking-widest mt-2">അത്യാധുനിക സൗകര്യങ്ങൾ</p>
                </div>
              </div>
              
              <ul className="space-y-8">
                {[
                  { en: "Medical Freezer", ml: "ഫ്രീസർ സൗകര്യം", icon: Snowflake },
                  { en: "Emergency Oxygen", ml: "ഓക്സിജൻ സൗകര്യം", icon: Wind },
                  { en: "24/7 Professional Staff", ml: "സ്റ്റാഫ് സേവനം 24 മണിക്കൂറും", icon: Users },
                  { en: "Long Distance Specialist", ml: "ദീർഘദൂര യാത്രകൾക്ക് മികച്ച നിരക്ക്", icon: MapPin }
                ].map((item, idx) => (
                  <FacilityItem key={idx} index={idx} en={item.en} ml={item.ml} />
                ))}
              </ul>

              <div className="mt-12 p-6 bg-red-50 rounded-2xl border border-red-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-red-700 uppercase tracking-widest">Verified Badge</p>
                  <p className="text-slate-900 font-black tracking-tight italic">NHRAC Certified Service</p>
                </div>
                <Award className="w-10 h-10 text-red-700 opacity-30" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar Enhanced */}
        <section className="bg-slate-950 text-white grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-800 border-y border-slate-900">
          <StatBlock label="Available Night & Day" value="24/7" />
          <StatBlock label="Mobile Medical Freezer" value="SUPPORT" isRed />
          <StatBlock label="Continuous Oxygen" value="HIGH-FLOW" />
          <StatBlock label="Emergency Priority" value="URGENT" />
        </section>

        {/* New: Why Choose Us Section */}
        <section id="services" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h4 className="text-red-700 font-black uppercase text-xs tracking-[0.3em]">Quality Matters</h4>
                  <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none italic uppercase">Reliability is our <br/> Promise</h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                    We understand that in medical emergencies, every second counts. That's why we maintain our vehicles to the highest standards.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { title: "Safe Transport", text: "Compassionate bedside to bedside care.", icon: Heart },
                    { title: "Clean Units", text: "Hygienic and sanitized ambulance units.", icon: CheckCircle2 },
                    { title: "Fast Arrival", text: "Quick deployment via GPS routing.", icon: MapPin },
                    { title: "Expert Drive", text: "Years of experience in medical dispatch.", icon: Award }
                  ].map((feat, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-red-700 group-hover:text-white transition-all cursor-default">
                        <feat.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">{feat.title}</h4>
                        <p className="text-slate-400 text-xs mt-1">{feat.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 bg-slate-100 rounded-[50px] rotate-3 -z-10" />
                <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-slate-100 relative">
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="text-2xl font-black tracking-tighter uppercase italic">Frequently Asked</h3>
                    <HelpCircle className="w-8 h-8 text-slate-200" />
                  </div>
                  <div className="space-y-6">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border-b border-slate-50 pb-6 last:border-0 last:pb-0">
                        <button 
                          onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                          className="w-full flex items-center justify-between group"
                        >
                          <span className={`${activeFaq === i ? 'text-red-700' : 'text-slate-800'} font-bold text-left transition-colors`}>{faq.q}</span>
                          <motion.div
                            animate={{ rotate: activeFaq === i ? 90 : 0 }}
                          >
                            <ChevronRight className={`w-5 h-5 ${activeFaq === i ? 'text-red-700' : 'text-slate-300'}`} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {activeFaq === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-slate-500 text-sm mt-4 leading-relaxed font-medium">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Visual Enhanced */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              {/* Decorative Map SVG Pattern */}
              <div className="bg-white rounded-[40px] p-12 shadow-inner border border-slate-200 aspect-square flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M10,20 Q30,10 50,20 T90,20 M10,40 Q30,30 50,40 T90,40 M10,60 Q30,50 50,60 T90,60 M10,80 Q30,70 50,80 T90,80" />
                    <path d="M20,10 Q10,30 20,50 T20,90 M40,10 Q30,30 40,50 T40,90 M60,10 Q50,30 60,50 T60,90 M80,10 Q70,30 80,50 T80,90" />
                  </svg>
                </div>
                <div className="relative text-center">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white shadow-2xl shadow-red-500 mx-auto mb-6"
                  >
                    <MapPin className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-2">Base Location</h3>
                  <p className="text-red-700 font-sans font-black text-4xl">Karipur (കരിപ്പൂർ)</p>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-4 italic">Serving Malappuram, Calicut & Beyond</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none italic uppercase">Covering Wide <br/> Distance</h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  While our roots are in Karipur, our service extends to all corners. From short local transfers to inter-state medical journeys, we have you covered.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { place: "Karipur & Calicut Airport", dist: "Primary Area" },
                  { place: "Malappuram District", dist: "Quick Support" },
                  { place: "State-wide (Kerala)", dist: "24/7 Available" },
                  { place: "Interstate Support", dist: "Pre-Booking Available" }
                ].map((loc, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-red-200 transition-colors cursor-default">
                    <span className="font-black text-slate-900 uppercase tracking-tight italic group-hover:text-red-700 transition-colors">{loc.place}</span>
                    <span className="text-[10px] bg-slate-50 px-3 py-1 rounded-full font-black text-slate-400 uppercase tracking-widest">{loc.dist}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
               <h4 className="text-red-700 font-black uppercase text-xs tracking-[0.3em]">Patient Stories</h4>
               <h2 className="text-5xl font-black tracking-tighter italic uppercase text-slate-900">Voices of trust</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard 
                name="Siddique K." 
                role="Calicut Resident" 
                text="The freezer facility was exactly what we needed during a difficult time. Kareem was very professional and patient throughout the journey." 
              />
              <TestimonialCard 
                name="Deepu Thomas" 
                role="Kochi" 
                text="Highly recommended for long-distance transport. The oxygen support was continuous and the vehicle was very comfortable for the patient." 
              />
              <TestimonialCard 
                name="Mohammed Ali" 
                role="Local Resident" 
                text="Quick response time. We called at 2 AM and they were there in less than 15 minutes. Very reliable service." 
              />
            </div>
          </div>
        </section>

        {/* Big CTA */}
        <section id="contact" className="py-20 md:py-32 bg-red-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-black skew-x-12 translate-x-20 hidden lg:block" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-8 text-white">
                <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.8] uppercase">
                  SAVE A <br className="hidden xs:block" /> LIFE. <br className="hidden xs:block" /> CALL US.
                </h2>
                <div className="p-6 md:p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                  <div className="flex flex-col xs:flex-row items-center xs:items-start space-y-4 xs:space-y-0 xs:space-x-6 mb-8 text-center xs:text-left">
                    <div className="p-4 md:p-5 bg-white rounded-2xl shrink-0">
                      <PhoneCall className="w-8 h-8 md:w-12 md:h-12 text-red-700" />
                    </div>
                    <div>
                      <p className="text-3xl md:text-5xl font-black tracking-tighter italic leading-none">{phoneNumber}</p>
                      <p className="text-white/60 font-medium uppercase tracking-widest text-[10px] md:text-xs mt-2">Professional 24hr Emergency Hotline</p>
                    </div>
                  </div>
                  <div className="flex space-x-3 md:space-x-4">
                    <button 
                      onClick={() => window.location.href = `tel:${phoneNumber}`}
                      className="flex-1 bg-white text-red-700 font-black py-4 md:py-6 rounded-xl text-lg md:text-xl uppercase italic shadow-2xl hover:bg-slate-100 transition-colors"
                    >
                      Instant Call
                    </button>
                    <button 
                      onClick={() => window.open(`https://wa.me/91${phoneNumber}`, '_blank')}
                      className="w-16 md:w-24 bg-green-500 text-white flex items-center justify-center rounded-xl hover:bg-green-600 transition-colors shadow-2xl"
                    >
                      <MessageCircle className="w-6 h-6 md:w-10 md:h-10" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <motion.div 
                  initial={{ rotate: -5, y: 100 }}
                  animate={{ rotate: 0, y: 0 }}
                  className="bg-slate-900 p-2 rounded-[50px] shadow-2xl skew-y-2 border-8 border-white/10"
                >
                  <div className="p-12 bg-slate-950 rounded-[40px] text-white">
                    <ShieldCheck className="w-20 h-20 text-red-600 mb-8" />
                    <h3 className="text-4xl font-black tracking-tighter uppercase italic mb-6">Verified by NHRAC Association</h3>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">
                      We are official members of the National Human Rights Anti Corruption Association, ensuring ethical and humanitarian standards in every trip.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700" />
                      <div className="w-20 h-2 bg-slate-800 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Bar Enhanced */}
      <footer className="bg-slate-950 text-white p-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic tracking-tighter">NATIONAL AMBULANCE</h2>
            <div className="text-slate-500 text-sm max-w-sm">
              &copy; 2026 National Human Rights Anti Corruption Ambulance. <br/>
              Serving humanity with speed and care. Karipur, India.
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Contact</p>
              <p className="font-bold text-white uppercase italic">{phoneNumber}</p>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Owner</p>
              <p className="font-bold text-white italic">{ownerName}</p>
            </div>
            <div className="space-y-4 hidden md:block">
              <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Status</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="font-black text-green-500 uppercase italic text-sm tracking-tight transition-colors">Always On</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-12 border-t border-slate-900 text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
           Designed with care for medical emergencies. Call in case of immediate need.
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-10 right-10 z-[100] flex flex-col gap-4 pointer-events-none"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.location.href = `tel:${phoneNumber}`}
          className="w-20 h-20 bg-red-700 text-white rounded-2xl shadow-2xl flex items-center justify-center pointer-events-auto border-4 border-white animate-bounce"
        >
          <PhoneCall className="w-10 h-10" />
        </motion.button>
      </motion.div>
    </div>
  );
}
