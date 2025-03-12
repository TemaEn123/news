import React from 'react';
import Skeleton from './Skeleton';
import { render, screen } from '@testing-library/react';

describe('компонент скелетон', () => {
  it('рендерится корректное кол-во скелетонов', () => {
    const count: number = 3;
    render(<Skeleton count={count} type="latest" />);

    // Проверяем, что отрисовано правильное количество скелетонов
    const skeletons = screen.getAllByTestId('skeleton');
    expect(skeletons).toHaveLength(count);
  });

  it('применяется правильный класс для тип latest', () => {
    render(<Skeleton count={1} type="latest" />);

    // Проверяем, что применен правильный класс для типа "latest"
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('skeleton_latest');
  });

  it('применяется правильный класс для типа article', () => {
    render(<Skeleton count={1} type="article" />);

    // Проверяем, что применен правильный класс для типа "article"
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('skeleton_article');
  });

  it('применяется ли класс для типа top', () => {
    render(<Skeleton count={1} type="top" />);

    // Проверяем, что применен правильный класс для типа "top"
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('skeleton_top');
  });

  it('рендерится ли внутренний див для каждого скелетона', () => {
    render(<Skeleton count={1} type="latest" />);

    const innerDiv = screen.getByTestId('skeleton-inside');
    expect(innerDiv).toBeInTheDocument();
  });
});
