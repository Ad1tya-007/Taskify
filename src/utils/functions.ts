export const getInitialTheme = (): string => {
  return localStorage.getItem('theme') ?? 'light';
};
