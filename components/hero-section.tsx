import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-blue-500 font-medium text-sm">
              <Star className="h-4 w-4 fill-blue-500 text-blue-500" />
              <span>Komunitas Programmer Malas #1 di Indonesia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Jadi <span className="gradient-text">Programmer Handal</span> Tanpa Perlu Ngoding!
            </h1>

            <p className="text-lg md:text-xl text-blue-900/70">
              Belajar menjadi programmer tanpa ribet menulis kode. Cukup pakai ChatGPT, copy-paste, dan klaim diri
              sebagai developer profesional!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full blue-gradient">
                Gabung Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Lihat Demo
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-blue-900/70 text-sm">
                <span className="font-bold text-blue-900">1,234+</span> programmer abal-abal bergabung minggu ini
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 relative">
              <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Tanpa Coding!
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="text-sm text-blue-900/70 ml-2">terminal.exe</div>
              </div>
              <div className="bg-blue-950 rounded-lg p-4 font-mono text-sm text-blue-100 space-y-2">
                <p>$ menjadi-programmer --tanpa-ngoding</p>
                <p className="text-green-400">✓ Mengunduh template portfolio...</p>
                <p className="text-green-400">✓ Menyalin proyek dari GitHub...</p>
                <p className="text-green-400">✓ Mengganti nama author...</p>
                <p className="text-green-400">✓ Membuat CV developer palsu...</p>
                <p className="text-blue-400">Selamat! Anda sekarang seorang "programmer"!</p>
                <p className="flex items-center gap-2">
                  <span className="animate-pulse">▋</span>
                </p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["HTML", "CSS", "JS", "React", "PHP", "Python"].map((lang) => (
                  <div key={lang} className="bg-blue-50 rounded-lg p-2 text-center text-sm font-medium text-blue-500">
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
