import React from "react";
import "@styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompts",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
