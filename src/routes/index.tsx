import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import girl from "@/assets/girl.png";
import demoDoll from "@/assets/demo-doll.png";
import thoranam from "@/assets/thoranam.png";
import lamp from "@/assets/lamp.png";
import corner from "@/assets/corner.png";
import flowers from "@/assets/flowers.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "மஞ்சள் நீராட்டு விழா — செல்வி. S. அம்ரிதா" },
      {
        name: "description",
        content:
          "செல்வி. S. அம்ரிதா அவர்களின் மஞ்சள் நீராட்டு விழா அழைப்பிதழ் — 13-09-2026, ஞாயிற்றுக்கிழமை, பந்தநல்லூர்.",
      },
      { property: "og:title", content: "மஞ்சள் நீராட்டு விழா — செல்வி. S. அம்ரிதா" },
      {
        property: "og:description",
        content:
          "அன்புடன் அழைக்கிறோம் — 13-09-2026, காலை 10:30 மணி முதல், தஞ்சை மாவட்டம், பந்தநல்லூர்.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=4GJ6%2BR4H+Pandanallur%2C+Tamil+Nadu";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="gold-rule h-px w-16 sm:w-24" />
      <span className="text-gold-deep text-lg leading-none">❖</span>
      <span className="gold-rule h-px w-16 sm:w-24" />
    </div>
  );
}

function Corners() {
  return (
    <>
      <img
        src={corner}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -top-2 -left-2 w-16 -scale-x-100 opacity-80 sm:w-20"
      />
      <img
        src={corner}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -top-2 -right-2 w-16 opacity-80 sm:w-20"
      />
      <img
        src={corner}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -bottom-2 -left-2 w-16 -scale-100 opacity-80 sm:w-20"
      />
      <img
        src={corner}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -right-2 -bottom-2 w-16 -scale-y-100 opacity-80 sm:w-20"
      />
    </>
  );
}

const PETALS = [
  { left: "6%", delay: "0s", dur: "17s", size: 22 },
  { left: "22%", delay: "4s", dur: "21s", size: 16 },
  { left: "41%", delay: "9s", dur: "19s", size: 26 },
  { left: "63%", delay: "2s", dur: "23s", size: 18 },
  { left: "78%", delay: "12s", dur: "18s", size: 22 },
  { left: "91%", delay: "6s", dur: "25s", size: 15 },
];

