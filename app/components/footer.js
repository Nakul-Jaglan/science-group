import Link from 'next/link';

function Footer() {
  return (
    <>
        <section className="flex justify-around  gap-30 pl-10 pr-20 bg-[#22ace3] py-5">
          <section className="flex items-center">
            <Link href="/">
                <img src="/logo.png" alt="Logo" className="h-40"/>
            </Link>
            <Link href="/">
                <h1 className="text-4xl font-semibold text-white">Science Group</h1>
            </Link>
          </section>

          <section className="navbar">
            <h1 className="text-2xl font-semibold">LINKS</h1>
            <nav className="flex flex-col gap-2 text-1xl pl-1 pt-2 text-white">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </section>

          <section className="about">
            <h1 className="text-2xl font-semibold">ABOUT</h1>

            <section className="flex flex-col gap-2 text-1xl pl-1 pt-2 text-white max-w-70">
              <a href="mailto:mail.sciencegroup@gmail.com" target="_blank">mail.sciencegroup@gmail.com</a>
              <a href="tel:+919711378092" target="_blank">Tel: +91 9711378092</a>
              <a href="https://maps.app.goo.gl/tBMyhPz7dQ6sXcGq7" target="_blank">Address: D-31, 2nd Floor, Veena Enclave Nangloi New Delhi, 110041, West Delhi, India</a>
            </section>
          </section>

          <section className="social">
            <h1 className="text-2xl font-semibold">SOCIAL</h1>
            <section className=" text-1xl pl-1 pt-2 text-white">
              <a href="https://www.linkedin.com/in/sachin-kumar-94167922b/" target="_blank" className="flex items-center">
                <img src="/linkedin.png" alt="LinkedIn" className="h-7 w-7 mr-2" />
                <p>CEO - LinkedIn</p>
              </a>
              <br/>
              <a href="https://www.linkedin.com/in/nakuljaglan/" target="_blank" className="flex items-center">
                <img src="/linkedin.png" alt="LinkedIn" className="h-7 w-7 mr-2" />
                <p>CTO - LinkedIn</p>
              </a>
            </section>
          </section>
        </section>

        <section className="bg-white text-black">
          <h1 className="text-center text-2xl font-semibol py-2.5">© 2025 Science Group. All rights reserved.</h1>
        </section>
    </>
  )
}

export default Footer