import Manifest from 'next-manifest/manifest';
import Head from 'next/head';
import Link from 'next/link';

export default ({ pathname }: { pathname?: any }) => (
  <header>
    <Head>
      <Manifest href='/_next/static/manifest/manifest.json' />
    </Head>
    <Link href='/'>
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>
    <Link href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
  </header>
);
