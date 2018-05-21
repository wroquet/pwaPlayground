import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
        <ThemeContext.Consumer>
            {(theme, toggleTheme) => (
                <button onClick={toggleTheme}>
                    {theme}
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;
