import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const HeaderCenter = () => {
  return (
    <div className={styles.headerCenter}>
      <Link to=".">
        <h1 className="white">The News</h1>
      </Link>
    </div>
  );
};

export default HeaderCenter;
