import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEXPay - Your Money, Your Freedom",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/fav_icon.svg" />
        <link rel="stylesheet" href="/assets/css/bootstrap-lib/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/font-awesome-lib/icon/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
      </head>
      <body>
        {children}
        {/* JS Scripts */}
        <script src="/assets/js/javascript-lib/bootstrap.min.js"></script>
        <script src="/assets/js/jquery.js"></script>
        <script src="/assets/js/slick.min.js"></script>
        <script src="/assets/js/custom.js"></script>
        <script src="/assets/js/aos.js"></script>
      </body>
    </html>
  );
}
