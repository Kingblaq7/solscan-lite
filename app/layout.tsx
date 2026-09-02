import "./globals.css";

export const metadata = {
  title: "SolScan Lite",
  description: "Premium Solana Wallet Inspector",
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
