import { createContext, useContext, useState } from "react";
import { sedes } from "../backend/json/json";
const SedeContext = createContext();

export function SedeProvider({ children }) {
	const [sedeActual, setSedeActual] = useState(sedes[0]); // San Miguel por defecto

	return (
		<SedeContext.Provider value={{ sedeActual, setSedeActual, sedes }}>
			{children}
		</SedeContext.Provider>
	);
}

export const useSede = () => useContext(SedeContext);
