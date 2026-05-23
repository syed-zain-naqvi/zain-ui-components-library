import React from 'react';
import { cn } from '../../utils/cn';
import { Avatar } from './Avatar';

const sizeOffsets = {
  xs: '-ml-2',
  sm: '-ml-2.5',
  md: '-ml-3',
  lg: '-ml-4',
  xl: '-ml-4',
  '2xl': '-ml-5',
  '3xl': '-ml-6',
};

const ringColors = {
  white: 'ring-white dark:ring-zinc-900',
  gray: 'ring-zinc-100 dark:ring-zinc-800',
};

export function AvatarGroup({
  avatars = [],
  max = 4,
  size = 'md',
  spacing,
  ringColor = 'white',
  className,
  ...props
}) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;
  const offset = spacing ?? sizeOffsets[size] ?? '-ml-3';
  const ringClass = ringColors[ringColor] ?? ringColors.white;

  return (
    <div
      className={cn('flex items-center', className)}
      role="group"
      aria-label={`${avatars.length} avatars`}
      {...props}
    >
      {visible.map((avatar, index) => (
        <Avatar
          key={avatar.id ?? index}
          {...avatar}
          size={size}
          className={cn(
            'ring-2',
            ringClass,
            index !== 0 && offset
          )}
        />
      ))}
      {overflow > 0 && (
        <span
          className={cn(
            'relative inline-flex items-center justify-center flex-shrink-0 rounded-full ring-2 font-semibold bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300',
            Avatar.sizeMap?.[size] ?? 'w-10 h-10 text-sm',
            ringClass,
            offset
          )}
          aria-label={`${overflow} more`}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}

AvatarGroup.displayName = 'AvatarGroup';