import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Ingredients = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        ".glass-card",
        {
          y: 60,
          opacity: 0, 
        },
        {
          y: 0,
          opacity: 1, 
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.to(card, {
            y: "-=15",
            duration: 2 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ingredients = [
    { name: "ACAI BERRY, BANANA", benefit: "Rich in anthocyanins for skin & heart health", tag: "ANTIOXIDANT" },
    { name: "BROCCOLI, WATERMELON", benefit: "High in Sulforaphane and Vitamin K", tag: "DETOX" },
    { name: "GELATIN, APPLE", benefit: "Vegan, Optimised with vitamin A", tag: "COLLAGEN" },
    { name: "CITRUS, POMEGRANATE", benefit: "Natural anti-inflammatory properties", tag: "RECOVERY" },
    { name: "SPINACH, WHEAT", benefit: "Packed with iron and magnesium for energy", tag: "FIBRE" },
    { name: "BEETROOT, GRAPES", benefit: "Supports healthy blood flow and stamina", tag: "NITRATES" },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-[#FDFDF5] relative overflow-hidden min-h-screen">
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-100/30 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#FC8A17] uppercase mb-4">
            The Poppa Composition
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-[#666666] tracking-tighter leading-none">
            Purely sourced.<br />
          </h3>
          <h3 className="text-5xl md:text-7xl font-black text-[#FC8A17] tracking-tighter leading-none">
            Scientifically balanced.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((item, i) => (
            <div
              key={i}
              
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="glass-card group relative p-10 rounded-[3rem] bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  {item.tag}
                </span>
                <h4 className="text-2xl font-black text-[#666666] mt-2 mb-4 tracking-tight">
                  {item.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {item.benefit}
                </p>
              </div>

              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-linear-to-br from-white/0 to-white/60 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;