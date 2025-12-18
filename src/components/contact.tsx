import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.reveal', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
          },
        }
      );
    }, contactRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={contactRef} className="py-32 px-6 bg-[#FDFDF5] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="reveal">
              <h2 className="text-sm font-bold tracking-[0.4em] text-[#FC8A17] uppercase mb-6">
                Got a message?
              </h2>
              <h3 className="text-6xl md:text-8xl font-black text-[#666666] leading-[0.9] tracking-tighter">
                say <br />
                <span className="text-[#FC8A17]">Hello.</span>
              </h3>
            </div>

            <div className="reveal space-y-8 pt-12 border-t border-[#666666]/10">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-[#FC8A17] uppercase mb-2">Direct Channel</p>
                <p className="text-2xl font-bold text-[#666666]">hello@poppavitaminsnigeria.com</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-[#FC8A17] uppercase mb-2">Voice</p>
                <p className="text-2xl font-bold text-[#666666]">+234 913 456 7890</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-[#FC8A17] uppercase mb-2">Headquarters</p>
                <p className="text-2xl font-bold text-[#666666]">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-12 md:p-20 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.03)] reveal">
            <form className="space-y-10">
              <div className="relative border-b-2 border-[#666666]/10 focus-within:border-[#FC8A17] transition-colors pb-4">
                <label className="text-[10px] font-black text-[#FC8A17] uppercase tracking-widest">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent text-xl font-bold text-[#666666] outline-none mt-2 placeholder:text-[#666666]/20"
                  placeholder="Enter your name"
                />
              </div>

              <div className="relative border-b-2 border-[#666666]/10 focus-within:border-[#FC8A17] transition-colors pb-4">
                <label className="text-[10px] font-black text-[#FC8A17] uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-xl font-bold text-[#666666] outline-none mt-2 placeholder:text-[#666666]/20"
                  placeholder="name@email.com"
                />
              </div>

              <div className="relative border-b-2 border-[#666666]/10 focus-within:border-[#FC8A17] transition-colors pb-4">
                <label className="text-[10px] font-black text-[#FC8A17] uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent text-xl font-bold text-[#666666] outline-none mt-2 resize-none placeholder:text-[#666666]/20"
                  placeholder="Describe your inquiry"
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center justify-between w-full md:w-auto md:min-w-60 bg-[#FC8A17] text-white px-10 py-6 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(252,138,23,0.3)]"
              >
                <span className="relative z-10 font-black text-lg tracking-tight uppercase">Talk to Us</span>
                <div className="absolute inset-0 bg-[#666666] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;