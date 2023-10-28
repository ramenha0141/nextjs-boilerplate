import { AuthOptions, getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { env } from './env';

export const options: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    secret: env.NEXTAUTH_SECRET,

    session: {
        strategy: 'jwt',
    },

    pages: {
        signIn: '/auth/sign-in',
        signOut: '/auth/sign-out',
    },
};

export const auth = () => getServerSession(options);
