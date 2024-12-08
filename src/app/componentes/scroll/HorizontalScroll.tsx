'use client'

import React, { useRef } from 'react';
import styles from './HorizontalScroll.module.css'; 

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);  // Referência para o contêiner

  // Função para rolar para a esquerda
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' }); // Rola para a esquerda
    }
  };

  // Função para rolar para a direita
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' }); // Rola para a direita
    }
  };

  return (
    <div className={styles.scrollWrapper}>
      <button className={styles.scrollButtonLeft} onClick={scrollLeft}>←</button>
      <div className={styles.scrollContainer} ref={scrollContainerRef}>
        <div className={styles.scrollContent}>
          {children}
        </div>
      </div>
      <button className={styles.scrollButtonRight} onClick={scrollRight}>→</button>
    </div>
  );
};

export default HorizontalScroll;
