import Link from "next/link"
import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import Breadcrumbs from "@/app/components/breadcrumbs"

function Page() {
  let products = [
    {
      name: "35-100V to 5V Series",
      description: "This series is a complete line of highly efficient isolated DC-DC converters suitable for applications requiring galvanic isolation between the input and the output. The isolated DC-DC converter provides a highly regulated output DC voltage of 5 Volts for an input DC voltage range of 35-100 Volts. Features include short circuit, overheating , waterproof and overvoltage protection.",
      image: "/Products/isolated-dc-dc/1.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "35-100V to 12V Series",
      description: "This series is a complete line of highly efficient isolated DC-DC converters suitable for applications requiring galvanic isolation between the input and the output. The isolated DC-DC converter provides a highly regulated output DC voltage of 12 Volts for an input DC voltage range of 35-100 Volts. Features include short circuit, overheating , waterproof and overvoltage protection.",
      image: "/Products/isolated-dc-dc/2.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "35-100V to 24V Series",
      description: "This series is a complete line of highly efficient isolated DC-DC converters suitable for applications requiring galvanic isolation between the input and the output. The isolated DC-DC converter provides a highly regulated output DC voltage of 24 Volts for an input DC voltage range of 35-100 Volts. Features include short circuit, overheating , waterproof and overvoltage protection.",
      image: "/Products/isolated-dc-dc/3.jpg",
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
          <h1 className="text-7xl text-center mt-5 text-[#2061b7]">Isolated DC-DC Converters</h1>

          <section className="grid grid-cols-3 gap-4 py-5 px-10 justify-items-center my-5">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-100"/>
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