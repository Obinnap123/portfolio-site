import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  const textRevealVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: -10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.5
        }} className="text-4xl font-bold text-yellow-500 tracking-wide relative inline-block">
            About Ngozi Nglabelle Ogbonna
            <motion.span initial={{
            width: 0
          }} whileInView={{
            width: '6rem'
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5,
            duration: 0.6
          }} className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300"></motion.span>
          </motion.h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.7
        }} className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-2xl shadow-yellow-900/10 hover:shadow-yellow-900/20 transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Ngozi Nglabelle Ogbonna" className="w-full h-auto transition-transform duration-700 hover:scale-105" />
            </div>
          </motion.div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <motion.h3 initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }} variants={textRevealVariants} className="text-2xl font-semibold mb-4 text-white tracking-wide" style={{
            textShadow: '0px 1px 2px rgba(0,0,0,0.4)'
          }}>
              Founder & CEO of CallMeNgLabelle Kontents LTD
            </motion.h3>
            <motion.p initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }} variants={textRevealVariants} transition={{
            delay: 0.2
          }} className="text-gray-300 mb-6 leading-relaxed">
              Ngozi Nglabelle Ogbonna is a visionary Nollywood film producer who
              has made significant strides in the Nigerian film industry. As the
              Founder and CEO of CallMeNgLabelle Kontents LTD, she has dedicated
              herself to creating compelling content that not only entertains
              but also addresses important societal issues.
            </motion.p>
            <motion.p initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }} variants={textRevealVariants} transition={{
            delay: 0.3
          }} className="text-gray-300 mb-6 leading-relaxed">
              Her debut cinema production,{' '}
              <motion.span initial={{
              color: '#f8fafc'
            }} whileInView={{
              color: '#fbbf24'
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5,
              duration: 0.5
            }} className="font-medium">
                "Voltage"
              </motion.span>{' '}
              (2024), has garnered attention for its bold exploration of
              corruption within Nigeria's power sector. The film features a
              stellar cast including WhiteMoney, Olumide Oworo, and Kate
              Henshaw, and is positioned to make a significant contribution to
              Nollywood's growth on the global stage.
            </motion.p>
            <motion.p initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }} variants={textRevealVariants} transition={{
            delay: 0.4
          }} className="text-gray-300 leading-relaxed">
              Ngozi is a passionate advocate for creative integrity in the film
              industry, taking a strong stance against copyright infringement
              and brand misrepresentation. Her commitment to protecting
              intellectual property has established her as a respected voice in
              Nollywood's ongoing evolution.
            </motion.p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;