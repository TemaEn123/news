import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu'; // Убедитесь, что путь к компоненту правильный

describe('Menu Component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Router>
        <Menu />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
