export default function Contact() {
  const socials = [
    {
      href: "https://github.com/nurrahim-rashi",
      icon: "fab fa-github",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/rashifa-nurrahim",
      icon: "fab fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://medium.com/@rashifa.nurrahim",
      icon: "fab fa-medium",
      label: "Medium",
    },
    {
      href: "mailto:rashifa.nurrahim@gmail.com",
      icon: "fas fa-envelope",
      label: "Email",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-[#F4EFE5] text-center bg-cover"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-script font-bold mb-6 text-[#2A3D63]">
          Let’s Connect!
        </h2>

        <p className="mb-6 text-neutral-600">
          I’m open to collaboration, freelance, or just chatting over coffee ☕️
        </p>
        <p className="mb-6 text-neutral-600">
          Btw, all of the visuals here are captured through my lens 🌿📷✨
        </p>

        {/* SOCIAL BUTTONS */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group w-12 h-12 flex items-center justify-center border rounded-full hover:scale-110 transition"
            >
              <i
                className={`${icon} text-xl text-[#2A3D63] transition-colors duration-700`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
