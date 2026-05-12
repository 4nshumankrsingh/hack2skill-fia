import { cn } from '../../utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass' | 'bracket';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/50 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary: 'bg-primary hover:bg-primary-deep text-white rounded-full shadow-[0_4px_6px_rgba(124,58,237,0.2)]',
      glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/15 rounded-xs',
      bracket: 'relative bg-gradient-to-r from-primary-deep to-[#8b5cf6] text-white hover:brightness-110 rounded-xs',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-xs',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-10 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Bracket corners for bracket variant */}
        {variant === 'bracket' && (
          <>
            <span className="absolute top-[-4px] left-[-4px] w-2 h-2 border-t border-l border-white/60" />
            <span className="absolute top-[-4px] right-[-4px] w-2 h-2 border-t border-r border-white/60" />
            <span className="absolute bottom-[-4px] left-[-4px] w-2 h-2 border-b border-l border-white/60" />
            <span className="absolute bottom-[-4px] right-[-4px] w-2 h-2 border-b border-r border-white/60" />
          </>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;