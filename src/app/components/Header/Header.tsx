import Link from "next/link"

export default function Header() {
    return(
        <header className="top-0 left-0 w-full z-50 bg-transparent text-white p-6 flex justify-between items-center text-xl">
          <Link href="/" passHref>
            <h1 className="cursor-pointer">OPS Quzet</h1>
          </Link>
          <a href="tel:+77054000201">+7(705) 400-0201</a>
        </header>
    )
}