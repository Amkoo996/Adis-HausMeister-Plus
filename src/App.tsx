/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Wrench, Camera, ArrowRight, CheckCircle2, Globe, Upload, ArrowUp, Star, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { translations, Language } from './translations';
import { useInView, motion, AnimatePresence } from 'framer-motion';

function VideoPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (ref.current) {
      if (isInView) {
        ref.current.play().catch(() => {});
      } else {
        ref.current.pause();
      }
    }
  }, [isInView]);

  return (
    <video 
      ref={ref}
      className="w-full h-auto aspect-video object-cover"
      muted 
      loop 
      playsInline
      controls
    >
      <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      Vaš preglednik ne podržava video tag.
    </video>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('bs');
  const t = translations[lang];

  const [customBefore, setCustomBefore] = useState<string | null>(null);
  const [customAfter, setCustomAfter] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [legalModal, setLegalModal] = useState<'imprint' | 'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (type === 'before') setCustomBefore(url);
      else setCustomAfter(url);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight leading-none">Adis HausMeister</span>
              <span className="text-blue-600 font-bold text-sm leading-none">PLUS</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#leistungen" className="text-sm font-medium hover:text-blue-600 transition-colors">{t.nav.services}</a>
            <a href="#galerie" className="text-sm font-medium hover:text-blue-600 transition-colors">{t.nav.gallery}</a>
            <a href="#bewertungen" className="text-sm font-medium hover:text-blue-600 transition-colors">{t.nav.reviews}</a>
            <a href="#kontakt" className="text-sm font-medium hover:text-blue-600 transition-colors">{t.nav.contact}</a>
            
            <div className="flex items-center gap-2 ml-4 border-l pl-4">
              <button onClick={() => setLang('bs')} className={`text-xl hover:scale-110 transition-transform ${lang === 'bs' ? 'opacity-100 grayscale-0' : 'opacity-50 grayscale'}`} title="Bosanski">🇧🇦</button>
              <button onClick={() => setLang('de')} className={`text-xl hover:scale-110 transition-transform ${lang === 'de' ? 'opacity-100 grayscale-0' : 'opacity-50 grayscale'}`} title="Deutsch">🇩🇪</button>
              <button onClick={() => setLang('en')} className={`text-xl hover:scale-110 transition-transform ${lang === 'en' ? 'opacity-100 grayscale-0' : 'opacity-50 grayscale'}`} title="English">🇬🇧</button>
            </div>
          </nav>
          <Button className="hidden md:inline-flex" onClick={() => window.location.href='#kontakt'}>
            {t.nav.quote}
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="./public/Gemini_Generated_Image_55kxp555kxp555kx.png" 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container relative z-10 px-4 md:px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              {t.hero.title1} <br className="hidden md:block" />
              <span className="text-blue-400">{t.hero.title2}</span>
            </h1>
            <p className="text-lg md:text-xl max-w-[600px] mx-auto mb-8 text-gray-200">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.location.href='#kontakt'}>
                {t.hero.cta1}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white" onClick={() => window.location.href='#galerie'}>
                {t.hero.cta2}
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="leistungen" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t.services.title}</h2>
              <p className="text-gray-500 max-w-[600px] mx-auto">
                {t.services.subtitle}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{t.services.s1.title}</CardTitle>
                    <CardDescription>{t.services.s1.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {t.services.s1.items.map((item, i) => (
                        <li key={i} className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-blue-600" /> {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{t.services.s2.title}</CardTitle>
                    <CardDescription>{t.services.s2.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {t.services.s2.items.map((item, i) => (
                        <li key={i} className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-blue-600" /> {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{t.services.s3.title}</CardTitle>
                    <CardDescription>{t.services.s3.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {t.services.s3.items.map((item, i) => (
                        <li key={i} className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-blue-600" /> {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Naš Rad u Praksi</h2>
              <p className="text-gray-400 max-w-[600px] mx-auto">
                Pogledajte kako izgleda naš proces rada.
              </p>
            </div>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <VideoPlayer />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galerie" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t.gallery.title}</h2>
              <p className="text-gray-500 max-w-[600px] mx-auto">
                {t.gallery.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <BeforeAfterSlider 
                    beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
                    afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                    beforeLabel="Prije"
                    afterLabel="Poslije"
                  />
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <BeforeAfterSlider 
                    beforeImage="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=1000&auto=format&fit=crop"
                    afterImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop"
                    beforeLabel="Prije"
                    afterLabel="Poslije"
                  />
                </div>
              </div>
            </div>

            {/* Custom Before/After Upload */}
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-16">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">{t.gallery.customTitle}</h3>
                <p className="text-gray-500 text-sm">{t.gallery.customDesc}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors relative h-32">
                  <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" onChange={(e) => handleImageUpload(e, 'before')} />
                  <Upload className="h-6 w-6 text-gray-400 mb-2" />
                  <span className="text-sm font-medium text-gray-600">{t.gallery.uploadBefore}</span>
                  {customBefore && <span className="text-xs text-green-600 mt-1">✓ Učitano</span>}
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors relative h-32">
                  <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" onChange={(e) => handleImageUpload(e, 'after')} />
                  <Upload className="h-6 w-6 text-gray-400 mb-2" />
                  <span className="text-sm font-medium text-gray-600">{t.gallery.uploadAfter}</span>
                  {customAfter && <span className="text-xs text-green-600 mt-1">✓ Učitano</span>}
                </div>
              </div>

              {customBefore && customAfter && (
                <div className="rounded-xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden">
                    <BeforeAfterSlider 
                      beforeImage={customBefore}
                      afterImage={customAfter}
                      beforeLabel="Prije"
                      afterLabel="Poslije"
                    />
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Testimonials Section */}
        <section id="bewertungen" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t.testimonials.title}</h2>
              <p className="text-gray-500 max-w-[600px] mx-auto">
                {t.testimonials.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.testimonials.reviewsList?.map((review, idx) => (
                <Card key={idx} className="bg-gray-50 border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm mb-4 italic">"{review.comment}"</p>
                    <p className="font-semibold text-sm">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t.faq.title}</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { q: t.faq.q1, a: t.faq.a1 },
                { q: t.faq.q2, a: t.faq.a2 },
                { q: t.faq.q3, a: t.faq.a3 }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    {faq.q}
                    {openFaq === idx ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-4 text-gray-600 text-sm"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">{t.contact.title}</h2>
                <p className="text-gray-500 mb-8">
                  {t.contact.subtitle}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold">{t.contact.phone}</h4>
                      <p className="text-gray-600">+4915206323951</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold">{t.contact.email}</h4>
                      <p className="text-gray-600">pupalovic1@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold">{t.contact.area}</h4>
                      <p className="text-gray-600">{t.contact.areaDesc}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-semibold mb-2">{t.contact.workingHours}</h4>
                    <p className="text-gray-600 text-sm">{t.contact.hours1}</p>
                    <p className="text-gray-600 text-sm">{t.contact.hours2}</p>
                    <p className="text-blue-600 font-medium text-sm mt-2">{t.contact.emergency}</p>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>{t.contact.formTitle}</CardTitle>
                  <CardDescription>{t.contact.formDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={(e) => { 
                    e.preventDefault(); 
                    setIsSubmitting(true);
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setIsSuccess(true);
                      setTimeout(() => setIsSuccess(false), 5000);
                    }, 1500);
                  }}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">{t.contact.fname}</label>
                        <Input required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">{t.contact.lname}</label>
                        <Input required />
                      </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">{t.contact.tel}</label>
                        <Input type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.contact.desc}</label>
                      <Textarea className="min-h-[120px]" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.contact.file}</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer relative">
                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" multiple />
                        <Camera className="h-8 w-8 mb-2 text-gray-400" />
                        <span className="text-sm">{t.contact.file}</span>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting || isSuccess}>
                      {isSubmitting ? "..." : isSuccess ? t.contact.success : t.contact.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight leading-none text-white">Adis HausMeister</span>
                <span className="text-blue-500 font-bold text-sm leading-none">PLUS</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.links}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#leistungen" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#galerie" className="hover:text-white transition-colors">{t.nav.gallery}</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setLegalModal('imprint')} className="hover:text-white transition-colors">{t.footer.imprint}</button></li>
              <li><button onClick={() => setLegalModal('privacy')} className="hover:text-white transition-colors">{t.footer.privacy}</button></li>
              <li><button onClick={() => setLegalModal('terms')} className="hover:text-white transition-colors">{t.footer.terms}</button></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Adis HausMeister Plus. {t.footer.rights}
        </div>
      </footer>

      {/* Legal Modals */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-xl font-bold">{t.legal[legalModal].title}</h3>
                <button onClick={() => setLegalModal(null)} className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto whitespace-pre-wrap text-sm text-gray-700">
                {t.legal[legalModal].content}
              </div>
              <div className="p-4 border-t bg-gray-50 flex justify-end">
                <Button onClick={() => setLegalModal(null)} variant="outline">Zatvori</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
