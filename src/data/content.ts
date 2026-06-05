import {
  Atom,
  Binary,
  Calculator,
  Dna,
  Globe2,
  GraduationCap,
  Landmark,
  Mountain,
  Rocket,
  Sparkles,
  TestTubes,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ── Brand ─────────────────────────────────────────────── */
export const BRAND = {
  name: "Olimversal",
  full: "Olimversal Academy",
  tagline: "Sekolah para juara olimpiade.",
  description:
    "Pelatihan olimpiade sains kelas dunia bareng para medalis OSN & olimpiade internasional. Naik level jadi generasi juara.",
  email: "halo@olimversal.academy",
  whatsapp: "+62 812-0000-0000",
  city: "Jakarta · Online se-Indonesia",
};

/* ── Imagery (Unsplash & Pravatar — lisensi gratis & legal) ── */
export const IMAGES = {
  // cinematic golden-hour mountains
  hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop",
  // misty forest for the video / story band
  story:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2400&auto=format&fit=crop",
  // warm desert dunes for CTA
  cta: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2400&auto=format&fit=crop",
};

/* ── Navigation ────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: "Bidang", href: "#bidang" },
  { label: "Tutor", href: "#tutor" },
  { label: "Prestasi", href: "#prestasi" },
  { label: "Paket", href: "#paket" },
  { label: "Testimoni", href: "#testimoni" },
];

/* ── Hero feature columns ──────────────────────────────── */
export const HERO_FEATURES: { icon: LucideIcon; title: string; desc: string }[] =
  [
    {
      icon: GraduationCap,
      title: "Diajar Medalis",
      desc: "Mentor peraih medali OSN & olimpiade dunia",
    },
    {
      icon: Sparkles,
      title: "Metode Terbukti",
      desc: "Kurikulum yang mengantar siswa ke podium",
    },
    {
      icon: Rocket,
      title: "Kelas Interaktif",
      desc: "Live class seru, personal, dan terarah",
    },
    {
      icon: Users,
      title: "Komunitas Juara",
      desc: "Circle pejuang olimpiade se-Indonesia",
    },
  ];

/* ── Stats ─────────────────────────────────────────────── */
export const STATS = [
  { value: 320, suffix: "+", label: "Medali olimpiade" },
  { value: 27, suffix: "", label: "Medali internasional" },
  { value: 12, suffix: "K", label: "Siswa terlatih" },
  { value: 98, suffix: "%", label: "Lolos seleksi lanjut" },
];

/* ── Subjects / bidang olimpiade ───────────────────────── */
export type Subject = {
  name: string;
  icon: LucideIcon;
  blurb: string;
  accent: string;
  target: string; // olimpiade internasional
  group: string; // kategori untuk filter
};

export const SUBJECT_GROUPS = ["Semua", "Eksakta", "Alam & Langit", "Sosial"];

export const SUBJECTS: Subject[] = [
  {
    name: "Matematika",
    icon: Calculator,
    blurb: "Aljabar, kombinatorika, teori bilangan & geometri ala IMO.",
    accent: "from-amber-400 to-sage-400",
    target: "IMO",
    group: "Eksakta",
  },
  {
    name: "Fisika",
    icon: Atom,
    blurb: "Mekanika, elektromagnetik & fisika modern menuju IPhO.",
    accent: "from-sage-400 to-amber-400",
    target: "IPhO",
    group: "Eksakta",
  },
  {
    name: "Informatika",
    icon: Binary,
    blurb: "Algoritma, struktur data & problem solving gaya IOI.",
    accent: "from-clay-400 to-amber-400",
    target: "IOI",
    group: "Eksakta",
  },
  {
    name: "Kimia",
    icon: TestTubes,
    blurb: "Kimia fisik, organik & anorganik untuk panggung IChO.",
    accent: "from-amber-400 to-clay-400",
    target: "IChO",
    group: "Eksakta",
  },
  {
    name: "Biologi",
    icon: Dna,
    blurb: "Biologi sel, genetika & ekologi level IBO.",
    accent: "from-sage-400 to-cream-300",
    target: "IBO",
    group: "Alam & Langit",
  },
  {
    name: "Astronomi",
    icon: Rocket,
    blurb: "Astrofisika & mekanika langit menuju IOAA.",
    accent: "from-amber-300 to-clay-500",
    target: "IOAA",
    group: "Alam & Langit",
  },
  {
    name: "Kebumian",
    icon: Mountain,
    blurb: "Geologi, meteorologi & oseanografi untuk IESO.",
    accent: "from-sage-500 to-amber-400",
    target: "IESO",
    group: "Alam & Langit",
  },
  {
    name: "Geografi",
    icon: Globe2,
    blurb: "Geospasial, lingkungan & analisis lapangan iGeo.",
    accent: "from-cream-300 to-sage-400",
    target: "iGeo",
    group: "Sosial",
  },
  {
    name: "Ekonomi",
    icon: Landmark,
    blurb: "Mikro, makro & ekonometrika untuk IEO.",
    accent: "from-clay-400 to-sage-400",
    target: "IEO",
    group: "Sosial",
  },
];

/* ── Tutors / medalis ──────────────────────────────────── */
export type Tutor = {
  name: string;
  subject: string;
  school: string;
  medal: string;
  photo: string;
};

const face = (n: number) => `https://i.pravatar.cc/640?img=${n}`;

export const TUTORS: Tutor[] = [
  {
    name: "Muhammad Ali Syaifuddin",
    subject: "Astronomi",
    school: "Institut Teknologi Bandung",
    medal: "Medalis IOAA & Emas OSN",
    photo: face(12),
  },
  {
    name: "Salsabila Roihanah",
    subject: "Biologi",
    school: "Institut Teknologi Bandung",
    medal: "Multi-medalis Olimpiade",
    photo: face(5),
  },
  {
    name: "Ricky Suhartono Iskandar",
    subject: "Ekonomi",
    school: "Universitas Indonesia",
    medal: "Emas OSN 2018",
    photo: face(33),
  },
  {
    name: "Daniswara Pramudya",
    subject: "Fisika",
    school: "Institut Teknologi Bandung",
    medal: "Perak IPhO",
    photo: face(15),
  },
  {
    name: "Nadia Kusuma Wardani",
    subject: "Matematika",
    school: "Universitas Gadjah Mada",
    medal: "Medalis IMO",
    photo: face(44),
  },
  {
    name: "Farrel Aditya Nugraha",
    subject: "Informatika",
    school: "Universitas Indonesia",
    medal: "Medalis IOI",
    photo: face(68),
  },
  {
    name: "Aisyah Putri Lestari",
    subject: "Kimia",
    school: "Institut Teknologi Bandung",
    medal: "Emas OSN Kimia",
    photo: face(9),
  },
  {
    name: "Bagas Wicaksono",
    subject: "Kebumian",
    school: "Institut Teknologi Bandung",
    medal: "Medalis IESO",
    photo: face(51),
  },
];

/* ── Achievements / medali internasional ───────────────── */
export const ACHIEVEMENTS = [
  { year: "2024", title: "Emas IOAA", detail: "Olimpiade Astronomi & Astrofisika Internasional" },
  { year: "2023", title: "Perak IMO", detail: "International Mathematical Olympiad" },
  { year: "2023", title: "Perunggu IOI", detail: "International Olympiad in Informatics" },
  { year: "2022", title: "Emas IChO", detail: "International Chemistry Olympiad" },
  { year: "2022", title: "Perak IPhO", detail: "International Physics Olympiad" },
  { year: "2021", title: "Emas IEO", detail: "International Economics Olympiad" },
];

/* ── Packages / paket ──────────────────────────────────── */
export type Pkg = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  perks: string[];
  highlight?: boolean;
};

