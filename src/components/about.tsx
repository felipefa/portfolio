export function About() {
  return (
    <section
      className="bg-[rgba(0,0,0,0.25)] flex flex-col justify-between min-h-screen"
      id="about"
    >
      <div className="flex flex-1">
        <div className="flex items-center">
          <p className="text-[#45254B] font-display text-9xl -rotate-90">
            About
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="bg-[#45254B] min-h-[60%] max-w-[60%] my-auto rounded-sm shadow-2xl shadow-[rgba(69, 37, 75, 0.35)] w-full"></div>
        </div>
      </div>
    </section>
  );
}
