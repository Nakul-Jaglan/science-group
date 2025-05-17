import Footer from "../components/footer"
import Header from "../components/header"
import Form from "../components/form";
import Touch from "../components/touch";

function Page() {
    
  return (
    <>
        <header>
            <Header/>
        </header>

        <main>
            <section>
                <h1 className="text-7xl text-center mt-5">CONNECT WITH US</h1>
            </section>

            <section className="grid grid-cols-2 gap-4 py-5 px-10 justify-items-center border-t-3 border-b-3 border-black my-5">
                <Touch/>
                <Form/>
            </section>

            <section>
                <h1 className="text-5xl font-semibold text-center pb-5">Find Us Here</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.08300465562525!2d77.05533347557726!3d28.682321713479396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05cca02a0cf9%3A0x2befc63d115c3d1e!2sDomino&#39;s%20Pizza%20%7C%20Nangloi%2C%20New%20Delhi!5e1!3m2!1sen!2sin!4v1747464542991!5m2!1sen!2sin" className="w-full h-100" loading="lazy"></iframe>            
            </section>
        </main>

        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default Page