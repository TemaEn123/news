export function formatTitleToUrl(title: string): string {
  let formatted = title.replace(/[^\w\s]/g, '');
  formatted = formatted.replace(/\d+/g, '');
  formatted = formatted.trim();

  formatted = formatted.replace(/\s+/g, '-');

  formatted = formatted.toLowerCase();

  return formatted;
}
