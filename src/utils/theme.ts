export function toggleTheme(): 'dark' | 'light' {
  const isDark = document.documentElement.classList.toggle('dark');
  const newTheme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  return newTheme;
}

export function getCurrentTheme(): 'dark' | 'light' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}