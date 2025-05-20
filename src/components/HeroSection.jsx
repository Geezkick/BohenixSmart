import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]">
      {/* 3D Animated Road Network */}
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#FF6B35" metalness={0.7} roughness={0.2} />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>

      {/* Hero Text */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#6C46EA] bg-clip-text text-transparent mb-6">
          Smarter Roads, Safer Africa
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Real-time traffic control and V2V communication powered by AI and IoT.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#FF6B35] to-[#6C46EA] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
        >
          Start Free Trial
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;