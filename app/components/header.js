import Link from 'next/link';

function Header() {
  return (
    <section className="flex justify-around items-center gap-20 bg-[#22ace3]">
        <section className="flex items-center">
          <Link href="/">
              <img className="h-40" src="/logo.png" alt="Logo" />
          </Link>
          <Link href="/">
              <h1 className="text-4xl font-semibold text-white">Science Group</h1>
          </Link>
        </section>

        <nav className="flex gap-20 text-2xl text-white">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>
    </section>
  )
}

export default Header