import Link from "next/link"
import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import Breadcrumbs from "@/app/components/breadcrumbs"

function Page() {
  let products = [
    {
      name: "300W AC-DC Waterproof Battery Charger",
      description: "The C300S series Lithium Battery Charger 12V/24V/36V/48V 300W has optimized this charger for use with LiFePO4 and LiMn2O4. AC input voltage provides 90-265VAC, and rated output voltage is DC 12V 300W. Intelligent stages charging with CC, CV. For 12V LiFePO4, CC value is 14.6V, and 12V LiMn2O4 (3 series) is 12.6V.",
      image: "/Products/battery-ac-dc/01.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "600W AC-DC Waterproof Battery Charger",
      description: "The C600S series Lithium Battery Charger 12V/24V/36V/48V 600W has optimized this charger for use with LiFePO4 and LiMn2O4. AC input voltage provides 90-265VAC, and rated output voltage is DC 12V 600W. Intelligent stages charging with CC, CV. For 12V LiFePO4, CC value is 14.6V, and 12V LiMn2O4 (3 series) is 12.6V.",
      image: "/Products/battery-ac-dc/02.jpg",
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
          <h1 className="text-7xl text-center mt-5 text-[#2061b7]">Waterproof AC-DC Lithium Chargers</h1>

          <section className="grid grid-cols-2 gap-20 py-5 px-35 justify-items-center my-5">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full"/>
                <div className="p-4">
                  <h1 className="text-3xl font-semibold text-center">{product.name}</h1>
                  <p className="text-gray-700">{product.description}</p>
                  <Link href={product.link} ><button className="text-xl font-medium text-center bg-[#000] text-white px-5 py-3 rounded-xl cursor-pointer mt-4 w-full self-end">Explore This</button></Link>
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