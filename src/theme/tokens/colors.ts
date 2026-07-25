export const colors = {
  background: "#08111F",
  surface: "#111827",
  elevated: "#1B2435",

  primary: "#4F46E5",
  primaryHover: "#4338CA",

  accent: "#22D3EE",

  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",

  text: "#F8FAFC",
  textSecondary: "#CBD5E1",
  textMuted: "#94A3B8",

  border: "#243044",
} as const;

export type AppColors = typeof colors;
