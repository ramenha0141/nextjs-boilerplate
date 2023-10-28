'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export function Providers({ children }: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute='class'
            defaultTheme='system'
            enableSystem={true}
        >
            {children}
        </NextThemesProvider>
    );
}
