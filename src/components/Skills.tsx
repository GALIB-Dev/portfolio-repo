'use client';

import { motion, type Variants, easeOut } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 95, color: "from-yellow-400 to-orange-500" },
        { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "React", level: 92, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", level: 88, color: "from-gray-700 to-gray-900" },
        { name: "Redux", level: 85, color: "from-purple-500 to-purple-600" },
      ]
    },
    {
      title: "Styling & Animation",
      skills: [
        { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-blue-500" },
        { name: "Sass", level: 90, color: "from-pink-500 to-purple-500" },
        { name: "Bootstrap", level: 88, color: "from-purple-500 to-indigo-600" },
        { name: "GSAP", level: 85, color: "from-green-400 to-green-500" },
        { name: "Framer Motion", level: 82, color: "from-blue-500 to-purple-600" },
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-6"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto"
          >
            Technical skills and creative abilities in modern frontend development
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-zinc-800/50 transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.5 
                    }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                          duration: 1,
                          ease: easeOut
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          animate={{ x: [-100, 100] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: (t) => t 
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-8 text-center">
            Additional Technologies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "HTML5", "CSS3", "Git", "npm", "Webpack", "Vite",
              "Jest", "Testing Library", "Storybook", "Figma", "Adobe XD", "Responsive Design"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 + index * 0.05, duration: 0.3 }}
                className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-md hover:shadow-lg dark:shadow-zinc-900/50 transition-all duration-200 hover:scale-105 border border-gray-100 dark:border-zinc-700"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-zinc-300">{tech}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
