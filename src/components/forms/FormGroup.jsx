import { cn } from '../../utils/cn';

export function FormGroup({ as: Tag = 'div', orientation = 'vertical', gap = 'md', className, children, ...props }) {
  const gapMap = {
    sm: 'gap-3',
    md: 'gap-5',
    lg: 'gap-7',
  };

  return (
    <Tag
      className={cn(
        'flex w-full',
        orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap items-start',
        gapMap[gap],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}