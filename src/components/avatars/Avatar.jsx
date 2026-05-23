import React from 'react';
import { cn } from '../../utils/cn';

const sizeMap = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-14 h-14 text-lg',
  '2xl': 'w-16 h-16 text-xl',
  '3xl': 'w-20 h-20 text-2xl',
};

const colorPalette = [
  'bg-red-500 text-white',
  'bg-orange-500 text-white',
  'bg-amber-500 text-white',
  'bg-green-500 text-white',
  'bg-teal-500 text-white',
  'bg-blue-500 text-white',
  'bg-indigo-500 text-white',
  'bg-violet-500 text-white',
  'bg-pink-500 text-white',
  'bg-rose-500 text-white',
];

function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

function getColorIndex(name) {
  if (!name) return 0;
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % colorPalette.length;
}

export function Avatar({
  src,
  name,
  size = 'md',
  rounded = 'full',
  fallback,
  className,
  imgProps,
  children,
  ...props
}) {
  const [imgError, setImgError] = React.useState(false);
  const initials = getInitials(name);
  const colorClass = colorPalette[getColorIndex(name ?? '')];

  const roundedMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const baseClasses = cn(
    'relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden select-none font-semibold',
    sizeMap[size] ?? sizeMap.md,
    roundedMap[rounded] ?? 'rounded-full',
    !src || imgError ? colorClass : '',
    className
  );

  return (
    <span className={baseClasses} {...props}>
      {src && !imgError ? (
        <img
          src={src}
          alt={name ?? 'Avatar'}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
          {...imgProps}
        />
      ) : fallback ? (
        fallback
      ) : initials ? (
        <span aria-label={name}>{initials}</span>
      ) : (
        <svg className="w-[60%] h-[60%] opacity-80" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      )}
      {children}
    </span>
  );
}

Avatar.displayName = 'Avatar';