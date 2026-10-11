import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import "devicon/devicon.min.css";
import siteContent from "../../public/data/site-content.json";

const site = siteContent.content.site;
const person = siteContent.content.contact;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${person.name}`
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: person.name }],
  creator: person.name,
  publisher: person.name,
  applicationName: `${person.name} Portfolio`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: person.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: person.name,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
        >
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
