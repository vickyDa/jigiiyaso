"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Stethoscope, GraduationCap, Building2 } from "lucide-react";
import { useEffect, useState } from "react";
import { staggerChildren, fadeInUp } from "@/lib/animations";
import StatisticsFooter from "./statisticsFooter";
import StatisticCard from "./StatisticsCard";


interface Stats {
    parents: number;
    professionals: number;
    schools: number;
    organizations: number;
  }

export default function StatisticsSection() {


  const [registrationCounts, setRegistrationCounts] = useState<Stats | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();
        setRegistrationCounts(data);
      } catch (err) {
        console.error("Erreur récupération stats:", err);
      }
    }
    fetchStats();
  }, []);

  if (!registrationCounts) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
        {/* <p className="text-center text-gray-600">Chargement des statistiques...</p> */}
      </section>
    );
  }

  const totalRegistrations =
    registrationCounts.parents +
    registrationCounts.professionals +
    registrationCounts.schools +
    registrationCounts.organizations;

    const stats = [
        {
          type: "parents",
          count: registrationCounts.parents,
          label: "Parents",
          icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
          gradient: "from-green-600 to-green-700",
          bgGradient: "from-green-50/80 to-green-100/80",
        },
        {
          type: "professionals",
          count: registrationCounts.professionals,
          label: "Professionnels",
          icon: <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
          gradient: "from-green-500 to-green-600",
          bgGradient: "from-white/80 to-green-50/80",
        },
        {
          type: "schools",
          count: registrationCounts.schools,
          label: "Écoles",
          icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
          gradient: "from-green-600 to-green-700",
          bgGradient: "from-green-50/80 to-white/80",
        },
        {
          type: "organizations",
          count: registrationCounts.organizations,
          label: "Organismes",
          icon: <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
          gradient: "from-green-500 to-green-600",
          bgGradient: "from-white/80 to-green-100/80",
        },
      ];
    

  return (
    <motion.section
      id="statistiques"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm relative"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"

        >
          Notre Communauté Grandit
        </motion.h2>

        {/* Total Counter */}
        <motion.div variants={fadeInUp} className="text-center mb-12 lg:mb-16">
          <motion.div
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white rounded-3xl px-8 py-6 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center space-x-4">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />
              <div>
                <motion.span
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold block" 
                  key={totalRegistrations}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {totalRegistrations}
                </motion.span>
                <span className="text-lg sm:text-xl text-green-100">Membres inscrits</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Individual Counters */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, index) => (
            <StatisticCard
              key={item.type}
              count={item.count}
              label={item.label}
              icon={item.icon}
              gradient={item.gradient}
              bgGradient={item.bgGradient}
              index={index}
              maxCount={Math.max(...Object.values(registrationCounts))}
            />
          ))}
        </div>

        <StatisticsFooter />
      </div>
    </motion.section>
  );
}
