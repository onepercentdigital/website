import { Link } from '@tanstack/react-router';
import { brand } from '@/config/brand';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({
  className = '',
  showWordmark = true,
  size = 'md',
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      {/* SVG Logo Icon */}
      <svg
        className={sizeClasses[size]}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="One Percent logo"
      >
        {/* Left rounded rectangle */}
        <rect
          x="14"
          y="116"
          width="138"
          height="168"
          rx="69"
          fill="currentColor"
          className="text-foreground"
        />

        {/* Dot (circle) */}
        <circle
          cx="267"
          cy="180"
          r="63"
          fill="currentColor"
          className="text-foreground"
        />

        {/* Slash */}
        <rect
          x="234.5"
          y="96.5"
          width="223"
          height="78"
          rx="39"
          transform="rotate(45 234.5 96.5)"
          fill="currentColor"
          className="text-foreground"
        />

        {/* Percentage sign dot (smaller circle) */}
        <circle
          cx="429"
          cy="320"
          r="54"
          fill="currentColor"
          className="text-foreground"
        />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <span className={`font-bold tracking-tight ${textSizeClasses[size]}`}>
          {brand.logo.text}
        </span>
      )}
    </Link>
  );
}
