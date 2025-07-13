import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RUTAS } from '../../../routes/router';
import { motion } from 'framer-motion';
import SelectSede from '../components/SelectSede';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const backgroundZoom = {
    initial: { scale: 1.1 },
    animate: {
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-start bg-[#2C2C2C] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('/fondo-menu.avif')] bg-cover bg-center opacity-30"
        variants={backgroundZoom}
        initial="initial"
        animate="animate"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:px-12 lg:px-24">
        <motion.div
          className="max-w-xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" variants={item}>
            <span className="block text-[#FFCA03] italic">Auténtica</span>
            <span className="block">Pizza Italiana</span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-gray-200 mb-8" variants={item}>
            Hecha con ingredientes frescos y la tradición de Venezia.
            <span className="block mt-2 text-[#FFCA03] font-medium">¡Horneada con pasión!</span>
          </motion.p>

          {/* Selector de sede integrado antes del botón */}
          <motion.div variants={item} className="mb-8">
            <SelectSede />
          </motion.div>

          <motion.div variants={item}>
            <Link
              to={RUTAS.MENU}
              className="group inline-flex items-center justify-center px-8 py-3 bg-[#ED1B24] hover:bg-[#FFCA03] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Menú
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Detalle decorativo animado */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#2C2C2C] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </section>
  );
}