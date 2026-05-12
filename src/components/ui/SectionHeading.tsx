interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({ label, title, description, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-4xl mx-auto ${className}`}>
      {label && (
        <span className="block text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-white mb-12">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}