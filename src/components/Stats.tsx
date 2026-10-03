export default function Stats() {
  const statsData = [
    { number: "2,400+", label: "Homes serviced" },
    { number: "1,850+", label: "Doors & openers installed" },
    { number: "4.9★", label: "Average review rating" },
    { number: "12 yrs", label: "In business" },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 px-5 sm:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col items-start">
            <span className="text-[clamp(2.5rem,4vw,3.75rem)] font-extrabold leading-none tracking-tighter text-slate-900">
              {stat.number}
            </span>
            <span className="text-sm sm:text-base font-medium text-slate-500 mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
