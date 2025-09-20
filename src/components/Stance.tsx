import React from 'react';
import { motion } from 'framer-motion';
const Stance = () => {
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
  return <section id="stance" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.5
        }} className="text-4xl font-bold tracking-wide relative inline-block">
            <motion.span initial={{
            backgroundPosition: '200% 0'
          }} whileInView={{
            backgroundPosition: '0% 0'
          }} viewport={{
            once: true
          }} transition={{
            duration: 1.5
          }} className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Industry Stance
            </motion.span>
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
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.1
      }} transition={{
        duration: 0.8
      }} whileHover={{
        boxShadow: '0 10px 25px rgba(234,179,8,0.1)'
      }} className="bg-gray-800 rounded-lg p-8 md:p-12 shadow-2xl transform transition-all">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true,
            amount: 0.2
          }} transition={{
            duration: 0.7
          }} className="md:w-1/3">
              <img src="https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Intellectual Property Protection" className="rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-yellow-900/20 hover:scale-[1.02]" />
            </motion.div>
            <div className="md:w-2/3">
              <motion.h3 initial="hidden" whileInView="visible" viewport={{
              once: true,
              amount: 0.2
            }} variants={textRevealVariants} className="text-2xl font-bold text-white mb-4 tracking-wide" style={{
              textShadow: '0px 1px 3px rgba(0,0,0,0.5)'
            }}>
                <motion.span animate={{
                textShadow: ['0px 1px 3px rgba(0,0,0,0.5)', '0px 1px 6px rgba(234,179,8,0.3)', '0px 1px 3px rgba(0,0,0,0.5)']
              }} transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
                  Protecting Creative Integrity in Nollywood
                </motion.span>
              </motion.h3>
              <div className="space-y-4 text-gray-300">
                <motion.p initial="hidden" whileInView="visible" viewport={{
                once: true,
                amount: 0.2
              }} variants={textRevealVariants} transition={{
                delay: 0.2
              }}>
                  Ngozi Nglabelle Ogbonna stands firmly as a champion for
                  intellectual property rights and creative integrity within the
                  Nigerian film industry. Her outspoken stance against copyright
                  infringement and brand misrepresentation has established her
                  as a leading advocate for professional standards in Nollywood.
                </motion.p>
                <motion.p initial="hidden" whileInView="visible" viewport={{
                once: true,
                amount: 0.2
              }} variants={textRevealVariants} transition={{
                delay: 0.3
              }}>
                  "In an industry where{' '}
                  <motion.span initial={{
                  color: '#f8fafc'
                }} whileInView={{
                  color: '#fbbf24'
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.6,
                  duration: 0.5
                }} whileHover={{
                  scale: 1.05
                }} className="font-medium">
                    creativity is our currency
                  </motion.span>
                  , protecting our intellectual property is not just a legal
                  matter—it's about respecting the art form and allowing
                  creators to thrive," says Ogbonna. Her company,
                  CallMeNgLabelle Kontents LTD, has taken decisive legal action
                  against those who have attempted to misappropriate creative
                  materials.
                </motion.p>
                <motion.p initial="hidden" whileInView="visible" viewport={{
                once: true,
                amount: 0.2
              }} variants={textRevealVariants} transition={{
                delay: 0.4
              }}>
                  Through her advocacy, Ngozi aims to foster an environment
                  where originality is valued and protected, contributing to the
                  sustainable growth and global recognition of Nollywood
                  productions.
                </motion.p>
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true,
                amount: 0.2
              }} transition={{
                delay: 0.5,
                duration: 0.6
              }} className="pt-4">
                  <blockquote className="italic border-l-4 border-yellow-500 pl-4 text-gray-400 bg-gray-800/50 p-4 rounded-r shadow-inner" style={{
                  textShadow: '0px 1px 1px rgba(0,0,0,0.3)'
                }}>
                    <motion.span initial={{
                    opacity: 0
                  }} whileInView={{
                    opacity: 1
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.7,
                    duration: 0.8
                  }}>
                      "We cannot build a world-class film industry without
                      respecting and protecting the intellectual property that
                      forms its foundation. At CallMeNgLabelle Kontents, we are
                      committed to upholding these principles in everything we
                      do."
                    </motion.span>
                  </blockquote>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Stance;