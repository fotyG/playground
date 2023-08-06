"use client";

import { cn } from "@/lib/utils";

type ThemeSelectProps = {
  className?: string;
};

const ThemeSelect = ({ className }: ThemeSelectProps) => {
  return (
    <select
      data-choose-theme
      className={cn("select select-bordered select-xs w-fit", className)}
    >
      <option value="night">🌑 Dark</option>
      <option value="emerald">💡 Light</option>
      <option value="cupcake">🧁 Cupcake</option>
      <option value="retro">📽 Retro</option>
      <option value="lofi">🎹 Lofi</option>
      <option value="luxury">💰 Luxury</option>
      <option value="pastel">🎨 Pastel</option>
    </select>
  );
};
export default ThemeSelect;
