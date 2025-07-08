import { Instagram, Phone, MapPin, Clock } from 'lucide-react';
import { sedes } from '../../../backend/json/json';

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white mt-auto border-t border-[#FFCA03]/20">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Columna 1: Logo y redes */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold italic text-[#FFCA03]">VENEZIA</span>
            <span className="text-xl font-light ml-2">PIZZA'S</span>
          </div>

          <p className="text-gray-300 mb-4 text-center md:text-left">
            La auténtica pizza italiana hecha con pasión
          </p>

          <div className="flex space-x-4">
            <a
              href="https://instagram.com/tuinstagram"
              target="_blank"
              className="bg-[#ED1B24] p-2 rounded-full hover:bg-[#FFCA03] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Columna 2: Horario */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-[#FFCA03] mb-4 flex items-center justify-center md:justify-start">
            <Clock className="mr-2" size={18} />
            HORARIO
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>Lunes a Viernes: 12pm - 10pm</li>
            <li>Sábados: 11am - 11pm</li>
            <li>Domingos: 11am - 9pm</li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-[#FFCA03] mb-4 flex items-center justify-center md:justify-start">
            <Phone className="mr-2" size={18} />
            CONTACTO
          </h3>
          <ul className="space-y-4 text-gray-300">
            {sedes.map((sede) => (
              <li key={sede.id} className="text-sm">
                <div className="flex items-center mb-1">
                  <MapPin size={16} className="mr-2" />
                  <span className="font-semibold">{sede.barrio}</span>
                </div>
                <p className="ml-6">{sede.direccion}</p>
                <p className="ml-6">{sede.telefono}</p>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </footer>
  );
}

