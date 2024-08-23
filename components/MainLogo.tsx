import lightLogo from '../public/logo.png';
import darkLogo from '../public/logo-dark.png';
import { useTheme } from "next-themes";

export const MainLogo = () => {
    const { theme } = useTheme();
    console.log(darkLogo)
    return (
        <>
        {theme === 'dark' && <img width={150} src={darkLogo.src} alt="oscuro" />}
        {theme === 'light' && <img width={150} src={lightLogo.src} alt="claro" />}
        </>
    );
  };