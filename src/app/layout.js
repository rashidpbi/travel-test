import '../index.css'

export const metadata = {
    title: 'React App',
    description: 'Web site created with Next.js.',
  }
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>React App</title>
        </head>
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }