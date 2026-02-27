import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'unispotnet | Independent Service Guidance',
  description: 'Get independent guidance and informational support for internet, broadband, WiFi, and cable TV services. Third-party assistance provider founded 2026.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress specific console errors related to hydration from browser extensions
              (function() {
                const originalError = console.error;
                console.error = function(...args) {
                  if (
                    typeof args[0] === 'string' && 
                    (args[0].includes('Hydration') || 
                     args[0].includes('hydration') ||
                     args[0].includes('did not match') ||
                     args[0].includes('bis_skin_checked') ||
                     args[0].includes('cz-shortcut-listen'))
                  ) {
                    return;
                  }
                  originalError.apply(console, args);
                };
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <Script id="cleanup-extensions" strategy="beforeInteractive">
          {`
            (function() {
              if (typeof window !== 'undefined') {
                const cleanupAttributes = () => {
                  try {
                    document.querySelectorAll('[bis_skin_checked]').forEach(el => el.removeAttribute('bis_skin_checked'));
                    document.querySelectorAll('[cz-shortcut-listen]').forEach(el => el.removeAttribute('cz-shortcut-listen'));
                    document.querySelectorAll('[bis_register]').forEach(el => el.removeAttribute('bis_register'));
                  } catch (e) {}
                };
                
                cleanupAttributes();
                
                const observer = new MutationObserver(() => {
                  cleanupAttributes();
                });
                
                if (document.body) {
                  observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['bis_skin_checked', 'cz-shortcut-listen', 'bis_register']
                  });
                }
              }
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
