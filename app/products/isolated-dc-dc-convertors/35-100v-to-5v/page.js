import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Breadcrumbs from "@/app/components/breadcrumbs"

function Page() {
    const specs = [
        {
            model: "SGI20-24S05M",
            inputVoltage: "18 - 36V",
            outputVoltage: "5V",
            outputPower: "0 ~ 100W",
            efficiency: "90%"
        },
        {
            model: "SGI20-48S05M",
            inputVoltage: "36 - 75V",
            outputVoltage: "5V",
            outputPower: "0 ~ 100W",
            efficiency: "90%"
        },
        {
            model: "SGI20-48S05L",
            inputVoltage: "36 - 75V",
            outputVoltage: "5V",
            outputPower: "0 ~ 100W",
            efficiency: "90%"
        }
    ];
  return (
    <>
        <header>
            <Header />
        </header>
    
        <main>
            <section className="hero">
                <img src="/hero-1.png" alt="DC-DC Converters" className="w-full h-100 object-cover" />
            </section>
    
            <Breadcrumbs />
    
            <section>
                <h1 className="text-7xl text-center mt-5 text-[#2061b7]">35-100V to 5V Series</h1>

                <section className="grid grid-cols-2 gap-0 py-5 px-5 justify-items-center my-5">
                    <section>
                        <img src="/Products/isolated-dc-dc/1.jpg" alt="35-100V to 5V Series" className="w-full"/>
                    </section>

                    <section className="p-4">
                        <h1 className="text-3xl font-semibold text-center">35-100V to 5V lsolated DC-DC Power Converters</h1>
                        <p className="text-gray-700 font-bold">Features:</p>
                        <br/>
                        <ul className="list-disc list-inside">
                            <li>Design meeting ROHS / CE</li>
                            <li>High efficiency:91%</li>
                            <li>lsolated between input and output</li>
                            <li>lnternal capacitor:NCC & NICHICON (high reliability)</li>
                            <li>100% full load burn-in test</li>
                            <li>Waterproof level IP68</li>
                            <li>Short circuit, Over load, Over-voltage and Over temperature protections</li>
                            <li>Applications: Electromotor Telecommunications, Logging Vehicles Forklifts and on.</li>
                        </ul>
                        <button className="text-xl font-medium text-center bg-[#000] text-white px-5 py-3 rounded-xl cursor-pointer mt-4 w-full self-end">Explore This</button>
                    </section>
                </section>

                <section className="table mx-auto my-5">
                    <h1 className="text-3xl font-semibold text-center">35-100V to 5V Series Specifications</h1>
                    <table className="w-full text-center border-collapse mt-5">
                        <thead className="bg-[#2061b7] text-white">
                            <tr>
                                <th className="border px-4 py-2">Model</th>
                                <th className="border px-4 py-2">Input Voltage Range (VDC)</th>
                                <th className="border px-4 py-2">Output Voltage (VDC)</th>
                                <th className="border px-4 py-2">Output Power (W)</th>
                                <th className="border px-4 py-2">Efficiency (%)</th>
                                <th className="border px-4 py-2">Download</th>
                            </tr>
                        </thead>

                        <tbody>
                            {specs.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="border px-4 py-2">{item.model}</td>
                                    <td className="border px-4 py-2">{item.inputVoltage}</td>
                                    <td className="border px-4 py-2">{item.outputVoltage}</td>
                                    <td className="border px-4 py-2">{item.outputPower}</td>
                                    <td className="border px-4 py-2">{item.efficiency}</td>
                                    <td className="border px-4 py-2">
                                        <a href={`/Products/isolated-dc-dc/pdf/${idx+1}.pdf`} target="_blank">
                                            <img src="/download.png" alt="Download PDF" className="h-6 mx-auto"/>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </section>
        </main>
    
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default Page