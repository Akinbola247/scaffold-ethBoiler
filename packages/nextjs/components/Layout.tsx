import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from './Header';



const Layout = ({children}: any) => {
    return (
        <div>
            <Head>
                <title>Multi Pay</title>
                <meta
                    content="Generated by @rainbow-me/create-rainbowkit"
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <main>
                <Header />
                {children}
            </main>
        </div>
    );
};

export default Layout;
