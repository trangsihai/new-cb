

export default function Section1() {
  return (
    <section
      id="intro"
      className="mx-auto max-w-7xl p-6 py-16 md:py-24 lg:px-8"
    >
      <div className="grid items-start justify-between gap-5 md:grid-cols-2">
        <div className="pr-8 text-4xl/[1.07] font-bold tracking-tight md:pr-16 md:text-5xl/[1.07]">
          <span className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
            Who said finance has to be boring?
          </span>
        </div>
        <div className="text-lg text-zinc-400/80">
          With Cobalt, managing your business finances is effortless,
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making,
          and puts the power of advanced financial management right at your
          fingertips{" "}
          <span className="text-zinc-200">
            Say no to spreadsheets and tools designed in the 80s.
          </span>
        </div>
      </div>
    </section>
  );
}
