import React from 'react';
import darkPng from '../../assets/dark_mode.png';
import lightPng from '../../assets/light_mode.png';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  
    const element = document.documentElement;

    React.useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    },[theme]);

    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return <>
  <div className='relative w-12 h-12 flex items-center justify-center'>
  
       <img
        src={theme === 'light' ? lightPng : darkPng}
        alt="Toggle dark mode"
        onClick={changeTheme}
        className="w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    
  </div>
  </>
}

export default DarkMode