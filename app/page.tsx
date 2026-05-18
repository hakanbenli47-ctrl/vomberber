"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Scissors,
  Sparkles,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";

const telefon = "05301772962";

const whatsappLink =
  "https://wa.me/905301772962?text=Merhaba%2C%20Vom%20Berber%20web%20sitesinden%20yaz%C4%B1yorum.%20Randevu%20almak%20istiyorum.";

const aramaLink = "tel:05301772962";

const konumLink =
  "https://www.google.com/maps/search/?api=1&query=Vom%20Berber%20Bursa%20%C4%B0neg%C3%B6l";

const hizmetler = [
  {
    baslik: "Saç Kesimi",
    aciklama:
      "Yüz hattınıza ve tarzınıza uygun, modern ve temiz bitişli erkek saç kesimi.",
    gorsel: "/hizmet-sac-kesim.jpg",
  },
  {
    baslik: "Sakal Tıraşı",
    aciklama:
      "Net hatlar, düzgün geçişler ve bakımlı görünüm için profesyonel sakal şekillendirme.",
    gorsel: "/hizmet-sakal.jpg",
  },
  {
    baslik: "Saç & Sakal Bakımı",
    aciklama:
      "Günlük görünümünüzü daha güçlü gösteren, detaylı ve özenli bakım uygulamaları.",
    gorsel: "/hizmet-bakim.jpg",
  },
  {
    baslik: "Damat Tıraşı",
    aciklama:
      "Özel günleriniz için özenli hazırlık, temiz görünüm ve fotoğraflarda güçlü duruş.",
    gorsel: "/hizmet-damat.jpg",
  },
];

