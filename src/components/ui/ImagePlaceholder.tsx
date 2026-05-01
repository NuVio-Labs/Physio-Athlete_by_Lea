interface ImagePlaceholderProps {
  alt: string
  aspectRatio?: string
  className?: string
  label?: string
}

export default function ImagePlaceholder({
  alt,
  aspectRatio = 'aspect-[4/3]',
  className = '',
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} bg-[--color-warm-neutral] rounded-2xl overflow-hidden relative flex items-center justify-center ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="text-center p-6 opacity-40">
        <svg
          className="w-10 h-10 mx-auto mb-2 text-[--color-text-secondary]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
          <path d="m21 15-5-5L5 21" strokeWidth="1.5" />
        </svg>
        {label && (
          <p className="text-xs font-medium text-[--color-text-secondary]">{label}</p>
        )}
      </div>
    </div>
  )
}
