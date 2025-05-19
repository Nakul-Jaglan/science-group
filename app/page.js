import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  let products = [
    { image: "/1.png", link: "/products/isolated-dc-dc-convertors" },
    { image: "/2.png", link: "/products/boost-buck-convertors" },
    { image: "/3.png", link: "/products/buck-dc-dc-convertors" },
    { image: "/4.png", link: "/products/boost-dc-dc-convertors" },
    { image: "/5.png", link: "/products/ac-dc-power-supplies" },
    { image: "/6.png", link: "/products/ac-dc-battery-chargers" },
    { image: "/7.png", link: "/products/dc-dc-battery-chargers" },
    { image: "/8.png", link: "/products/cables" },
    { image: "/9.png", link: "/products/antennas" }
  ];
  
  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <section>
          <img src="/hero-main.png" alt="Hero Image"/>
        </section>

        <section>
          <h1 className="text-center text-9xl font-medium">Our Products</h1>

          <section className="grid grid-cols-3 gap-3 p-10 justify-items-center">
            {products.map((product, index) => (
              <section key={index}>
                <Link href={product.link}><img src={product.image} alt={`Product ${index + 1}`}/></Link>
              </section>
            ))}
          </section>
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}
