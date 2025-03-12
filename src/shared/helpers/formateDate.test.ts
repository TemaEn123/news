import { formatDate } from './formateDate';

describe('тестриуем фиксированную дату в formatDate', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-10'));
  });

  afterAll(() => jest.useRealTimers());

  it('принимаем объект дата и возвращаем корректную форму', () => {
    expect(formatDate(new Date())).toBe('Monday, March 10, 2025');
  });
});
