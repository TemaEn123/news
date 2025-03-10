import { useCallback } from 'react';

export const useSearch = (
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  setShowItems: React.Dispatch<React.SetStateAction<boolean>>,
  search: string
): [(value: string) => void, () => void, () => void] => {
  const handleInputChange = useCallback((value: string): void => {
    setSearch(value);
    if (value) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    if (search) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  }, [search]);

  const handleSearchNewsClick = useCallback(() => {
    setShowItems(false);
    setSearch('');
  }, []);

  return [handleInputChange, handleInputFocus, handleSearchNewsClick];
};
