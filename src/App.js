import { useContext } from 'react';
import './App.css';
import MainDisplay from './components/MainDisplay';
import Me from './components/Me';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';




function App() {
  const {theme}= useContext(ThemeContext);
  console.log(theme)
  const {darkTheme, lightTheme}= theme;
  return (
    <div className="app">
      {/* <Navbar /> */}
      {/* <MainDisplay /> */}
      {/* <Me /> */}
    </div>
  );
}

export default App;
