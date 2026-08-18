import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";

const journeySteps = [
  {
    id: "01",
    phase: "Persiapan",
    description:
      "Koordinasi antar anggota, penyusunan program kerja, dan persiapan logistik sebelum keberangkatan ke desa.",
    duration: "2 minggu sebelum",
  },
  {
    id: "02",
    phase: "Keberangkatan",
    description:
      "Perjalanan menuju Desa Argotirto dan seremoni pembukaan resmi bersama perangkat desa dan tokoh masyarakat.",
    duration: "Hari 1",
  },
  {
    id: "03",
    phase: "Pengenalan Desa",
    description:
      "Adaptasi dengan lingkungan dan masyarakat, membangun kepercayaan dan menjalin silaturahmi dengan warga.",
    duration: "Hari 1–3",
  },
  {
    id: "04",
    phase: "Observasi",
    description:
      "Survei lapangan, pemetaan kebutuhan masyarakat, dan identifikasi potensi desa sebagai dasar program kerja.",
    duration: "Hari 2–5",
  },
  {
    id: "05",
    phase: "Pelaksanaan Program",
    description:
      "Menjalankan 8 program kerja lintas bidang: pendidikan, kesehatan, UMKM, teknologi, lingkungan, dan sosial.",
    duration: "Hari 5–27",
  },
  {
    id: "06",
    phase: "Evaluasi",
    description:
      "Refleksi bersama, pengukuran dampak program, dan penyusunan laporan untuk keberlanjutan program desa.",
    duration: "Hari 25–28",
  },
  {
    id: "07",
    phase: "Penutupan",
    description:
      "Festival Budaya, seremoni penutupan resmi, perpisahan yang penuh haru bersama warga Argotirto.",
    duration: "Hari 27–30",
  },
];

export default function JourneySection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#09090b" }}
      aria-label="Perjalanan KKN"
    >
      <GreenBlob position="center-left" opacity={0.12} size="500px" />
      <GreenBlob position="bottom-right" opacity={0.08} size="400px" />
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Perjalanan Kami"
            title="Tujuh Fase Satu Perjalanan"
            subtitle="Dari persiapan hingga penutupan, setiap fase membawa pelajaran berharga bagi kami semua."
          />
        </ScrollReveal>

        {/* Timeline */}
        <div className="mt-14 relative">
          {/* Center line — desktop only */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, #27272a 8%, #27272a 92%, transparent)" }}
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-0">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal key={step.id} delay={(index % 4) as 0 | 1 | 2 | 3}>
                  <div
                    className={`md:grid md:grid-cols-2 md:gap-12 items-center ${
                      isEven ? "" : "md:[direction:rtl]"
                    }`}
                  >
                    {/* Content card */}
                    <div className={`${isEven ? "md:text-right" : ""} md:[direction:ltr]`}>
                      <div
                        className="inline-block p-5 rounded-2xl border border-dark-border transition-all duration-300 hover:shadow-card-hover hover:border-neon/30 text-left"
                        style={{
                          background: "#18181b",
                        }}
                      >
                        <div
                          className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : ""}`}
                        >
                          <span
                            className="font-display font-black text-4xl leading-none"
                            style={{ color: "rgba(107,150,134,0.08)" }}
                          >
                            {step.id}
                          </span>
                          <div>
                            <h3 className="font-display font-bold text-[18px] text-white">
                              {step.phase}
                            </h3>
                            <span className="text-[11px] font-medium text-neon bg-neon/10 px-2 py-0.5 rounded-full border border-neon/20">
                              {step.duration}
                            </span>
                          </div>
                        </div>
                        <p className="text-[14px] text-light-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot — desktop */}
                    <div className="hidden md:flex md:[direction:ltr] items-center justify-center relative">
                      <div className="w-4 h-4 rounded-full bg-neon ring-4 ring-dark-card z-10 shadow-[0_0_10px_rgba(107,150,134,0.6)]" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
