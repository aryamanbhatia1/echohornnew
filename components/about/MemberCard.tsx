'use client';

import Image from "next/image";

type MemberCardProps = {
  imageUrl: string;
  name: string;
  role: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
};

const MemberCard = ({
  imageUrl,
  name,
  role,
  description,
  isActive = false,
  onClick,
}: MemberCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-[30px] border p-5 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 ${
        isActive
          ? "border-yellow-300/50 bg-[linear-gradient(180deg,rgba(250,204,21,0.1),rgba(255,255,255,0.04))] shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
          : "border-white/10 bg-white/[0.05] hover:border-white/20 hover:bg-white/[0.08]"
      }`}
      aria-pressed={isActive}
    >
      <div className="flex items-start gap-5">
        <Image
          src={imageUrl}
          alt={`Photo of ${name}`}
          width={148}
          height={148}
          className="h-28 w-28 rounded-[24px] object-cover border border-white/10"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-yellow-200/85">{role}</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default MemberCard;