function Petals() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {PETALS.map((p) => (
        <img
          key={p.left}
          src={flowers}
          alt=""
          className="animate-petal absolute top-0 opacity-60"
          style={{
            left: p.left,
            width: p.size,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}
    </div>
  );
}

function Index() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="from-ivory to-ivory-deep relative min-h-screen overflow-x-hidden bg-gradient-to-b">
      {/* Floating Brand Logo - Top Left */}
      <a
        href="https://milesstudioinvitations.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Miles Studio website"
        className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-maroon/20 bg-white/90 p-1.5 shadow-md backdrop-blur-md transition-all hover:scale-105 sm:left-6 sm:top-6 sm:h-14 sm:w-14"
      >
        <img
          src="/logo.png"
          alt="Miles Studio logo"
          className="h-full w-full rounded-full object-cover"
          width={48}
          height={48}
        />
      </a>

      <Petals />

      <div
        aria-hidden
        className="animate-glow pointer-events-none fixed top-[-20vh] left-1/2 z-0 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-gold) 30%, transparent), transparent 70%)",
        }}
      />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
        {/* முகப்பு */}
        <section id="mugappu" className="pt-6 text-center mx-auto max-w-3xl">
          <p className="text-leaf mb-4 font-tamil text-sm font-medium tracking-[0.2em] opacity-90">
            ஸ்ரீ சோனையன் துணை
          </p>
          <img
            src={thoranam}
            alt=""
            aria-hidden
            className="animate-sway mx-auto w-full max-w-xl origin-top"
            style={{ transform: `translateY(${Math.min(offset * 0.06, 24)}px)` }}
          />

          <div className="relative mt-8 overflow-hidden rounded-[2rem] p-5 pt-8 card-ivory sm:p-10">
            <Corners />

            <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:gap-6">
              <Reveal className="w-full sm:w-[45%]">
                <img
                  src={girl}
                  alt="பாவாடை தாவணி அணிந்த பாரம்பரிய தமிழ் சிறுமி ஓவியம்"
                  width={912}
                  height={1408}
                  className="mx-auto w-[68%] max-w-[300px] drop-shadow-[0_18px_28px_rgba(120,60,40,0.22)] sm:w-full"
                />
              </Reveal>

              <Reveal delay={120} className="w-full text-center sm:w-[55%] sm:text-left">
                <p className="text-leaf text-lg sm:text-xl">அன்புடன் அழைக்கிறோம்</p>
                <h2 className="text-maroon mt-2 text-3xl leading-snug font-bold sm:text-4xl">
                  மஞ்சள் நீராட்டு விழா
                </h2>
                <Divider className="mt-4 sm:justify-start" />
                <p className="text-muted-foreground mt-5 text-base sm:text-lg">
                  அன்பு மகள்
                </p>
                <p className="text-rose-gold mt-1 text-3xl font-semibold sm:text-[2.4rem]">
                  செல்வி. S. அம்ரிதா
                </p>
                <p className="text-leaf mt-3 text-base sm:text-lg">
                  P. சங்கர் – தமிழ்செல்வி அவர்களின் மகள்
                </p>
                <p className="text-muted-foreground mt-2 text-base sm:text-lg">
                  தஞ்சை மாவட்டம், பந்தநல்லூர்
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* அழைப்பு */}
        <section id="azhaippu" className="pt-14 mx-auto max-w-3xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem] card-ivory p-6 text-center sm:p-10">
              <Corners />
              <h2 className="text-maroon text-2xl font-semibold sm:text-3xl">அழைப்பு</h2>
              <Divider className="mt-4" />
              <p className="text-maroon mt-6 text-lg font-bold sm:text-xl">
                அன்புடையீர் வணக்கம்,
              </p>
              <p className="text-foreground/90 mt-4 text-lg leading-loose sm:text-xl">
                நிகழும் மங்களகரமான பராபவ ஆண்டு ஆவணி மாதம் 27-ம் தேதி (13-09-2026) ஞாயிற்றுக்கிழமை காலை 10.30 மணிக்கு மேல் 11.30 மணிக்குள் சுபயோக சுபதினத்தில், செல்வி <span className="font-bold text-maroon">அமிர்தாவின்</span> மஞ்சள் நீராட்டு விழா செய்வதாய் பெரியோர்களால் நிச்சயிக்கப்பட்டு, மேற்படி விழா பந்தநல்லூரில் உள்ள எங்கள் இல்லத்தில் நடைபெற இருப்பதால் தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகைதந்து விழாவைச் சிறப்பிக்க அன்புடன் அழைக்கின்றோம்.
              </p>
              <img
                src={lamp}
                alt=""
                aria-hidden
                loading="lazy"
                className="mx-auto mt-7 w-20 sm:w-24"
              />
            </div>
          </Reveal>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-14">
          {/* விழா விவரங்கள் */}
          <section id="vivarangal" className="h-full">
            <Reveal className="h-full">
              <div className="relative h-full overflow-hidden rounded-[1.75rem] card-ivory p-6 text-center sm:p-10 flex flex-col justify-center">
                <Corners />
                <h2 className="text-maroon text-2xl font-semibold sm:text-3xl">
                  விழா நாள் மற்றும் நேரம்
                </h2>
                <Divider className="mt-4" />

                <p className="text-leaf mt-7 text-lg sm:text-xl">ஆவணி மாதம் 27 ஆம் தேதி</p>
                <p className="text-maroon mt-2 text-[2rem] leading-tight font-bold sm:text-[2.6rem]">
                  13-09-2026
                </p>
                <p className="text-rose-gold mt-1 text-xl sm:text-2xl">ஞாயிற்றுக்கிழமை</p>

                <div className="gold-rule mx-auto mt-7 h-px w-3/4" />

                <p className="text-foreground mt-6 text-xl leading-relaxed font-medium sm:text-2xl">
                  காலை 10:30 மணி முதல்
                  <br />
                  11:30 மணி வரை
                </p>
              </div>
            </Reveal>
          </section>

          {/* மஞ்சள் நீராட்டு விழா */}
          <section id="vizha" className="h-full">
            <Reveal className="h-full">
              <div className="relative h-full overflow-hidden rounded-[1.75rem] card-ivory p-6 text-center sm:p-10 flex flex-col justify-center">
                <Corners />
                <h2 className="text-maroon text-2xl font-semibold sm:text-3xl">
                  மஞ்சள் நீராட்டு விழா
                </h2>
                <Divider className="mt-4" />
                <img
                  src={demoDoll}
                  alt="பாரம்பரிய உடையில் சிறுமி ஓவியம்"
                  loading="lazy"
                  className="mx-auto mt-6 w-28 sm:w-36"
                />
                <p className="text-foreground/90 mt-6 text-lg leading-loose sm:text-xl">
                  பந்தநல்லூரில் உள்ள எங்கள் இல்லத்தில், பெரியோர்களின் ஆசியோடு இந்த மங்களகரமான மஞ்சள் நீராட்டு விழா மிகவும் சீரும் சிறப்புமாக நடைபெற உள்ளது.
                </p>
                <p className="text-leaf mt-5 text-lg sm:text-xl">
                  இடம்: தஞ்சை மாவட்டம், பந்தநல்லூர்
                </p>
              </div>
            </Reveal>
          </section>

          {/* இடம் */}
          <section id="idam" className="h-full">
            <Reveal className="h-full">
              <div className="relative h-full overflow-hidden rounded-[1.75rem] card-ivory p-6 text-center sm:p-10 flex flex-col justify-center">
                <Corners />
                <h2 className="text-maroon text-2xl font-semibold sm:text-3xl">இடம்</h2>
                <Divider className="mt-4" />
                <p className="text-foreground/90 mt-6 text-lg sm:text-xl">
                  தஞ்சை மாவட்டம், பந்தநல்லூர்
                </p>

                <div className="border-border mt-6 overflow-hidden rounded-2xl border">
                  <iframe
                    title="பந்தநல்லூர் வரைபடம்"
                    src="https://www.google.com/maps?q=4GJ6%2BR4H+Pandanallur,+Tamil+Nadu&output=embed"
                    loading="lazy"
                    className="h-56 w-full sm:h-72"
                  />
                </div>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-maroon text-primary-foreground border-gold/70 mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border px-8 py-4 text-lg transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                  வழியைக் காண
                </a>
              </div>
            </Reveal>
          </section>

          {/* வாழ்த்து / நிறைவு */}
          <section id="niraivu" className="h-full">
            <Reveal className="h-full">
              <div className="relative h-full overflow-hidden rounded-[1.75rem] card-ivory p-6 text-center sm:p-10 flex flex-col justify-center">
                <Corners />
                <img
                  src={thoranam}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="mx-auto w-full max-w-sm opacity-90"
                />
                <p className="text-foreground/90 mt-4 text-lg leading-loose sm:text-xl">
                  தங்கள் சுற்றம் சூழ வருகை தந்து,
                  <br />
                  செல்வியை வாழ்த்திச் சிறப்பிக்குமாறு அன்புடன் அழைக்கிறோம்.
                </p>
                <Divider className="mt-6" />
                <p className="text-leaf mt-6 text-base sm:text-lg">அன்புடன் அழைக்கும்</p>
                <p className="text-maroon mt-2 text-2xl font-semibold sm:text-3xl">
                  P. சங்கர் – தமிழ்செல்வி
                </p>
                <img
                  src={flowers}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="mx-auto mt-6 w-24 sm:w-28"
                />
              </div>
            </Reveal>
          </section>
        </div>

        {/* Brand Advertisement */}
        <footer className="mt-20 pb-10 text-center">
          <a
            href="https://milesstudioinvitations.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-3 opacity-80 transition-all hover:opacity-100"
          >
            <p className="text-leaf text-xs font-semibold tracking-[0.2em] uppercase">
              Digital Invitation Designed By
            </p>
            <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-maroon/20 shadow-sm transition-transform group-hover:scale-105 group-hover:shadow-md group-hover:bg-white/80">
              <img
                src="/logo.png"
                alt="Miles Studio Logo"
                className="h-9 w-9 rounded-full object-cover shadow-sm"
              />
              <span className="text-maroon font-script text-2xl font-bold tracking-wide">
                Miles Studio
              </span>
            </div>
          </a>
        </footer>
      </main>
    </div>
  );
}
