export function About() {
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center min-h-svh h-svh"
      id="about"
    >
      <p className="text-[rgba(var(--foreground-rgb),0.15)] font-display text-9xl">
        About
      </p>
      <div className="border-[rgba(var(--foreground-rgb),0.15)] border-solid border-2 bg-[rgb(var(--background-rgb))] min-h-[50%] min-w-80 w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-[960px]  rounded-2xl shadow-2xl shadow-[rgba(var(--foreground-rgb),0.15)]"></div>
    </section>
  );
}
