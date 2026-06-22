const sections = ["hero", "featured-projects", "projects", "about", "contact"];

export default function ScrollDownButton() {
  const scrollToNextSection = () => {
    const current = window.scrollY;

    const next = sections.find((id) => {
      const el = document.getElementById(id);
      return el && el.offsetTop > current + 10;
    });

    if (next) {
      document.getElementById(next)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-6 right-6 z-50 bg-white border border-[#2A3D63] shadow p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Scroll down"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-[#2A3D63]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}
