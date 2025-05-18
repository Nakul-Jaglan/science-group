import Link from "next/link"
import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import Breadcrumbs from "@/app/components/breadcrumbs"

function Page() {
  let products = [
    {
      name: "8-40V to 12V Series",
      description: "Wide input voltage from 8-40Vdc, Output power ranges from 12W to 500W. This series is eminently suitable for applications requiring stability, and, above all, low energy consumption. To your 12 Volt system, these products are also distinguished by high efficiency, together with absolute safety.",
      image: "/Products/buck-boost-dc-dc/01.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "8-40V to 13.8V Series",
      description: "Wide input voltage from 8-40Vdc, Output power ranges from 27W to 500W. This series is eminently suitable for applications requiring stability, and, above all, low energy consumption. To your 13.8 Volt system, these products are also distinguished by high efficiency, together with absolute safety.",
      image: "/Products/buck-boost-dc-dc/02.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "9-40V to 19V Series",
      description: "Wide input voltage from 9-40Vdc, Output power ranges from 95W to 300W. This series is eminently suitable for applications requiring stability, and, above all, low energy consumption. To your 19 Volt system, these products are also distinguished by high efficiency, together with absolute safety.",
      image: "/Products/buck-boost-dc-dc/03.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "9-40V to 24V Series",
      description: "Wide input voltage from 9-40Vdc, Output power ranges from 24W to 500W. This series is eminently suitable for applications requiring stability, and, above all, low energy consumption. To your 24 Volt system, these products are also distinguished by high efficiency, together with absolute safety.",
      image: "/Products/buck-boost-dc-dc/04.jpg",
      link: "/products/isolated-dc-dc-convertors"
    }
  ]
  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <section className="hero">
          <img src="/hero-1.png" alt="DC-DC Converters" className="w-full h-100 object-cover"/>
        </section>

        <Breadcrumbs/>

        <section>
          <h1 className="text-7xl text-center mt-5 text-[#2061b7]">Buck-Boost DC-DC Converters</h1>

          <section className="grid grid-cols-2 gap-20 py-5 px-30 justify-items-center my-5">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full"/>
                <div className="p-4">
                  <h1 className="text-3xl font-semibold text-center">{product.name}</h1>
                  <p className="text-gray-700">{product.description}</p>
                  <Link href={product.link} target="_blank"><button className="text-xl font-medium text-center bg-[#000] text-white px-5 py-3 rounded-xl cursor-pointer mt-4 w-full self-end">Explore This</button></Link>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Page