"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { fadeInUp, scaleOnHover } from "@/lib/animations";

interface StatisticCardProps {
  count: number;
  label: string;
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
  index: number;
  maxCount: number;
}

export default function StatisticCard({
  count,
  label,
  icon,
  gradient,
  bgGradient,
  index,
  maxCount,
}: StatisticCardProps) {
  return (
    <motion.div variants={fadeInUp} {...scaleOnHover}>
      <Card
        className={`border-0 shadow-2xl bg-gradient-to-br ${bgGradient} backdrop-blur-xl rounded-3xl overflow-hidden group h-full`}
      >
        <CardContent className="p-6 sm:p-8 text-center">
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>

          {/* Count */}
          <motion.div
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-2"
            key={count}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {count}
          </motion.div>

          {/* Label */}
          <p className="text-base sm:text-lg font-semibold text-gray-700">{label}</p>

          {/* Progress bar */}
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((count / maxCount) * 100, 100)}%` }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
