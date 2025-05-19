import Link from "next/link"
import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import Breadcrumbs from "@/app/components/breadcrumbs"

function Page() {
  let products = [
    {
      name: "SGWF-XPL-150 2.4Ghz",
      description: "5PC 4G 5.8G WIFI Antenna High Gain SMA-J Antenna for Wireless Modem Signal booster Hotspot Miner Helium Miner IoT",
      image: "/Products/antennas/1.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SGWF-PCB-5109 2.4Ghz",
      description: "SCIENCE Flexible Wifi PCB Dual-band built-in 2.4G 5.8G 120mm IPX 1 Interface Antena PCB built-in antenna",
      image: "/Products/antennas/2.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SG5800-BLG-40 5.8Ghz",
      description: "SG5800-BLG-40 fiberglass antenna",
      image: "/Products/antennas/3.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SG433-BLG-48 433Mhz",
      description: "antennas for communications 433Mhz long range communication antenna outdoor high gain fiberglass antenna wholesale",
      image: "/Products/antennas/4.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SG433-PCB-4310 433Mhz",
      description: "SG433-PCB-4310 Flexible PCB Antenna",
      image: "/Products/antennas/5.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SG433-BLG-12 433Mhz",
      description: "SG433-BLG-12 is a 433MHz frequency band fiberglass antenna, the antenna length is about 120mm, N-J interface (N male).",
      image: "/Products/antennas/6.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SG433-BLG-20L 433Mhz",
      description: "SG433-BLG-20L is a 433MHz band fiberglass antenna with an antenna length of about 200mm and an N male elbow interface.",
      image: "/Products/antennas/7.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SG433-BLG-40 433Mhz",
      description: "SG433-BLG-40 is a 433MHz band fiberglass antenna with an antenna length of about 400mm and an N male elbow interface.",
      image: "/Products/antennas/8.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SGGN-FPC-4410",
      description: "SCIENCE 3dBi high gain 2G/GSM/GPRS/NB-IoT IPEX-1 antenna",
      image: "/Products/antennas/9.jpg",
      link: "/products/isolated-dc-dc-convertors"
    }
  ];
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
          <h1 className="text-7xl text-center mt-5 text-[#2061b7]">Antennas</h1>

          <section className="grid grid-cols-3 gap-10 py-5 px-10 justify-items-center my-5">
            {products.map((product, index) => (
              <section key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-140">
                <img src={product.image} alt={product.name} className="w-full h-80"/>
                <section className="p-4 flex flex-col flex-1">
                  <h1 className="text-3xl font-semibold text-center">{product.name}</h1>
                  <p className="text-gray-700 flex-1">{product.description}</p>
                  <section className="mt-4">
                    <Link href={product.link}>
                      <button className="text-xl font-medium text-center bg-[#000] text-white px-5 py-3 rounded-xl cursor-pointer w-full">
                        Explore This
                      </button>
                    </Link>
                  </section>
                </section>
              </section>
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