import Link from "next/link"
import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import Breadcrumbs from "@/app/components/breadcrumbs"

function Page() {
  let products = [
    {
      name: "12V-24V to 5V Series",
      description: "This highly efficient switch mode step-dwon DC-DC converter converts an input voltage of 12/24 VDC nominal (range 8 VDC to 36 VDC) to a highly regulated output voltage of 5 VDC nominal. These DC-DC converters is non-isolated (no galvanic isolation between input and output) and meant for use in negative ground systems. Features include waterproof, overcurrent, short-circuit and lowvoltage protection.",
      image: "/Products/buck-dc-dc/01.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "24V to 12V Series",
      description: "This highly efficient switch mode step-dwon DC-DC converter converts an input voltage of 24 VDC nominal (range 18 VDC to 36 VDC) to a highly regulated output voltage of 12 VDC nominal. These DC-DC converters is non-isolated (no galvanic isolation between input and output) and meant for use in negative ground systems. Features include waterproof, overcurrent, short-circuit and lowvoltage protection.",
      image: "/Products/buck-dc-dc/02.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "24V to 13.8V Series",
      description: "This highly efficient switch mode step-dwon DC-DC converter converts an input voltage of 24 VDC nominal (range 18 VDC to 36 VDC) to a highly regulated output voltage of 13.8 VDC nominal. These DC-DC converters is non-isolated (no galvanic isolation between input and output) and meant for use in negative ground systems. Features include waterproof, overcurrent, short-circuit and lowvoltage protection.",
      image: "/Products/buck-dc-dc/03.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "48V to 12V Series",
      description: "This highly efficient switch mode step-dwon DC-DC converter converts an input voltage of 48 VDC nominal (range 30 VDC to 60 VDC) to a highly regulated output voltage of 12 VDC nominal. These DC-DC converters is non-isolated (no galvanic isolation between input and output) and meant for use in negative ground systems. Features include waterproof, overcurrent, short-circuit and lowvoltage protection.",
      image: "/Products/buck-dc-dc/04.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "48V to 13.8V Series",
      description: "This highly efficient switch mode step-dwon DC-DC converter converts an input voltage of 48 VDC nominal (range 30 VDC to 60 VDC) to a highly regulated output voltage of 13.8 VDC nominal. These DC-DC converters is non-isolated (no galvanic isolation between input and output) and meant for use in negative ground systems. Features include waterproof, overcurrent, short-circuit and lowvoltage protection.",
      image: "/Products/buck-dc-dc/05.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "48V to 24V Series",
      description: "This highly efficient switch mode step-dwon DC-DC converter converts an input voltage of 48 VDC nominal (range 30 VDC to 60 VDC) to a highly regulated output voltage of 24 VDC nominal. These DC-DC converters is non-isolated (no galvanic isolation between input and output) and meant for use in negative ground systems. Features include waterproof, overcurrent, short-circuit and lowvoltage protection.",
      image: "/Products/buck-dc-dc/06.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },{
      name: "60V to 12V Series",
      description: "This highly efficient switch mode step-dwon DC-DC converter converts an input voltage of 60 VDC nominal (range 30 VDC to 72 VDC) to a highly regulated output voltage of 12 VDC nominal. These DC-DC converters is non-isolated (no galvanic isolation between input and output) and meant for use in negative ground systems. Features include waterproof, overcurrent, short-circuit and lowvoltage protection.",
      image: "/Products/buck-dc-dc/07.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "72V to 12V Series",
      description: "This highly efficient switch mode step-dwon DC-DC converter converts an input voltage of 72 VDC nominal (range 18 VDC to 90 VDC) to a highly regulated output voltage of 12 VDC nominal. These DC-DC converters is non-isolated (no galvanic isolation between input and output) and meant for use in negative ground systems. Features include waterproof, overcurrent, short-circuit and lowvoltage protection.",
      image: "/Products/buck-dc-dc/08.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "72V to 24V Series",
      description: "This highly efficient switch mode step-dwon DC-DC converter converts an input voltage of 72 VDC nominal (range 30 VDC to 90 VDC) to a highly regulated output voltage of 24 VDC nominal. These DC-DC converters is non-isolated (no galvanic isolation between input and output) and meant for use in negative ground systems. Features include waterproof, overcurrent, short-circuit and lowvoltage protection.",
      image: "/Products/buck-dc-dc/09.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
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
          <h1 className="text-7xl text-center mt-5 text-[#2061b7]">Buck DC-DC Converters</h1>

          <section className="grid grid-cols-3 gap-4 py-5 px-10 justify-items-center my-5">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-100"/>
                <div className="p-4">
                  <h1 className="text-3xl font-semibold text-center">{product.name}</h1>
                  <p className="text-gray-700">{product.description}</p>
                  <Link href={product.link}><button className="text-xl font-medium text-center bg-[#000] text-white px-5 py-3 rounded-xl cursor-pointer mt-4 w-full self-end">Explore This</button></Link>
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