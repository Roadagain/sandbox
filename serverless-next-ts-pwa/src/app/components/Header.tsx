import Head from 'next/head';
import Link from 'next/link';

export default ({ pathname }: { pathname?: any }) => (
  <header>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <Link href='/'>
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>
    <Link href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
  </header>
);
