 
import bottleImg from '../assets/images/gummiesbottle.png'; 

const GummiesSection = () => {
  return (
    <div className="bg-[#FDFDF5] min-h-screen relative flex items-center justify-center py-20">
      <div className="z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#666666] mb-8">
          Can't eat 'em all. Do the math.
        </h2>
        <p className="text-xl text-[#FC8A17] mb-12">
            One gummy = 90% of the daily recommended fruit, fibre and veggies for one 70-90 kg adult. 
          0 Calories. 0 sugar.
        </p>
        
        
        <div id="bottle-container" className="relative w-full max-w-lg mx-auto h-[600px] flex items-end justify-center">
          <img 
            src={bottleImg} 
            alt="Poppa Gummies Bottle" 
            className="w-full h-auto max-h-[550px] object-contain"
            id="gummy-bottle" 
          />
        </div>

      </div>
    </div>
  );
};

export default GummiesSection;