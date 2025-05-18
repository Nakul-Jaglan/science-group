import Link from "next/link"
import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import Breadcrumbs from "@/app/components/breadcrumbs"

function Page() {
  let products = [
    {
      name: "12V Lithium Battery Charger",
      description: "All lithium batteries on the market should be charged with a special charger for lithium batteries. If not, your battery will not be fully charged, or it will be damaged. The C400L series Lithium Battery Charger 12V 400W has optimized this charger for use with LiFePO4 and LiMn2O4. DC input voltage provides 10-36V DC",
      image: "/Products/battery-dc-dc/01.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "16V Lithium Battery Charger",
      description: "All lithium batteries on the market should be charged with a special charger for lithium batteries. If not, your battery will not be fully charged, or it will be damaged. The C800M series Lithium Battery Charger 16V 800W has optimized this charger for use with LiFePO4 and LiMn2O4. DC input voltage provides 10-44V DC",
      image: "/Products/battery-dc-dc/02.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "24V Lithium Battery Charger",
      description: "All lithium batteries on the market should be charged with a special charger for lithium batteries. If not, your battery will not be fully charged, or it will be damaged. The C400L series Lithium Battery Charger 24V 400W has optimized this charger for use with LiFePO4 and LiMn2O4. DC input voltage provides 10-36V DC",
      image: "/Products/battery-dc-dc/03.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "36V Lithium Battery Charger",
      description: "All lithium batteries on the market should be charged with a special charger for lithium batteries. If not, your battery will not be fully charged, or it will be damaged. The C400L series Lithium Battery Charger 36V 400W has optimized this charger for use with LiFePO4 and LiMn2O4. DC input voltage provides 10-36V DC",
      image: "/Products/battery-dc-dc/04.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "48V Lithium Battery Charger",
      description: "All lithium batteries on the market should be charged with a special charger for lithium batteries. If not, your battery will not be fully charged, or it will be damaged. The WG-12C4810M Lithium Battery Charger 48V 600W has optimized this charger for use with LiFePO4 and LiMn2O4. DC input voltage provides 10-20V DC",
      image: "/Products/battery-dc-dc/05.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "Lead-acid AGM Battery Charger",
      description: "Lead-acid AGM batteries require a dedicated charger to ensure optimal charging and long battery life. This charger is specifically designed for AGM chemistry, providing precise voltage and current control to prevent overcharging and extend battery performance. Compatible with a wide range of DC input voltages for flexible use.",
      image: "/Products/battery-dc-dc/06.jpg",
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
          <h1 className="text-7xl text-center mt-5 text-[#2061b7]">DC-DC Battery Chargers</h1>

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