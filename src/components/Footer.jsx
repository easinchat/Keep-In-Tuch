// components/Footer.jsx
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="mt-10">
      {" "}
      <footer className="bg-[#244D3F] px-6 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          {/* উপরের অংশ */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">Keep-In-Tuch</h2>

            <p className="max-w-xl text-sm text-gray-300">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>

            <div className="mt-2 flex flex-col items-center gap-3">
              <span className="text-lg font-medium">Social Links</span>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#244D3F] transition hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#244D3F] transition hover:scale-110"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#244D3F] transition hover:scale-110"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* নিচের অংশ */}
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-sm text-gray-300 sm:flex-row">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
