import { HouseIcon, MoonIcon, SettingsIcon, SunIcon, TimerResetIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect} from 'react';

type AvailableThemes = 'dark' | 'light'
;
export  function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes);
        return storageTheme === 'light' ? 'light' : 'dark';
    });

    const nextIconTheme = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleThemeChance(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault(); 

        setTheme(prevTheme => {
            const nexTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nexTheme;
        });
    }

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]); 

    return (
        <nav className={styles.menu}>
            <a 
                className={styles.menuLink} 
                href="#"
                aria-label='Ir para Home'
                title='Ir para Home'>
                <HouseIcon />
            </a>
             <a 
                className={styles.menuLink} 
                href="#"
                aria-label='Ver Histórico'
                title='Ver Histórico'>
                <TimerResetIcon />
            </a>
            <a 
                className={styles.menuLink} 
                href="#"
                aria-label='Configurações'
                title='Configurações'>
                <SettingsIcon />
            </a>
            <a 
                className={styles.menuLink} 
                href="#"
                aria-label='Mudar o tema'
                title='Mudar o tema'
                onClick={(event) => handleThemeChance(event)}>
               {nextIconTheme[theme]}
            </a>
        </nav>
    );
}