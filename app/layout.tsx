import { HeroSection } from 'components/hero-section';
import { GeistSans } from 'geist/font';
import { ensureStartsWith } from 'lib/utils';
import { ReactNode, Suspense } from 'react';
import './globals.css';

import { Providers } from './_helpers/Provides';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <Providers>
        <body className="text-black selection:bg-teal-300 dark:bg-defaultdark dark:text-white dark:selection:bg-golden dark:selection:text-white">
          <HeroSection />
          <Suspense fallback={<div>Loading...</div>}>
            <main className="mt-12">{children}</main>
          </Suspense>
        </body>
      </Providers>
    </html>
  );
}
