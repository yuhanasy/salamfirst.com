import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className="flex flex-col items-center mx-4 sm:mx-8 lg:mx-10">
        <div className="w-full max-w-3xl">{children}</div>
      </body>
    </html>
  );
}
