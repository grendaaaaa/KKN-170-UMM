interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "light",
  className = "",
}: SectionTitleProps) {
  const isDark = variant === "dark";
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-widest uppercase ${
            isDark ? "text-neon" : "text-neon"
          }`}
        >
          <span className={`w-6 h-px ${isDark ? "bg-neon" : "bg-neon"}`} />
          {eyebrow}
          <span className={`w-6 h-px ${isDark ? "bg-neon" : "bg-neon"}`} />
        </div>
      )}
      <h2
        className={`font-display font-bold text-display-lg mb-4 ${
          isDark ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          } text-light-muted`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
