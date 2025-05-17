import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  let products = [ {image: "/1.png"},{image: "/2.png"},{image: "/3.png"},{image: "/4.png"},{image: "/5.png"},{image: "/6.png"},{image: "/7.png"},{image: "/8.png"},{image: "/9.png"}]
  
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
        <Footer/>
      </footer>
    </>
  );
}
