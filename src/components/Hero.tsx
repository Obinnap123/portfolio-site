import { motion } from 'framer-motion';
const Hero = () => {
  return <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
    }}></div>
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <motion.h1 initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0,
        textShadow: ['2px 2px 4px rgba(0,0,0,0.6)', '2px 2px 8px rgba(234,179,8,0.6)', '2px 2px 4px rgba(0,0,0,0.6)']
      }} transition={{
        duration: 0.8,
        textShadow: {
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut'
        }
      }} className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 tracking-wider">
          VOLTAGE
        </motion.h1>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl leading-relaxed" style={{
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
      }}>
          The groundbreaking debut cinema production exposing corruption in
          Nigeria's power sector
        </motion.p>
        <motion.button initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg shadow-yellow-900/30">
          Watch Trailer
        </motion.button>
      </div>
    </section>;
};
export default Hero;