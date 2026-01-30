import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextAddress - Free Moving Assistant | Plan Your Move',
  description: 'Plan, pack, and track your move with NextAddress. Free moving checklists, box packer, expense tracker, and AI-powered moving assistant.',
  keywords: 'moving assistant, moving checklist, box packer, moving planner, change of address',
  openGraph: {
    title: 'NextAddress - Free Moving Assistant',
    description: 'Make your next move simple & stress-free. Plan, pack, and track your move — all in one place.',
    url: 'https://nextaddress.app',
    siteName: 'NextAddress',
    type: 'website',
  },
  other: {
    'impact-site-verification': '3af3f821-a16a-4e5e-bab3-23093f8f51bd',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="impact-site-verification" content="3af3f821-a16a-4e5e-bab3-23093f8f51bd" />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <Script id="impact-stat" strategy="afterInteractive">
          {`(function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('https://utt.impactcdn.com/P-A6931634-276c-4677-8a20-1dc72d4888841.js','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');`}
        </Script>
      </body>
    </html>
  );
}
