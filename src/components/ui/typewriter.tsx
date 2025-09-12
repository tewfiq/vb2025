"use client";

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  delayBetween?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  loop?: boolean;
}

export function TypeWriter({
  texts,
  delayBetween = 2500,
  typingSpeed = 150,
  deletingSpeed = 75,
  loop = true
}: TypeWriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

  useEffect(() => {
    const currentTextTarget = texts[currentIndex];

    if (isDeleting) {
      // Suppression du texte
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Fin de la suppression, passer au texte suivant
        setIsDeleting(false);
        setTypingSpeedState(typingSpeed);
        
        if (loop || currentIndex < texts.length - 1) {
          const nextIndex = (currentIndex + 1) % texts.length;
          setCurrentIndex(nextIndex);
        }
      }
    } else {
      // Ajout du texte
      if (currentText.length < currentTextTarget.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTextTarget.slice(0, currentText.length + 1));
        }, typingSpeedState);
        return () => clearTimeout(timeout);
      } else {
        // Fin de l'ajout, attendre puis supprimer
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeedState(deletingSpeed);
        }, delayBetween);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetween, loop]);

  // Convertir les sauts de ligne en balises <br />
  const renderText = () => {
    const lines = currentText.split('\n');
    return lines.map((line, index) => (
      <span key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <span className="text-accent">
      {renderText()}
      <span className="ml-1 inline-block w-1 h-6 bg-accent animate-pulse"></span>
    </span>
  );
}