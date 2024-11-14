import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./Components/sidebar";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Kai Fuller's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mainpage">
          <Sidebar />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
