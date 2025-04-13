import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 w-full">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-40 w-40 bg-blue-100 rounded-full opacity-50"></div>
          <div className="absolute -left-20 -bottom-20 h-40 w-40 bg-blue-100 rounded-full opacity-50"></div>

          <div className="relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-blue-500 font-medium text-sm">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span>Mulai Sekarang</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Siap Menjadi <span className="gradient-text">Programmer Handal</span> Tanpa Ngoding?
            </h2>

            <p className="text-lg text-blue-900/70 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan orang yang sudah berhasil menipu dunia dengan berpura-pura jadi programmer.
              Masa depan cerah menanti!
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button size="lg" className="rounded-full blue-gradient">
                Gabung Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <BookOpen className="mr-2 h-5 w-5" />
                Belajar Otodidak
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <Code className="mr-2 h-5 w-5" />
                Lihat Demo
              </Button>
            </div>

            <p className="text-sm text-blue-900/70 pt-4">
              *Hasil tidak dijamin. Kemungkinan ketahuan pura-pura jadi programmer tetap ada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
