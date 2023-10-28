import { auth } from '~/lib/auth';

export async function Header() {
    const session = await auth();

    return (
        <header className='sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/50 backdrop-blur-xl'></header>
    );
}
