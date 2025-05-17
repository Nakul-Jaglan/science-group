import Footer from "../components/footer"
import Header from "../components/header"
import Team from "../components/team"

function Page() {
  return (
    <>
        <header>
            <Header/>
        </header>

        <main>
            <section className="title">
                <h1 className="text-6xl font-semibold text-center my-5 pb-5 border-b-2 border-black text-[#2061b7]">About Us</h1>
            </section>
            
            <section className="about text-xl font-medium text-center px-50 pb-10 mb-5 border-b-2 pt-5">
                <p>
                    Welcome to <span className="font-semibold">SCIENCE</span>, headquartered in Delhi, India, where innovation thrives in the development, production, and distribution of cutting-edge technical solutions. Specializing in the SCIENCE brand of <span className="font-semibold">DC-DC converters, switching power supplies, debug cables, antennas</span>, and other technical products, we are driven by our mission to establish globally renowned, high-tech industrial power supplies.
                </p>

                <br/>
                
                <p>
                    Our team comprises exceptional experts and seasoned technical professionals, boasting years of experience in switching and module power supplies. This expertise fuels our robust R&D, production, quality assurance, management, and market teams. 
                </p>

                <br/>

                <p>
                    Our portfolio features highly stable and efficient power supply products, meticulously designed and manufactured for top-tier industries such as <span className="font-semibold">automotive, telecommunications, industrial applications, and medical sectors.</span>
                </p>

                <br/>

                <p>
                    Recognizing diverse customer needs, we have dedicated research and development units for bespoke power supply solutions and specialized modules. Our extensive product lines include <span className="font-semibold">DC-DC power modules and AC-DC power systems</span> widely adopted across various sectors.
                </p>

                <br/>

                <p>
                    We pride ourselves on first-class talent, leading-edge technology, unparalleled quality, <span className="font-semibold">state-of-the-art</span> equipment, and exceptional service. This commitment ensures that our stable and high-performance power supply solutions earn the trust and accolades of customers both domestically and internationally.
                </p>

                <br/>

                <p>
                    At <span className="font-semibold">SCIENCE</span>, we uphold the highest standards, providing not only superior products but also ensuring exemplary <span className="font-semibold">after-sales service.</span> Join us in powering your innovations with reliability and excellence.
                </p>
            </section>

            <Team/>
        </main>

        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default Page