import '@/styles/globals.css';
import { Metadata } from 'next';
import { Link } from '@nextui-org/link';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ClerkProvider } from '@clerk/nextjs';
import clsx from 'clsx';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={clsx(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <div className="relative flex flex-col min-h-screen">
              <Navbar />
              <main className="container flex-grow px-6 pt-16 mx-auto min-w-fit">
                {children}
              </main>
              <footer className="flex items-center justify-center w-full py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://gogoguest.com"
                  title="GoGoGuest homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">GoGoGuest</p>
                </Link>
              </footer>
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
