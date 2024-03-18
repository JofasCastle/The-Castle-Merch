import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('footer');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="md:items-normal mx-auto flex w-full max-w-7xl flex-col items-center gap-6 border-t border-neutral-200 px-6 py-12 text-center text-sm md:flex-row md:gap-12 md:px-4 md:text-left min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link
            className="flex flex-col items-center gap-2 text-black md:flex-row md:pt-1 dark:text-white"
            href="/"
          >
            <LogoSquare size="sm" />
            <span className="mt-2 uppercase md:mt-0">{SITE_NAME}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
    </footer>
  );
}
