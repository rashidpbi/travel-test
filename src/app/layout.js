'use client'
import { DataProvider } from "../context/DataContext";
import "../index.css";
import Home from "../pages/Home";

// export const metadata = {
//   title: "React App",
//   description: "Web site created with Next.js.",
// };
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
