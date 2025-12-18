import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import orangeslice from '../assets/images/orangeslice.png';
import apple from '../assets/images/apple.png';
import banana from '../assets/images/banana.png';
import grapes from '../assets/images/grapes.png';
import grapefruit from '../assets/images/grapefruit.png';
import watermelon from '../assets/images/watermelon.png';
import pear from '../assets/images/pear.png';
import broccoli from '../assets/images/broccoli.png';
import cauliflower from '../assets/images/cauliflower.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const fruitsRef = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      fruitsRef.current.forEach((fruit, i) => {
        if (fruit) {
          gsap.to(fruit, { 
            y: '+=30',          
            rotation: '+=15',    
            scale: 1.05,         
            duration: 2.5 + i * 0.4, 
            repeat: -1, 
            yoyo: true, 
            ease: 'sine.inOut' 
          });
        }
      });

      
      gsap.to(".fruit-element", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 800, 
        x: (i) => (i % 2 === 0 ? -60 : 60),
        opacity: 0.2,
        scale: 0.5,
        stagger: 0.05,
        ease: "power1.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const fruits = [
    { src: orangeslice, alt: 'Orange', top: '10%', left: '15%', zIndex: 5 },
    { src: apple, alt: 'Apple', top: '60%', left: '8%', zIndex: 10 },
    { src: banana, alt: 'Banana', top: '35%', left: '85%', zIndex: 7 },
    { src: grapes, alt: 'Grapes', top: '75%', left: '70%', zIndex: 9 },
    { src: grapefruit, alt: 'Grapefruit', top: '15%', left: '65%', zIndex: 8 },
    { src: watermelon, alt: 'Watermelon', top: '50%', left: '80%', zIndex: 6 }, 
    { src: pear, alt: 'Pear', top: '25%', left: '48%', zIndex: 4 },
    { src: broccoli, alt: 'Broccoli', top: '70%', left: '25%', zIndex: 11 },
    { src: cauliflower, alt: 'Cauliflower', top: '40%', left: '12%', zIndex: 3 }
  ];

  return (
    <div ref={heroRef} className="bg-[#FDFDF5] min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
     
      <div className="z-20 text-center max-w-3xl p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#222222] mb-4 leading-snug tracking-tighter">
        <span className="text-[#666666]">try </span>
          <span className="text-[#FC8A17]">Poppa. </span> 
        </h1>
        <p className="text-lg md:text-xl text-[#666666] mb-10 font-medium max-w-xl mx-auto">
          Everything your plate missed, in one gummy.
        </p>
      </div>

      {/* Fruits */}
      {fruits.map((fruit, index) => (
        <div 
          key={index} 
          ref={(el) => { fruitsRef.current[index] = el; }} 
          style={{
            position: 'absolute',
            top: fruit.top,
            left: fruit.left,
            zIndex: fruit.zIndex || 1, 
          }}
          className="fruit-element w-20 h-20 md:w-28 md:h-28 flex items-center justify-center" 
        >
          <img 
            src={fruit.src} 
            alt={fruit.alt} 
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>
      ))}
    </div>
  );
};

export default Hero;