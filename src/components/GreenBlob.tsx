// Reusable green glow blob decoration — besar dan soft seperti referensi
type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";

interface GreenBlobProps {
  position?: Position;
  opacity?: number;
  size?: string;
}

const positionMap: Record<Position, string> = {
  "top-left":      "-top-40 -left-40",
  "top-right":     "-top-40 -right-40",
  "bottom-left":   "-bottom-40 -left-40",
  "bottom-right":  "-bottom-40 -right-40",
  "center-left":   "top-1/2 -translate-y-1/2 -left-40",
  "center-right":  "top-1/2 -translate-y-1/2 -right-40",
};

export default function GreenBlob({ position = "top-right", opacity = 0.18, size = "550px" }: GreenBlobProps) {
  // Memastikan blob selalu cukup terang meskipun props opacity kecil
  const finalOpacity = Math.max(opacity * 2.5, 0.35);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${positionMap[position]} rounded-full`}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle, rgba(107, 150, 134, 0.8) 0%, rgba(107, 150, 134, 0.2) 40%, transparent 70%)",
        opacity: finalOpacity,
        filter: "blur(90px)",
        zIndex: 0,
      }}
    />
  );
}
