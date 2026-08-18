import Link from "next/link";
import Image from "next/image";
import { type Member } from "@/data/members";
import { InstagramIcon } from "@/components/SocialIcons";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="group block card-base bg-dark-card border-dark-border overflow-hidden relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Link Overlay */}
      <Link href={`/anggota/${member.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">Lihat profil {member.name}</span>
      </Link>

      {/* Photo */}
      <div className="relative overflow-hidden aspect-square bg-dark">
        <Image
          src={member.photo}
          alt={`Foto ${member.name}`}
          fill
          className="img-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Role badge on hover */}
        <div className="absolute bottom-3 left-3 right-3 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="badge badge-neon text-xs bg-black/80 border-neon/30 text-neon">
            {member.role}
          </span>
        </div>

        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark to-dark-card -z-10">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center mx-auto mb-2 border border-neon/20">
              <span className="text-2xl font-display font-bold text-neon">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 bg-dark-card border-t border-dark-border relative z-20 flex flex-col h-full">
        <div className="mb-1">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-neon">
            {member.role}
          </span>
        </div>
        <h3 className="font-display font-semibold text-[15px] text-white leading-tight mb-2 group-hover:text-neon transition-colors duration-200">
          {member.name}
        </h3>
        
        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="text-[12px] font-medium text-light-muted line-clamp-1">
            {member.major}
          </p>
          {member.instagram && (
            <a 
              href={member.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-muted hover:text-neon transition-colors duration-200 p-1"
              aria-label={`Instagram ${member.name}`}
            >
              <InstagramIcon size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
