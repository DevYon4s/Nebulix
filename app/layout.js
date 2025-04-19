import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body>{children}</body>
    </html>
  );
}
