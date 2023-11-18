/* main imports */
import { useEffect, useState } from 'react'
import { createContext } from "react";

export const themes : Theme = {
    dark: "dark",
    light: "light",
};

export const ThemeContext = createContext<ThemeContextValue>({
    theme: themes.dark,
    changeTheme: () => Object,
});

const ThemeContextProvider = ({
    children
} : {
    children: React.ReactNode
}) => {
    let defaultTheme = themes.light
    if ( localStorage.getItem('theme') ) {
      defaultTheme = localStorage.getItem('theme') as string
    }

    const [theme, setTheme] = useState<string>(defaultTheme);

    function changeTheme(theme: string) {
      setTheme(theme);
      localStorage.setItem('theme', theme)
    }

    useEffect(() => {
      switch (theme) {
        case themes.light:
          document.body.classList.remove('dark');
          document.body.classList.add('light');
          break;

        case themes.dark:
          document.body.classList.remove('light')
          document.body.classList.add('dark')
          break;
      }
    }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export default ThemeContextProvider