export const PACKAGES: Pkg[] = [
  {
    name: "Explorer",
    price: "Rp299K",
    period: "/bulan",
    blurb: "Buat yang baru mulai jatuh cinta sama olimpiade.",
    perks: [
      "8 sesi live class / bulan",
      "Modul & bank soal digital",
      "Rekaman kelas akses penuh",
      "Grup diskusi komunitas",
    ],
  },
  {
    name: "Champion",
    price: "Rp749K",
    period: "/bulan",
    blurb: "Paket favorit calon medalis. Bimbingan intens dari medalis.",
    perks: [
      "16 sesi live class / bulan",
      "Mentoring 1-on-1 mingguan",
      "Simulasi OSN + pembahasan",
      "Tracking progress personal",
      "Prioritas tanya-jawab tutor",
    ],
    highlight: true,
  },
  {
    name: "Elite Squad",
    price: "Custom",
    period: "",
    blurb: "Pembinaan eksklusif menuju panggung internasional.",
    perks: [
      "Kurikulum personal per siswa",
      "Coach medalis internasional",
      "Camp intensif pra-seleksi",
      "Analisis mendalam tiap topik",
      "Garansi pendampingan penuh",
    ],
  },
];

/* ── Testimonials ──────────────────────────────────────── */
export const TESTIMONIALS = [
  {
    quote:
      "Tutornya medalis beneran, jadi tau banget trik soal yang nggak ada di buku. Aku lolos OSN provinsi pertama kali ikut!",
    name: "Kheira A.",
    role: "Medali OSN Matematika",
    photo: "https://i.pravatar.cc/400?img=47",
  },
  {
    quote:
      "Vibe belajarnya seru, nggak kaku. Kelas Informatika-nya bikin aku jago competitive programming dari nol.",
    name: "Rafi D.",
    role: "Finalis OSN Informatika",
    photo: "https://i.pravatar.cc/400?img=53",
  },
  {
    quote:
      "Mentoring 1-on-1-nya ngubah cara aku mikir soal fisika. Sekarang aku confident banget hadapi seleksi.",
    name: "Salwa N.",
    role: "Siswa Champion Squad",
    photo: "https://i.pravatar.cc/400?img=31",
  },
  {
    quote:
      "Dari yang takut sama astronomi sampai akhirnya dapet emas tingkat nasional. Makasih Olimversal!",
    name: "Bintang P.",
    role: "Emas OSN Astronomi",
    photo: "https://i.pravatar.cc/400?img=60",
  },
  {
    quote:
      "Soal-soal latihannya nampol. Pas hari-H seleksi malah berasa kayak udah pernah ngerjain semua.",
    name: "Naufal R.",
    role: "Finalis OSN Kimia",
    photo: "https://i.pravatar.cc/400?img=14",
  },
  {
    quote:
      "Mentornya sabar banget jelasin sampai paham betul. Sekarang aku malah jatuh cinta sama matematika.",
    name: "Ghaisan M.",
    role: "Perak OSN Matematika",
    photo: "https://i.pravatar.cc/400?img=11",
  },
  {
    quote:
      "Komunitasnya supportif. Belajar bareng temen seperjuangan bikin semangat nggak pernah padam.",
    name: "Tiara L.",
    role: "Siswa Explorer Squad",
    photo: "https://i.pravatar.cc/400?img=25",
  },
  {
    quote:
      "Dari nol soal biologi, sampai akhirnya lolos ke tingkat nasional. Worth it banget ikut Olimversal.",
    name: "Dimas A.",
    role: "Medali OSN Biologi",
    photo: "https://i.pravatar.cc/400?img=56",
  },
];

/* ── Footer ────────────────────────────────────────────── */
export const FOOTER_GROUPS = [
  {
    title: "Program",
    links: ["Bidang Olimpiade", "Paket Belajar", "Camp Intensif", "Kelas Privat"],
  },
  {
    title: "Olimversal",
    links: ["Tentang Kami", "Tutor Medalis", "Prestasi", "Karier"],
  },
  {
    title: "Bantuan",
    links: ["Cara Daftar", "FAQ", "Hubungi Kami", "Kebijakan Privasi"],
  },
];
