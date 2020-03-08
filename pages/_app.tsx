import React from "react";
import "styles/index.css";

function Next({
  Component,
  pageProps
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}

export default Next;
