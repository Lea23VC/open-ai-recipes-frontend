import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { IngredientsProvider } from '@/context/IngredientsContext';

const inter = Inter({ subsets: ['latin'] });
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: 'Open-AI Recipe Generator',
  description: 'Recipe generator using Open-AI API',
  icons: { icon: '/icons/food_favicon.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IngredientsProvider>
      <ThemeRegistry>
        <html lang="en">
          <body className="bg-main">{children}</body>
        </html>
      </ThemeRegistry>
    </IngredientsProvider>
  );
}
