export function getDayBeforeYesterday(): string {
  const today = new Date();
  const dayBeforeYesterday = new Date(today);
  dayBeforeYesterday.setDate(today.getDate() - 2);

  const year = dayBeforeYesterday.getFullYear();
  const month = String(dayBeforeYesterday.getMonth() + 1).padStart(2, '0');
  const day = String(dayBeforeYesterday.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
