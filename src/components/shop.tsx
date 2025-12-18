import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bottleImg from '../assets/images/gummiesbottle.png';

gsap.registerPlugin(ScrollTrigger);

const Shop = () => {
  const [isSubscription, setIsSubscription] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const shopRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        ".shop-content",
        {
          y: 40,
          opacity: 0, 
        },
        {
          y: 0,
          opacity: 1, 
          duration: 1,
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: shopRef.current,
            start: "top 80%",
          },
        }
      );
    }, shopRef); 

    return () => ctx.revert(); 
  }, []);

  return (
    
    <section ref={shopRef} className="py-24 px-6 bg-white overflow-hidden min-h-[80vh]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        
        <div className="shop-content relative flex justify-center">
          <div className="absolute inset-0 bg-orange-100/50 rounded-full blur-3xl scale-75" />
          <img 
            src={bottleImg} 
            alt="Poppa Gummies" 
            className="relative z-10 w-full max-w-md drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        
        <div className="shop-content">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex text-yellow-400">★★★★★</div>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">300+ Happy Customers</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-[#222222] mb-4 tracking-tighter">
            The Daily  <br />
            <span className="text-[#FC8A17]">Essential Gummy</span>
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            A 30-day supply of nature's best. No synthetic fillers, just pure fruit and veggie power.
          </p>

         
          <div className="space-y-3 mb-8">
            <button 
              onClick={() => setIsSubscription(true)}
              className={`w-full p-5 rounded-2xl border-2 flex justify-between items-center transition-all ${
                isSubscription ? 'border-[#FC8A17] bg-orange-50/50' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="text-left">
                <span className="block font-bold text-[#222222]">Subscribe & Save</span>
                <span className="text-sm text-orange-600 font-bold">Save 20% + Free Shipping</span>
              </div>
              <span className="text-2xl font-black text-[#222222]">₦24,999</span>
            </button>

            <button 
              onClick={() => setIsSubscription(false)}
              className={`w-full p-5 rounded-2xl border-2 flex justify-between items-center transition-all ${
                !isSubscription ? 'border-[#FC8A17] bg-orange-50/50' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="text-left">
                <span className="block font-bold text-[#222222]">One-time Purchase</span>
                <span className="text-sm text-gray-500">Standard delivery</span>
              </div>
              <span className="text-2xl font-black text-[#222222]">₦30,999</span>
            </button>
          </div>

         
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center border-2 border-gray-100 rounded-2xl p-2 px-4 space-x-6">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-2xl font-bold text-gray-400 hover:text-[#222222]">-</button>
              <span className="text-xl font-bold w-4 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-2xl font-bold text-gray-400 hover:text-[#222222]">+</button>
            </div>
            
            <button className="flex-1 bg-[#222222] text-white font-black text-xl py-5 rounded-2xl hover:bg-[#FC8A17] transition-colors shadow-lg shadow-black/10">
              Add to Cart — ₦{((isSubscription ? 24999 : 29999) * quantity).toLocaleString()}
            </button>
          </div>
          
          <p className="mt-6 text-center sm:text-left text-xs text-gray-400 font-medium italic">
            * 30-day money back guarantee. Cancel subscription anytime.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Shop;