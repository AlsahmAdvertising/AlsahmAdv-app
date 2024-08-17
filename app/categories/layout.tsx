import React, { Suspense } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>;
};

export default layout;
