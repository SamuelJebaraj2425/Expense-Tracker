import { useState } from 'react';

export function ExpenseCard() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {/* The Dashboard Card */}
      <div className="w-full max-w-md p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] shadow-xl flex flex-col gap-6">
        
        {/* Header Section */}
        <div>
          <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-semibold">
            Monthly Overview
          </span>
          <h2 className="text-2xl font-bold mt-1">Total Expenses</h2>
          <p className="text-sm text-[var(--muted-foreground)] mt-0.5">
            Track your spending velocity across categories.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 py-4 border-y border-[var(--border)]">
          <div>
            <span className="text-xs text-[var(--muted-foreground)] block">FEB SPEND</span>
            <span className="text-xl font-bold">€2,450.00</span>
          </div>
          <div>
            <span className="text-xs text-[var(--muted-foreground)] block">REMAINING</span>
            <span className="text-xl font-bold text-[var(--primary)]">€550.20</span>
          </div>
        </div>

        {/* The Emerald Theme Toggle Button with Pure White Text */}
        <button 
      type="button"
      onClick={toggleTheme}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer ${
        isDark ? 'bg-[var(--primary)]' : 'bg-[var(--border)]'
      }`}
      aria-label="Toggle theme"
    >
      {/* The Sliding Knob */}
      <div 
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>

      </div>
    </div>
  );
}