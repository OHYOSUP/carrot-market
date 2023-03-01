import Link from "next/link";

interface FloattingButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function FloattingButton({
  href,
  children,
}: FloattingButtonProps) {
  return (
    <Link legacyBehavior href={href}>
      <a className="fixed hover:bg-orange-500 cursor-pointer transition-colors bottom-24 right-5 bg-orange-400 rounded-full p-3 text-white shadow-xl">
        {children}
      </a>
    </Link>
  );
}
