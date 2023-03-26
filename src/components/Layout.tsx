import Link from "next/link";

import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      <header className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="md:w-1/3">
              <nav className="flex items-center justify-start space-x-3 md:space-x-6">
                <Link href="/about">
                  <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                    About
                  </a>
                </Link>
                <Link href="/terms-of-sale">
                  <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                    Terms of Sale
                  </a>
                </Link>
              </nav>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Link href="/">
                <a className="flex items-center text-gray-900">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <img src="data:image/png;base64,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" />
                  </div>
                  <span className="text-lg font-medium">
                    World Wildlife Fund
                  </span>
                </a>
              </Link>
            </div>
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              <button
                className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="User login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
              </button>
              <Link href="/wishlist">
                <a
                  className="px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </a>
              </Link>
              <button
                className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
      <footer className="max-w-6xl mx-auto px-6">
        <div className="py-6 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            Powered by
            <a
              href="https://headlessdropshipping.com"
              title="Learn more about how this site was made"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-blue-600"
            >
              Headless Dropshipping Starter
            </a>
            , Built by{" "}
            <a
              href="https://twitter.com/notrab"
              title="Follow the creator on Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-blue-600"
            >
              @notrab
            </a>
          </p>
          <nav className="flex items-center justify-end space-x-3 md:space-x-6">
            <Link href="/about">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                FAQS
              </a>
            </Link>
            <Link href="/terms-of-sale">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                Terms of Sale
              </a>
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;
