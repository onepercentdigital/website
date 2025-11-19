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
      {/* Logo Icon */}
      <svg
        className={sizeClasses[size]}
        viewBox="0 0 300 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="One Percent logo"
      >
        <title>One Percent logo</title>
        <path
          d="M157.015 85.7143C180.684 85.7143 199.872 66.5265 199.872 42.8571C199.872 19.1878 180.684 0 157.015 0C133.346 0 114.158 19.1878 114.158 42.8571C114.158 66.5265 133.346 85.7143 157.015 85.7143Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M257.143 177.119C280.812 177.119 300 157.931 300 134.261C300 110.592 280.812 91.4043 257.143 91.4043C233.473 91.4043 214.286 110.592 214.286 134.261C214.286 157.931 233.473 177.119 257.143 177.119Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M85.7143 174.463H0V88.7485C0 41.3401 38.3059 3.03418 85.7143 3.03418V174.463Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M266.248 3.03418L137.677 174.463H148.296L276.868 3.03418H266.248Z"
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
