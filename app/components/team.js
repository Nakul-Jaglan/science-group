function Team() {
  return (
    <section className="team">
        <h1 className="text-5xl font-semibold text-center my-5 pb-5 text-[#2061b7]">Meet <span className="pb-2 border-b-4 border-black">The</span> Team</h1>

        <section className="grid grid-cols-2 gap-4 p-10 justify-items-center">
            <section>
                <img src="/CEO.png" alt="CEO" className="mx-auto rounded-full w-97 h-100 "/>
                <h1 className="text-3xl font-semibold text-left mt-8 pl-0.5">Sachin</h1>
                <p className="text-xl font-medium pl-1 pt-1 flex flex-row justify-between">CEO
                    <span>
                        <a href="https://www.linkedin.com/in/sachin-kumar-94167922b/" target="_blank"><img src="/linkedin-bg.png" alt="LinkedIn" className="w-5 h-5 inline-block ml-2"/></a>
                    </span>
                </p>
            </section>

            <section>
                <img src="/CTO.png" alt="CTO" className="mx-auto rounded-full w-100"/>
                <h1 className="text-3xl font-semibold text-left mt-5 pl-0.5">Nakul</h1>
                <p className="text-xl font-medium pl-1 pt-1 flex flex-row justify-between" >CTO
                    <span>
                        <a href="https://www.linkedin.com/in/nakuljaglan/" target="_blank"><img src="/linkedin-bg.png" alt="LinkedIn" className="w-5 h-5 ml-2"/></a>
                    </span>
                </p>
            </section>
        </section>
    </section>
  )
}

export default Team