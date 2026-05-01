type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'light'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?:  ButtonVariant
  size?:     ButtonSize
  href?:     string
  external?: boolean
  onClick?:  () => void
  type?:     'button' | 'submit'
  disabled?: boolean
  children:  React.ReactNode
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border-transparent',
  secondary: 'bg-transparent text-[var(--color-text-primary)] border-[var(--color-border-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost:     'bg-transparent text-[var(--color-accent)] border-transparent underline-offset-4 hover:underline',
  light:     'bg-white text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] border-transparent font-semibold',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  variant = 'primary',
  size    = 'md',
  href,
  external,
  onClick,
  type    = 'button',
  disabled,
  children,
  className = '',
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-full border transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    )
  }

  if (href) {
    return <a href={href} className={base}>{children}</a>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
