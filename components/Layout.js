import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../utils/Store';

const Layout = ({ title, children }) => {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <>
      <Head>
        <title>{title ? title + ' - MyStore' : 'My Store'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              MyStore
            </Link>
            <div>
              <Link href="/cart " className="p-2">
                Cart
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright &copy; 2023 MyStore</p>
        </footer>
      </div>
    </>
  );
};
export default Layout;
