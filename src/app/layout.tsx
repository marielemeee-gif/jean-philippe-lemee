import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jean-Philippe Lemée — Artiste & historien de l’art",
  description:
    "Œuvres, projets, art-chitecture et archives de Jean-Philippe Lemée, artiste rennais.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
