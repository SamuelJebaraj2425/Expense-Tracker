 import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`rounded-full font-medium transition-all duration-200 cursor-pointer flex items-center justify-center bg-emerald-600 text-white hover:bg-emerald-700 ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}