const galeri = [
  "/galeri-1.jpg",
  "/galeri-2.jpg",
  "/galeri-3.jpg",
  "/galeri-4.jpg",
  "/galeri-5.jpg",
  "/galeri-6.jpg",
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function BarberPole({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-full border border-[#d9d1c4] bg-white shadow-sm ${className}`}
    >
      <div className="h-full w-full bg-[repeating-linear-gradient(135deg,#cf2935_0px,#cf2935_9px,#ffffff_9px,#ffffff_18px,#1f5f9f_18px,#1f5f9f_27px,#ffffff_27px,#ffffff_36px)]" />
    </div>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#d8cbb7] bg-white/75 px-4 py-2 text-sm font-black text-[#7a5a30] shadow-sm backdrop-blur-md">
      <BarberPole className="h-7 w-7" />
      {children}
    </div>
  );
}
function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e6] text-[#24211c]">
      {/* ÜST BAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#d8cbb7]/80 bg-[#f8f2e8]/92 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
              <BarberPole className="absolute inset-1" />
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-[#24211c] shadow-sm">
                <Scissors size={18} />
              </div>
            </div>

            <div>
              <p className="text-base font-black tracking-wide text-[#24211c]">
                Vom Berber
              </p>
              <p className="text-xs font-medium text-[#7a6d5a]">
                Bursa / İnegöl
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#6b604f] md:flex">
            <a href="#hakkimizda" className="transition hover:text-[#cf2935]">
              Hakkımızda
            </a>
            <a href="#hizmetler" className="transition hover:text-[#1f5f9f]">
              Hizmetler
            </a>
            <a href="#galeri" className="transition hover:text-[#cf2935]">
              Galeri
            </a>
            <a href="#iletisim" className="transition hover:text-[#1f5f9f]">
              İletişim
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={aramaLink}
              className="rounded-full border border-[#cdbb9f] bg-white/70 px-5 py-3 text-sm font-black text-[#24211c] transition hover:border-[#1f5f9f] hover:bg-white"
            >
              Ara
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              className="rounded-full bg-[#1f5f9f] px-5 py-3 text-sm font-black text-white shadow-md transition hover:bg-[#184c80]"
            >
              WhatsApp
            </a>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f5f9f] text-white md:hidden"
          >
            <MessageCircle size={21} />
          </a>
        </div>

        <div className="h-1 w-full bg-[repeating-linear-gradient(135deg,#cf2935_0px,#cf2935_18px,#ffffff_18px,#ffffff_36px,#1f5f9f_36px,#1f5f9f_54px,#ffffff_54px,#ffffff_72px)]" />
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f5f0e6] px-4 pb-16 pt-32 md:px-8 md:pt-28">
        <div className="absolute inset-0">
          <Image
            src="/berber-hero.jpg"
            alt="Vom Berber erkek kuaförü"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.25]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e6] via-[#f5f0e6]/92 to-[#f5f0e6]/72" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f0e6] via-[#f5f0e6]/25 to-[#f5f0e6]/85" />
        </div>

        <div className="absolute left-[-130px] top-24 h-80 w-80 rounded-full bg-[#cf2935]/10 blur-3xl" />
        <div className="absolute bottom-8 right-[-140px] h-96 w-96 rounded-full bg-[#1f5f9f]/14 blur-3xl" />

        <div className="pointer-events-none absolute right-8 top-32 hidden md:block">
          <BarberPole className="h-40 w-10 rotate-12 opacity-80" />
        </div>

        <div className="pointer-events-none absolute bottom-24 left-8 hidden lg:block">
          <BarberPole className="h-28 w-8 -rotate-12 opacity-60" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d4c2a6] bg-white/75 px-4 py-2 text-sm font-black text-[#7a5a30] shadow-sm backdrop-blur-md">
              <BarberPole className="h-7 w-7" />
              Bursa İnegöl’de profesyonel erkek kuaförü
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-[#24211c] sm:text-5xl md:text-7xl">
              Tarzını netleştir,
              <span className="block text-[#1f5f9f]">
                görünümünü güçlendir.
              </span>
            </h1>

            <div className="mt-5 h-2 w-44 rounded-full bg-[repeating-linear-gradient(135deg,#cf2935_0px,#cf2935_18px,#ffffff_18px,#ffffff_34px,#1f5f9f_34px,#1f5f9f_52px,#ffffff_52px,#ffffff_68px)] shadow-sm" />

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#5f574b] md:text-xl md:leading-9">
              Vom Berber, modern erkek saç kesimi, sakal şekillendirme ve bakım
              hizmetlerinde detaylara önem veren profesyonel bir kuaför deneyimi
              sunar. Temiz işçilik, doğru yönlendirme ve tarzınıza uygun sonuç
              için randevunuzu kolayca oluşturabilirsiniz.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#1f5f9f] px-7 py-4 text-base font-black text-white shadow-xl shadow-[#1f5f9f]/20 transition hover:bg-[#184c80]"
              >
                <MessageCircle size={21} />
                WhatsApp’tan Randevu Al
                <ChevronRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href={aramaLink}
                className="flex items-center justify-center gap-3 rounded-full border border-[#d4c2a6] bg-white/80 px-7 py-4 text-base font-black text-[#24211c] shadow-sm backdrop-blur-md transition hover:border-[#cf2935] hover:bg-white"
              >
                <Phone size={20} />
                Hemen Ara
              </a>
            </div>

            <div className="mt-9 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[#d8cbb7] bg-white/70 p-5 shadow-sm backdrop-blur-md">
                <div className="mb-3 h-1.5 w-16 rounded-full bg-[#cf2935]" />
                <p className="text-2xl font-black text-[#24211c]">Temiz</p>
                <p className="mt-1 text-sm font-medium leading-6 text-[#716553]">
                  Net hatlar ve düzenli kesim
                </p>
              </div>

              <div className="rounded-3xl border border-[#d8cbb7] bg-white/70 p-5 shadow-sm backdrop-blur-md">
                <div className="mb-3 h-1.5 w-16 rounded-full bg-[#1f5f9f]" />
                <p className="text-2xl font-black text-[#24211c]">Modern</p>
                <p className="mt-1 text-sm font-medium leading-6 text-[#716553]">
                  Güncel erkek kuaför tarzı
                </p>
              </div>

              <div className="rounded-3xl border border-[#d8cbb7] bg-white/70 p-5 shadow-sm backdrop-blur-md">
                <div className="mb-3 h-1.5 w-16 rounded-full bg-[repeating-linear-gradient(135deg,#cf2935_0px,#cf2935_10px,#ffffff_10px,#ffffff_20px,#1f5f9f_20px,#1f5f9f_30px)]" />
                <p className="text-2xl font-black text-[#24211c]">Özenli</p>
                <p className="mt-1 text-sm font-medium leading-6 text-[#716553]">
                  Detaylara dikkat eden hizmet
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="hidden md:block"
          >
            <div className="relative ml-auto h-[560px] max-w-[470px] overflow-hidden rounded-[42px] border border-[#d8cbb7] bg-[#fffaf1] p-3 shadow-2xl shadow-[#59442a]/15">
              <div className="absolute left-8 top-8 z-20">
                <BarberPole className="h-24 w-8" />
              </div>

              <div className="relative h-full overflow-hidden rounded-[34px]">
                <Image
                  src="/berber-giris.jpg"
                  alt="Vom Berber salon görünümü"
                  fill
                  sizes="470px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#f5f0e6]/95 via-transparent to-transparent" />

                <div className="absolute inset-x-6 bottom-6 rounded-[30px] border border-[#d8cbb7] bg-[#fffaf1]/92 p-6 text-[#24211c] shadow-xl backdrop-blur-xl">
                  <p className="text-sm font-black text-[#cf2935]">
                    Randevu & bilgi
                  </p>
                  <p className="mt-1 text-2xl font-black">{telefon}</p>
                  <p className="mt-3 text-sm font-medium leading-6 text-[#6b604f]">
                    WhatsApp üzerinden hızlıca iletişime geçip uygun saat için
                    bilgi alabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section id="hakkimizda" className="px-4 py-24 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <SectionBadge>Vom Berber</SectionBadge>

            <h2 className="text-3xl font-black leading-tight text-[#24211c] md:text-5xl">
              Sıradan bir tıraş değil, seni daha iyi gösteren detaylı bir bakım.
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-[#d8cbb7] bg-[#fffaf1] p-7 shadow-xl shadow-[#59442a]/5 md:p-10">
            <div className="absolute right-0 top-0 h-full w-3 bg-[repeating-linear-gradient(135deg,#cf2935_0px,#cf2935_16px,#ffffff_16px,#ffffff_32px,#1f5f9f_32px,#1f5f9f_48px,#ffffff_48px,#ffffff_64px)]" />

            <p className="pr-3 text-lg font-medium leading-9 text-[#5f574b]">
              Erkek kuaföründe iyi sonuç sadece kesimden ibaret değildir. Saç
              yapınız, yüz şekliniz, sakal yoğunluğunuz ve günlük kullanım
              alışkanlığınız birlikte değerlendirilir. Vom Berber’de amaç; size
              yakışan, kolay kullanılan ve temiz görünen bir tarz oluşturmaktır.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[#e1d5c2] bg-[#f5efe4] p-5">
                <Star className="mb-4 text-[#cf2935]" />
                <p className="font-black text-[#24211c]">Tarza Uygun Kesim</p>
              </div>

              <div className="rounded-3xl border border-[#e1d5c2] bg-[#f5efe4] p-5">
                <Scissors className="mb-4 text-[#1f5f9f]" />
                <p className="font-black text-[#24211c]">
                  Profesyonel İşçilik
                </p>
              </div>

              <div className="rounded-3xl border border-[#e1d5c2] bg-[#f5efe4] p-5">
                <Clock className="mb-4 text-[#cf2935]" />
                <p className="font-black text-[#24211c]">Kolay Randevu</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HİZMETLER */}
      <section id="hizmetler" className="bg-[#eadfce] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mb-12 max-w-3xl"
          >
            <SectionBadge>Hizmetler</SectionBadge>

            <h2 className="text-3xl font-black leading-tight text-[#24211c] md:text-5xl">
              Saçtan sakala, tüm görünümünüzü tamamlayan profesyonel hizmetler.
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[#6b604f]">
              Her hizmet alanında fotoğraf kullanabilecek şekilde tasarlandı.
              Görselleri değiştirdiğinizde bölüm daha güçlü ve güven veren bir
              vitrine dönüşür.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {hizmetler.map((hizmet, index) => (
              <motion.div
                key={hizmet.baslik}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[34px] border border-[#d4c2a6] bg-[#fffaf1] shadow-xl shadow-[#59442a]/7"
              >
                <div className="h-2 w-full bg-[repeating-linear-gradient(135deg,#cf2935_0px,#cf2935_18px,#ffffff_18px,#ffffff_36px,#1f5f9f_36px,#1f5f9f_54px,#ffffff_54px,#ffffff_72px)]" />

                <div className="relative h-64 overflow-hidden bg-[#d8cbb7]">
                  <Image
                    src={hizmet.gorsel}
                    alt={hizmet.baslik}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#f5f0e6]/95 via-[#f5f0e6]/20 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <BarberPole className="h-12 w-12" />
                  </div>

                  <h3 className="absolute bottom-5 left-5 text-3xl font-black text-[#24211c] drop-shadow-sm">
                    {hizmet.baslik}
                  </h3>
                </div>

                <div className="p-7">
                  <p className="text-lg font-medium leading-8 text-[#5f574b]">
                    {hizmet.aciklama}
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1f5f9f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#184c80]"
                  >
                    Bu hizmet için randevu al
                    <ChevronRight size={17} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERİ */}
      <section id="galeri" className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mb-12 text-center"
          >
            <SectionBadge>Galeri</SectionBadge>

            <h2 className="text-3xl font-black leading-tight text-[#24211c] md:text-5xl">
              Salon atmosferi ve işçilik detayları.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-[#6b604f]">
              Buraya işletmenin gerçek fotoğraflarını eklediğinizde güven
              etkisi ciddi şekilde artar. Özellikle koltuk, ayna, kesim anı ve
              sonuç görselleri kullanılmalı.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galeri.map((gorsel, index) => (
              <motion.div
                key={gorsel}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="relative h-72 overflow-hidden rounded-[32px] border border-[#d8cbb7] bg-[#e4d8c6] shadow-xl shadow-[#59442a]/7"
              >
                <Image
                  src={gorsel}
                  alt={`Vom Berber galeri ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute left-0 top-0 h-full w-2 bg-[repeating-linear-gradient(135deg,#cf2935_0px,#cf2935_16px,#ffffff_16px,#ffffff_32px,#1f5f9f_32px,#1f5f9f_48px,#ffffff_48px,#ffffff_64px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DÖNÜŞÜM BÖLÜMÜ */}
      <section className="px-4 pb-24 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[42px] border border-[#d4c2a6] bg-[#fffaf1] p-8 text-[#24211c] shadow-2xl shadow-[#59442a]/10 md:p-14"
        >
          <div className="absolute left-0 top-0 h-3 w-full bg-[repeating-linear-gradient(135deg,#cf2935_0px,#cf2935_24px,#ffffff_24px,#ffffff_48px,#1f5f9f_48px,#1f5f9f_72px,#ffffff_72px,#ffffff_96px)]" />

         <div className="flex flex-col gap-4">
  <a
    href={whatsappLink}
    target="_blank"
    className="flex items-center justify-center gap-3 rounded-full bg-[#1f5f9f] px-7 py-5 text-base font-black text-white transition hover:bg-[#184c80]"
  >
    <MessageCircle size={22} />
    WhatsApp’tan Yaz
  </a>

  <a
    href={aramaLink}
    className="flex items-center justify-center gap-3 rounded-full border border-[#cdbb9f] bg-[#f5efe4] px-7 py-5 text-base font-black text-[#24211c] transition hover:border-[#cf2935] hover:bg-white"
  >
    <Phone size={22} />
    {telefon}
  </a>

 <a
  href="https://www.instagram.com/emirtalha.hair16/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 rounded-full border border-[#d4c2a6] bg-white px-7 py-5 text-base font-black text-[#24211c] transition hover:border-[#cf2935] hover:bg-[#fff5f5]"
>
  <InstagramIcon size={22} />
  Instagram’da Gör
</a>
</div>
        </motion.div>
      </section>

      {/* İLETİŞİM */}
{/* İLETİŞİM */}
<section id="iletisim" className="bg-[#eadfce] px-4 py-20 md:px-8">
  <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
    <a
      href={aramaLink}
      className="group rounded-[32px] border border-[#d4c2a6] bg-[#fffaf1] p-7 shadow-xl shadow-[#59442a]/5 transition hover:-translate-y-1 hover:border-[#cf2935] hover:shadow-2xl hover:shadow-[#59442a]/10"
    >
      <Phone className="mb-5 text-[#cf2935] transition group-hover:scale-110" />
      <h3 className="text-xl font-black text-[#24211c]">Telefon</h3>
      <p className="mt-3 font-medium text-[#6b604f]">{telefon}</p>

      <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#cf2935]">
        Hemen Ara
        <ChevronRight size={16} />
      </p>
    </a>

    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-[32px] border border-[#d4c2a6] bg-[#fffaf1] p-7 shadow-xl shadow-[#59442a]/5 transition hover:-translate-y-1 hover:border-[#1f5f9f] hover:shadow-2xl hover:shadow-[#59442a]/10"
    >
      <MessageCircle className="mb-5 text-[#1f5f9f] transition group-hover:scale-110" />
      <h3 className="text-xl font-black text-[#24211c]">WhatsApp</h3>
      <p className="mt-3 font-medium text-[#6b604f]">
        Randevu ve bilgi için mesaj atabilirsiniz.
      </p>

      <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#1f5f9f]">
        WhatsApp’tan Yaz
        <ChevronRight size={16} />
      </p>
    </a>

    <a
      href={konumLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-[32px] border border-[#d4c2a6] bg-[#fffaf1] p-7 shadow-xl shadow-[#59442a]/5 transition hover:-translate-y-1 hover:border-[#cf2935] hover:shadow-2xl hover:shadow-[#59442a]/10"
    >
      <MapPin className="mb-5 text-[#cf2935] transition group-hover:scale-110" />
      <h3 className="text-xl font-black text-[#24211c]">Konum</h3>
      <p className="mt-3 font-medium text-[#6b604f]">Bursa / İnegöl</p>

      <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#1f5f9f]">
        Haritada Gör
        <ChevronRight size={16} />
      </p>
    </a>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-[#d4c2a6] bg-[#f5f0e6] px-4 py-10 text-center text-[#6b604f] md:px-8">
        <div className="mx-auto mb-5 h-2 max-w-md rounded-full bg-[repeating-linear-gradient(135deg,#cf2935_0px,#cf2935_22px,#ffffff_22px,#ffffff_44px,#1f5f9f_44px,#1f5f9f_66px,#ffffff_66px,#ffffff_88px)]" />
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Vom Berber. Bursa İnegöl erkek kuaförü.
        </p>
      </footer>

      {/* MOBİL SABİT CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a
          href={aramaLink}
          className="flex items-center justify-center gap-2 rounded-full border border-[#cdbb9f] bg-[#fffaf1] px-4 py-4 text-sm font-black text-[#24211c] shadow-2xl shadow-black/10"
        >
          <Phone size={18} />
          Ara
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-full bg-[#1f5f9f] px-4 py-4 text-sm font-black text-white shadow-2xl shadow-black/10"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {/* MASAÜSTÜ SABİT WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        className="fixed bottom-7 right-7 z-50 hidden items-center gap-3 overflow-hidden rounded-full bg-[#1f5f9f] px-6 py-4 font-black text-white shadow-2xl shadow-black/20 transition hover:scale-105 md:flex"
      >
        <span className="absolute left-0 top-0 h-full w-2 bg-[repeating-linear-gradient(135deg,#cf2935_0px,#cf2935_10px,#ffffff_10px,#ffffff_20px,#1f5f9f_20px,#1f5f9f_30px)]" />
        <MessageCircle size={22} />
        WhatsApp
      </a>
    </main>
  );
}