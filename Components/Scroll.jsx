import React from 'react';
import { useWindowScroll } from 'react-use';
import { useEffect, useState } from 'react';
import styles from '../styles/Scroll.module.css';

function Scroll() {
  const { x, y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
  }, [y]);
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.indicator} style={{ width: `${scrolled}%` }}></div>
    </div>
  );
}

export default Scroll;
