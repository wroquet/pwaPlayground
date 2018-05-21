import React from 'react';

export const ThemeContext = React.createContext({
    theme: 'dark',
    toggleTheme: () => { console.log('yoo toggle theme'); }
});
