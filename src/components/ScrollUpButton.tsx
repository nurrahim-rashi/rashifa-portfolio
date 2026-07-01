export default function ScrollUpButton() {
  return (
    <a
      href="#top"
      className="fixed bottom-20 right-6 z-[999] bg-white border border-[#2A3D63] shadow p-3 rounded-full transition-all duration-300 hover:scale-110 transform-gpu pointer-events-auto"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-[#2A3D63]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </a>
  );
}
