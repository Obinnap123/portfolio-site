 
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const Footer = () => {
  const staggerChildrenVariants = {
    hidden: {
      opacity: 0
    },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 5, -5, 0],
      color: '#eab308',
      transition: {
        duration: 0.3
      }
    }
  };
  return <footer id="contact" className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
          duration: 0.6
        }}>
            <motion.h3 initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-2xl font-bold mb-6 tracking-wide relative inline-block">
              <motion.span initial={{
              backgroundPosition: '200% 0'
            }} whileInView={{
              backgroundPosition: '0% 0'
            }} viewport={{
              once: true
            }} transition={{
              duration: 1.5
            }} className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                CallMeNgLabelle Kontents
              </motion.span>
            </motion.h3>
            <motion.p initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="mb-6">
              Creating compelling content that entertains, educates, and
              inspires. Based in Nigeria and reaching audiences worldwide.
            </motion.p>
            <div className="flex space-x-4">
              {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i: number) => <motion.a key={i} custom={i} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={staggerChildrenVariants} whileHover={iconVariants.hover} href="#" className="text-gray-400 transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </motion.a>)}
            </div>
          </motion.div>
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
          duration: 0.6,
          delay: 0.1
        }}>
            <motion.h3 initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-lg font-semibold text-white mb-6 tracking-wide" style={{
            textShadow: '0px 1px 2px rgba(0,0,0,0.4)'
          }}>
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Portfolio', 'Industry Stance', 'Contact'].map((item, i) => <motion.li key={i} custom={i} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={staggerChildrenVariants}>
                    <motion.a whileHover={{
                x: 5,
                color: '#eab308'
              }} transition={{
                duration: 0.2
              }} href={`#${item.toLowerCase().replace(' ', '-')}`} className="transition-all duration-300">
                      {item}
                    </motion.a>
                  </motion.li>)}
            </ul>
          </motion.div>
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
          duration: 0.6,
          delay: 0.2
        }}>
            <motion.h3 initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-lg font-semibold text-white mb-6 tracking-wide" style={{
            textShadow: '0px 1px 2px rgba(0,0,0,0.4)'
          }}>
              Latest News
            </motion.h3>
            <div className="space-y-4">
              {[{
              date: 'April 2024',
              text: 'Voltage premieres to critical acclaim'
            }, {
              date: 'March 2024',
              text: 'CallMeNgLabelle announces upcoming production slate'
            }, {
              date: 'February 2024',
              text: 'Industry panel on intellectual property protection'
            }].map((item, i) => <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={staggerChildrenVariants}>
                  <p className="text-sm text-yellow-500">{item.date}</p>
                  <motion.a whileHover={{
                x: 5,
                color: '#eab308'
              }} transition={{
                duration: 0.2
              }} href="#" className="block transition-all duration-300">
                    {item.text}
                  </motion.a>
                </motion.div>)}
            </div>
          </motion.div>
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
          duration: 0.6,
          delay: 0.3
        }}>
            <motion.h3 initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-lg font-semibold text-white mb-6 tracking-wide" style={{
            textShadow: '0px 1px 2px rgba(0,0,0,0.4)'
          }}>
              Contact Us
            </motion.h3>
            <ul className="space-y-4">
              {[{
              Icon: MapPinIcon,
              text: 'Lagos, Nigeria'
            }, {
              Icon: PhoneIcon,
              text: '+234 809 441 1005'
            }, {
              Icon: MailIcon,
              text: 'Callmenglabelle@gmail.com',
              hover: true
            }].map((item, i) => <motion.li key={i} custom={i} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={staggerChildrenVariants} className="flex items-start">
                  <motion.span whileHover={{
                rotate: [0, 15, -15, 0],
                scale: 1.2
              }} transition={{
                duration: 0.5
              }} className="flex-shrink-0">
                    <item.Icon className="h-6 w-6 mr-3 text-yellow-500" />
                  </motion.span>
                  <motion.span whileHover={item.hover ? {
                color: '#eab308'
              } : {}} className={`${item.hover ? 'transition-colors duration-300 cursor-pointer' : ''}`}>
                    {item.text}
                  </motion.span>
                </motion.li>)}
            </ul>
          </motion.div>
        </div>
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <motion.span whileHover={{
            scale: 1.05
          }} className="text-yellow-500">
              CallMeNgLabelle Kontents LTD
            </motion.span>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;