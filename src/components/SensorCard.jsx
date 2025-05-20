import { motion } from 'framer-motion';

const SensorCard = ({ title, price, image }) => {
  return (
    <motion.div 
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.25)" }}
      className="bg-[#1f1f1f] rounded-xl p-6 border border-[#ffffff10] relative overflow-hidden"
    >
      {/* Metallic Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-xl opacity-20 hover:opacity-40 transition-all" 
           style={{ background: "linear-gradient(45deg, #FF6B35, #6C46EA)" }} />
      
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-[#FF6B35] text-lg font-bold">${price}</span>
        <button className="bg-[#6C46EA] text-white px-4 py-2 rounded-lg hover:bg-[#5a3ac4] transition">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default SensorCard;