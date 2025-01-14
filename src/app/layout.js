"use client";
import { DataProvider } from "../context/DataContext";
import "../index.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
          <div id="root">{children}</div>
        </DataProvider>
      </body>
    </html>
  );
}
