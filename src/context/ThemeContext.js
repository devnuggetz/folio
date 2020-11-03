import React, { createContext, useState} from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
    const [theme, setTheme]= useState({ 
        darkTheme: {background:'#000000', font: '#ffffff'},
        lightTheme: {background: 'ffffff', font:'#000000' }
    })
    return (
        <div>
            <ThemeContext.Provider value={{theme}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}
