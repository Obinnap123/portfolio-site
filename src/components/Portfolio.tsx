
import { motion } from 'framer-motion';
import voltageVideo from '../assests/videos/Voltage video.mp4';
const Portfolio = () => {
  const textVariants = {
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
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };
  return <section id="portfolio" className="py-20 bg-gray-800">
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
              Portfolio
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
        <div className="mb-16">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }} variants={textVariants} className="text-3xl font-bold text-white mb-8 text-center tracking-wide" style={{
          textShadow: '0px 2px 4px rgba(0,0,0,0.5)'
        }}>
            Featured Production
          </motion.h3>
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
        }} className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden transform transition-all hover:shadow-yellow-900/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <video src={voltageVideo} muted autoPlay loop playsInline className="absolute inset-0 w-full h-full object-cover"></video>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <motion.span initial={{
                  opacity: 0,
                  scale: 0.8
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.4
                }} className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    2024
                  </motion.span>
                  <motion.h4 initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: 0.2
                }} className="text-2xl font-bold text-white ml-3 tracking-widest" style={{
                  textShadow: '0px 2px 4px rgba(0,0,0,0.5)'
                }}>
                    <motion.span animate={{
                    textShadow: ['0px 2px 4px rgba(0,0,0,0.5)', '0px 2px 8px rgba(234,179,8,0.4)', '0px 2px 4px rgba(0,0,0,0.5)']
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}>
                      VOLTAGE
                    </motion.span>
                  </motion.h4>
                </div>
                <motion.p variants={textVariants} initial="hidden" whileInView="visible" viewport={{
                once: true
              }} transition={{
                delay: 0.3
              }} className="text-gray-300 mb-6 leading-relaxed">
                  "Voltage" is a gripping drama that exposes the deep-rooted
                  corruption within Nigeria's power sector. Through compelling
                  storytelling and powerful performances, the film sheds light
                  on the challenges facing the country's energy infrastructure
                  and the impact on everyday citizens.
                </motion.p>
                <motion.div variants={textVariants} initial="hidden" whileInView="visible" viewport={{
                once: true
              }} transition={{
                delay: 0.4
              }} className="mb-6">
                  <h5 className="text-white font-semibold mb-2">Starring:</h5>
                  <p className="text-gray-400">
                    <motion.span whileHover={{
                    color: '#fcd34d',
                    scale: 1.05,
                    textShadow: '0px 0px 8px rgba(234,179,8,0.3)'
                  }} className="text-yellow-300 transition-colors duration-300">
                      WhiteMoney
                    </motion.span>
                    ,
                    <motion.span whileHover={{
                    color: '#fcd34d',
                    scale: 1.05,
                    textShadow: '0px 0px 8px rgba(234,179,8,0.3)'
                  }} className="text-yellow-300 transition-colors duration-300">
                      {' '}
                      Olumide Oworo
                    </motion.span>
                    ,
                    <motion.span whileHover={{
                    color: '#fcd34d',
                    scale: 1.05,
                    textShadow: '0px 0px 8px rgba(234,179,8,0.3)'
                  }} className="text-yellow-300 transition-colors duration-300">
                      {' '}
                      Kate Henshaw
                    </motion.span>
                  </p>
                </motion.div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => <motion.img key={i} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.5 + i * 0.1,
                  duration: 0.5
                }} whileHover={{
                  scale: 1.05,
                  boxShadow: '0 4px 12px rgba(234,179,8,0.2)'
                }} src={`https://images.unsplash.com/photo-${i === 1 ? '1536440136628-849c177e76a1' : i === 2 ? '1618609377864-68609b857e90' : '1594909122845-11baa439b7bf'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80`} alt={`Voltage Scene ${i}`} className="rounded shadow-md transition-all duration-300" />)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.h3 initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }} variants={textVariants} className="text-3xl font-bold text-white mb-8 text-center tracking-wide" style={{
          textShadow: '0px 2px 4px rgba(0,0,0,0.5)'
        }}>
            Behind The Scenes
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
            title: 'On Set Direction',
            desc: 'Ngozi directing a pivotal scene with the lead actors'
          }, {
            img: 'https://images.unsplash.com/photo-1500210624778-16c1fd2f7b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            title: 'Production Meeting',
            desc: 'Planning the complex power station sequences'
          }, {
            img: 'https://images.unsplash.com/photo-1514302240736-b1fee5985889?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
            title: 'Cast Rehearsal',
            desc: 'The ensemble cast preparing for an emotional scene'
          }].map((item, i) => <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.1
          }} variants={cardVariants} whileHover={{
            y: -8,
            transition: {
              duration: 0.3
            }
          }} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <img src={item.img} alt={`Behind the scenes ${i + 1}`} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <motion.h4 initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.3 + i * 0.1
              }} className="text-xl font-semibold text-white mb-2 tracking-wide" style={{
                textShadow: '0px 1px 2px rgba(0,0,0,0.4)'
              }}>
                    {item.title}
                  </motion.h4>
                  <motion.p initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.4 + i * 0.1
              }} className="text-gray-400">
                    {item.desc}
                  </motion.p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Portfolio;