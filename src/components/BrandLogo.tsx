import React from "react";

type Props = {
  /** Square size in px (default 48 ~ Tailwind h-12) */
  size?: number;
  /** Hex or CSS color for the logo (default brand gold) */
  color?: string;
  className?: string;
  /** aria-label for accessibility */
  label?: string;
};

export default function BrandLogo({
  size = 48,
  color = "#C9972E",
  className = "",
  label = "Company logo",
}: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        WebkitMaskImage: "url(/logos/arkkitehtisuunnittelu.svg)",
        maskImage: "url(/logos/arkkitehtisuunnittelu.svg)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        display: "inline-block",
      }}
    />
  );
}
