import React from "react";

import "@styles/globals.css";

// Nav 는 모든 page 에서 SHARE 하기 때문에 여기서 추가
import Nav from "@components/Nav";
import Provider from "@components/Provider";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompts",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
