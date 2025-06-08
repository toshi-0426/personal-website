import './globals.css';
import Header from '@/components/header';
import { roboto } from './fonts';
//import Chatbot from "@/components/chatbot";
import { Providers as ThemeProviders } from './providers';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: {
    template: '%s | Toshiyasu Takahashi',
    default: 'Toshiyasu Takahashi',
  },
  description: 'Toshiyasu Takahashi Personal Website',
  icons: {
    icon: './icons/icon.svg',
    apple: './icons/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${roboto.className} mb-10`}>
        <ThemeProviders>
          <Header />
          <main className="mt-12">
            {children}
            <Analytics />
          </main>
        </ThemeProviders>
        {/*<Chatbot />*/}
      </body>
    </html>
  );
}
