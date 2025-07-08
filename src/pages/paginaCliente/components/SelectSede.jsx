import { useSede } from "../../../store/SedeContexte";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SelectSede() {
  const { sedeActual, setSedeActual, sedes } = useSede();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-white mb-6 mt-8"
    >
      <label className="block mb-2 font-medium text-[#FFCA03] text-sm uppercase tracking-wider">
        ¿Dónde quieres tu pizza?
      </label>
      
      <div className="relative">
        <select
          value={sedeActual.id}
          onChange={(e) =>
            setSedeActual(sedes.find((s) => s.id === parseInt(e.target.value)))
          }
          className="appearance-none bg-[#1A1A1A]/80 hover:bg-[#1A1A1A] text-white px-4 py-3 pr-10 rounded-lg border-2 border-[#FFCA03]/30 focus:border-[#FFCA03] focus:outline-none focus:ring-2 focus:ring-[#FFCA03]/30 w-full transition-all duration-300 cursor-pointer"
        >
          {sedes.map((sede) => (
            <option key={sede.id} value={sede.id}>
              {sede.barrio} - {sede.direccion}
            </option>
          ))}
        </select>
        
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#FFCA03]">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
      
      {sedeActual && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-gray-300"
        >
          Horario: {sedeActual.horario}
        </motion.p>
      )}
    </motion.div>
  );
}