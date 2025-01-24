import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#FF00FF' }, // Розовый
          '25%': { color: '#FFFF00' }, // Жёлтый
          '50%': { color: '#00FF00' }, // Зелёный
          '75%': { color: '#0000FF' }, // Синий
          '100%': { color: '#FF00FF' }, // Возврат к розовому
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
      },
      animation: {
        colorChange: 'colorChange 4s infinite', // Анимация смены цвета
        shake: 'shake 0.3s ease-in-out infinite', // Анимация дрожания
      },
    },
  },
  plugins: [],
} satisfies Config;
