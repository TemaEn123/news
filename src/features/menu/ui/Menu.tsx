import React from 'react';
import { categories } from '@/shared/constants';
import { NavLink, useParams } from 'react-router-dom';
import styles from './styles.module.scss';

const Menu = () => {
  const params = useParams();

  return (
    <nav className={styles.menu}>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <NavLink
              className={`${styles.menu__link} ${params.cat === cat ? styles.menu__link_active : null} white`}
              to={`category/${cat}`}
            >
              {cat}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
