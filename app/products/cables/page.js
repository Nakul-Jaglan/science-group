import Link from "next/link"
import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import Breadcrumbs from "@/app/components/breadcrumbs"

function Page() {
  let products = [
    {
      name: "",
      description: "",
      image: "/Products/cables/1.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/2.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/3.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/4.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/5.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/6.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/7.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/8.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/9.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/10.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/11.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/12.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/13.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/14.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/15.png",
      link: "/products/isolated-dc-dc-convertors"
    },
    {
      name: "",
      description: "",
      image: "/Products/cables/16.png",
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
          <h1 className="text-7xl text-center mt-5 text-[#2061b7]">Custom Cables</h1>

          <section className="grid grid-cols-4 gap-10 py-5 px-10 justify-items-center my-5">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-70"/>
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