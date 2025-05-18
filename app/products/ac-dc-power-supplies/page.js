import Link from "next/link"
import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import Breadcrumbs from "@/app/components/breadcrumbs"

function Page() {
  let products = [
    {
      name: "SDA125 Series",
      image: "/Products/power-ac-dc/1.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SDA65 Series",
      image: "/Products/power-ac-dc/2.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSA100 Series",
      image: "/Products/power-ac-dc/3.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSA120 Series",
      image: "/Products/power-ac-dc/4.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSA150 Series",
      image: "/Products/power-ac-dc/5.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSA15 Series",
      image: "/Products/power-ac-dc/6.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSA240 Series",
      image: "/Products/power-ac-dc/7.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSA25 Series",
      image: "/Products/power-ac-dc/8.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSA350 Series",
      image: "/Products/power-ac-dc/9.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSA480 Series",
      image: "/Products/power-ac-dc/10.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSA75 Series",
      image: "/Products/power-ac-dc/11.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSB100 Series",
      image: "/Products/power-ac-dc/12.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSB150 Series",
      image: "/Products/power-ac-dc/13.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSC100 Series",
      image: "/Products/power-ac-dc/14.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSD120 Series",
      image: "/Products/power-ac-dc/15.jpg",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "SSS120 Series",
      image: "/Products/power-ac-dc/16.jpg",
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
          <h1 className="text-7xl text-center mt-5 text-[#2061b7]">AC-DC Power Supplies</h1>

          <section className="grid grid-cols-4 gap-10 py-5 px-10 justify-items-center my-5">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full"/>
                <div className="p-4">
                  <h1 className="text-3xl font-semibold text-center">{product.name}</h1>
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