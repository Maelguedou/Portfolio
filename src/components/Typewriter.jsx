import { useState, useEffect } from 'react';

export function Typewriter({words = ["fullstack developer"],speed=80,delay=2000}){
    const [wordIndex, setWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(()=>{
        const targetWord = words[wordIndex];

        const timer = setTimeout(()=>{
            if(!isDeleting){
                // Mode écriture
                setCurrentText(targetWord.substring(0, currentText.length + 1));
                if(currentText === targetWord){
                    setTimeout(()=>{
                        setIsDeleting(true);
                    }, delay);
                }
            }else {
                    //Mode suppression
                    setCurrentText(targetWord.substring(0, currentText.length -1));
                    if(currentText === ''){
                        setIsDeleting(false);
                        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                    }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timer);
    },[currentText, isDeleting, wordIndex, words, speed, delay]);
    return (
    <span className="inline-block relative">
        {/* \u200B garantit une hauteur constante même quand le texte est vide */}
        <span>{currentText || '\u200B'}</span>
        
        {/* Curseur calé en inline sans affecter la ligne de base */}
        <span className="animate-pulse ml-0.5 text-yellow-400 font-normal select-none">
        |
        </span>
    </span>
);
}