import { formatTimeSincePublication } from './formatTimeSincePublication';

describe('тестриуем форматирование времени публикации formatTimeSincePublication', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-10T10:00:00Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('должен вернуть Х секунд назад, если прошло меньше минуты', () => {
    const dateString: string = '2025-03-10T09:59:40Z';
    expect(formatTimeSincePublication(dateString)).toBe('20 seconds ago');
  });

  it('должен вернуть Х минут назад, если прошло меньше часа', () => {
    const dateString: string = '2025-03-10T09:39:40Z';
    expect(formatTimeSincePublication(dateString)).toBe('20 minutes ago');
  });

  it('должен вернуть Х часов назад, если прошло меньше суток', () => {
    const dateString: string = '2025-03-10T07:00:00Z';
    expect(formatTimeSincePublication(dateString)).toBe('3 hours ago');
  });

  it('должен вернуть X дней назад, если прошло больше 23:59:59 и меньше года', () => {
    const dateString: string = '2025-03-01T07:00:00Z';
    expect(formatTimeSincePublication(dateString)).toBe('9 days ago');
  });

  it('должен вернуть X лет назад, если прошло больше года', () => {
    const dateString: string = '2024-03-01T07:00:00Z';
    expect(formatTimeSincePublication(dateString)).toBe('1 year ago');
  });
});
