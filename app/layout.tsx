import "./globals.css";

export const metadata = {
  title: "SolLens",
  description: "Premium Solana Wallet Analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
