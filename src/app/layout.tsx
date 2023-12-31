import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '~/components/header';
import { Providers } from '~/components/providers';
import { cn } from '~/lib/utils';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={cn('font-sans antialiased', inter.variable)}>
                <Providers>
                    <div className='flex flex-col min-h-screen'>
                        <Header />
                        <main className='flex flex-col flex-1 bg-muted/50'>
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
