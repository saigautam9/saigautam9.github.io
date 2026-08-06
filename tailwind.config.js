/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Restrained professional palette. Text sits in the soft slate range —
        // deliberately lighter than near-black so long copy reads easily.
        ink: "#27333D", // headings
        body: "#5C6B79", // paragraphs
        muted: "#8B98A5", // labels, meta
        line: "#E4E9ED", // hairlines
        surface: "#F7F9FA", // alternating section ground
        accent: "#0E7C86", // deep teal
        accentSoft: "#E8F3F4",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: { content: "68rem" },
    },
  },
  plugins: [],
};
