import { scaleOnHover } from "@/lib/animations";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerChildren } from '@/lib/animations'

export default function StatisticsFooter() {
return (
    <motion.div variants={fadeInUp} className="text-center mt-12 lg:mt-16">
    <p className="text-gray-700 leading-relaxed">
      Rejoignez notre communauté grandissante et contribuez à créer un avenir inclusif pour tous les enfants !
    </p>
    <motion.div className="flex justify-center mt-6" {...scaleOnHover}>
      <Button
        className="flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span>Rejoindre maintenant</span>
      </Button>
    </motion.div>
  </motion.div>
);
}
