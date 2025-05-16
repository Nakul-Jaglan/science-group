import Link from "next/link";

export default function Home() {
  let products = [
    {
      image: "/1.png",
    },
    {
      image: "/2.png",
    },
    {
      image: "/3.png",
    },
    {
      image: "/4.png",
    },
    {
      image: "/5.png",
    },
    {
      image: "/6.png",
    },
    {
      image: "/7.png",
    },
    {
      image: "/8.png",
    },
    {
      image: "/9.png",
    }
  ]
  return (
    <>
      <header>
        <section className="flex justify-around items-center gap-20 bg-[#22ace3]">
          <section className="flex items-center">
            <a href="/">
              <img className="h-40" src="/logo.png" alt="Logo" />
            </a>
            <a href="/">
              <h1 className="text-4xl font-semibold text-white">Science Group</h1>
            </a>
          </section>
          <nav className="flex gap-20 text-2xl text-white">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </section>
      </header>

      <main>
        <section>
          <img src="/hero-main.png" alt="Hero Image"/>
        </section>

        <section>
          <h1 className="text-center text-9xl font-medium">Our Products</h1>

          <section className="grid grid-cols-3 gap-4 p-10 justify-items-center">
            {products.map((product, index) => (
              <section key={index}>
                <img src={product.image} alt={`Product ${index + 1}`} />
              </section>
            ))}
          </section>
        </section>
      </main>

      <footer>
        <section className="flex justify-around items-center gap-30 px-10 bg-[#22ace3] py-5">
          <section className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-40"/>
            <h1 className="text-4xl font-semibold text-white">Science Group</h1>
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

            <section className="flex flex-col gap-2 text-1xl pl-1 pt-2 text-white max-w-90">
              <a href="mailto:mail.sciencegroup@gmail.com" target="_blank">mail.sciencegroup@gmail.com</a>
              <a href="tel:+919711378092" target="_blank">Tel: +91 9711378092</a>
              <a href="https://maps.app.goo.gl/tBMyhPz7dQ6sXcGq7" target="_blank">Address: D-31, 2nd Floor, Veena Enclave Nangloi New Delhi, 110041, West Delhi, India</a>
            </section>
          </section>

          <section className="social">
            <h1 className="text-2xl font-semibold">SOCIAL</h1>
            <section className=" text-1xl pl-1 pt-2 text-white">
              <a href="https://www.linkedin.com/in/sachin-kumar-94167922b/" target="_blank" className="flex items-center">
                <img src="/linkedin.png" alt="LinkedIn" className="h-5 w-5 mr-2" />
                <p>CEO - LinkedIn</p>
              </a>
              <br />
              <br />
              <br />
            </section>
          </section>
        </section>
      </footer>
    </>
  );
}
