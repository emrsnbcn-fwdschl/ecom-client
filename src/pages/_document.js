import { Html, Head, Main, NextScript } from "next/document";
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import { getToken } from "./api/users";
export default function Document() {
  // let token = getToken();
  return (
    <Html lang="en">
      <Head />
      <body>
        <Nav msg="hello" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
