import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

function Page() {
  let products = [
    {
      name: "Isolated DC-DC Converters",
      description: "DC-DC Converters which will convert source DC into a variety of output voltages at power levels to suit your requirements. This series is a complete line of highly efficient 1-360 Watt isolated DC-DC converter, suitable for applications requiring galvanic isolation between the input and the output. ",
      image: "/Products/product1.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "Buck DC-DC Converters",
      description: "A complete line of high quality DC/DC converters in a compact housing. This series is eminently suitable for applications requiring stability, a modest development of heat. These products are also distinguished by high efficiency, together with absolute safety. Models are available with output current capability ranging from 1 Amps to 150 Amps.",
      image: "/Products/product2.jpg",
      link: "/products/buck-dc-dc-convertors"
    },
    {
      name: "Boost DC-DC Converters",
      description: "This highly efficient switch mode step-up DC-DC power converters which raise the input DC voltage level to a higher value. These are housed in a metal case which can easily be mounted directly to (or near) your equipment. Models are available with output current capability ranging from 1 Amps to 50 Amps.",
      image: "/Products/product3.jpg",
      link: "/products/boost-dc-dc-convertors"
    },
    {
      name: "Boost-Buck DC-DC Converters",
      description: "Output power ranges from 12W to 500W. The buck-boost DC-DC converter offers a greater level of capability than the buck converter of boost converter individually. High power 12V to 12V, and 24V to 24V DC/DC buck-boost converters at low cost. Suitable for voltage stabilization of automobile electronics, special purpose UPS, etc. ",
      image: "/Products/product4.jpg",
      link: "/products/boost-buck-convertors"
    },
    {
      name: "DC-DC Battery Chargers",
      description: "The DC-DC Battery Charger was developed for the purpose of charging and maintaining any auxiliary battery in an installation where the starting battery is used as the supply source. It has been designed for use in 4WDs, RVs, buses, coaches, caravans, campers or any dual battery system.",
      image: "/Products/product5.jpg",
      link: "/products/dc-dc-battery-chargers"
    },
    {
      name: "AC-DC Waterproof Lithium Chargers",
      description: "This unit is made of aluminum alloy, waterproof, and ready to charge right out of the box. This charger runs with the global standard wide 90-265VAC voltage input. Charge your 12V/ 24V/ 36V/48V Lithium, LiFePo4, Li Batteries in the most efficient way possible. Plug and Play with all of your lithium batteries.",
      image: "/Products/product6.jpg",
      link: "/products/ac-dc-battery-chargers"
    }
  ]

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <section className="hero">
          <img src="/hero-1.png" alt="Hero" className="w-full h-100 object-cover" />
        </section>

        <section>
          <h1 className="text-8xl text-center mt-5">PRODUCTS</h1>
        </section>

        <section className="grid grid-cols-3 gap-4 py-5 px-10 justify-items-center my-5">
          {products.map((product, index) => (
            <section key={index} className="border-1 border-black rounded-lg p-5 flex flex-col h-full">
              <section className="flex-1 flex flex-col">
                <img src={product.image} alt={product.name} className="w-full object-cover rounded-lg mb-4" />
                <h1 className="text-3xl font-semibold pb-2">{product.name}</h1>
                <p className="text-xl font-medium">{product.description}</p>
              </section>
              <Link href={product.link} target="_blank"><button className="text-xl font-medium text-center bg-black text-white px-5 py-3 rounded-xl cursor-pointer mt-4 w-full self-end">View More</button></Link>
            </section>
          ))}
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Page