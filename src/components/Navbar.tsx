import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItemVariants = {
    hidden: {
      opacity: 0,
      y: -5
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    }),
    hover: {
      scale: 1.05,
      letterSpacing: '0.05em',
      color: '#eab308',
      transition: {
        duration: 0.2
      }
    }
  };
  const navItems = [{
    href: '#home',
    label: 'Home'
  }, {
    href: '#about',
    label: 'About'
  }, {
    href: '#portfolio',
    label: 'Portfolio'
  }, {
    href: '#stance',
    label: 'Industry Stance'
  }, {
    href: '#contact',
    label: 'Contact'
  }];
  return <nav className="bg-black bg-opacity-80 fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <motion.h1 initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600" style={{
              textShadow: '0px 1px 3px rgba(234,179,8,0.3)'
            }}>
                CallMeNgLabelle Kontents
              </motion.h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, i) => <motion.a key={i} custom={i} initial="hidden" animate="visible" whileHover="hover" variants={navItemVariants} href={item.href} className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  {item.label}
                </motion.a>)}
            </div>
          </div>
          <div className="md:hidden">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition-colors duration-300">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      {isOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} transition={{
      duration: 0.3
    }} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-95 backdrop-blur-sm">
            {navItems.map((item, i) => <motion.a key={i} initial={{
          opacity: 0,
          x: -10
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: i * 0.1,
          duration: 0.3
        }} href={item.href} className="text-gray-300 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-4">
                {item.label}
              </motion.a>)}
          </div>
        </motion.div>}
    </nav>;
};
export default Navbar;