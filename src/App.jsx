import { HomePage } from './pages/HomePage';
import React, {useEffect} from 'react';

export default function App() {

  
  useEffect(()=>{
    // Désactiver le menu contextuel
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Bloquer les raccourcis clavier DevTools (F12, Ctrl+Shift+I/J/C, Ctrl+U)
    const handleKeyDown = (e) => {
      if (e.key === 'F12') {
        e.preventDefault();
      }
      if (
        (e.ctrlKey || e.metaKey) &&
        ((e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) || e.key.toUpperCase() === 'U')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    }
  },[]);

  return <HomePage />;
}
