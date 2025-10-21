import { createContext, useState, useEffect, useContext } from 'react';

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(() => {
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme");
			if (storedTheme) {
				return storedTheme === "dark"; // true si guardado como dark
			}
			// Si no hay guardado, usar preferencia del sistema
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
		return false; // default light en SSR
	});


	useEffect(() => {
		const root = window.document.documentElement;

		if ( darkMode ) {
			root.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			root.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [ darkMode ]);

	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
