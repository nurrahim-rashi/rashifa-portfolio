type Props = {
  title: string;
  org: string;
  year: string;
  link?: string;
};

export default function CertificateCard({ title, org, year, link }: Props) {
  const CardContent = (
    <div className="group border border-[#2A3D63] p-5 rounded-xl transition duration-300 hover:ring-2 hover:ring-white hover:bg-white hover:border-neutral-800 cursor-pointer">
      <h3 className="text-lg text-[#2A3D63] font-boldrussian font-semibold mb-1 group-hover:text-[#2A3D63]">
        {title}
      </h3>

      <p className="text-sm text-neutral-600 group-hover:text-[#2A3D63]">
        {org} • {year}
      </p>

      {/* subtle hint instead of button */}
      <p className="inline-block mt-3 text-md text-[#2A3D63] font-script group-hover:text-[#2A3D63] hover:underline">
        View certificate →
      </p>
    </div>
  );

  // ✅ Full card is clickacble
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
