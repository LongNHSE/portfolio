"use client"

import { motion } from "framer-motion"
import { Calendar, Building2, ChevronRight } from "lucide-react"

interface WorkExperienceProps {
  title: string
  company: string
  startDate: string
  endDate: string
  description: string[]
}

export default function WorkExperience({ title, company, startDate, endDate, description }: WorkExperienceProps) {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Work Experience</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 rounded-lg shadow-xl overflow-hidden max-w-3xl mx-auto"
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-primary flex items-center">
                  <Building2 className="w-4 h-4 mr-2" />
                  {company}
                </p>
              </div>
              <p className="text-gray-400 flex items-center mt-2 md:mt-0">
                <Calendar className="w-4 h-4 mr-2" />
                {startDate} - {endDate}
              </p>
            </div>
            <ul className="space-y-2 text-gray-300">
              {description.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <ChevronRight className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            className="bg-gradient-to-r from-primary/20 to-primary/10 p-4 flex justify-end"
            whileHover={{ backgroundColor: "rgba(var(--primary), 0.3)" }}
          >
            <a
              href="#"
              className="text-primary hover:text-white transition-colors duration-300 flex items-center"
              aria-label="View more details about this work experience"
            >
              View More
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

