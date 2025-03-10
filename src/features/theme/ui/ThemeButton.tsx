import React from 'react';
import { useTheme } from '@/app/provider/ThemeProvider';
import { ThemeIcon } from '@/shared/assets';
import styles from './styles.module.scss';

const ThemeButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <button className={`${styles.btn} white`} onClick={toggleTheme}>
      <ThemeIcon />
    </button>
  );
};

export default ThemeButton;
