import { Button } from "@/components/ui/button";
import { Award, Download, Medal, Star } from "lucide-react";

export default function CertificateSection() {
  return (
    <section className="py-16 md:py-24 bg-blue-50" id="certificate">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 relative max-w-lg mx-auto">
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="h-3 w-3 fill-white" />
                  <span>Premium</span>
                </div>
                <div className="border-4 border-blue-100 rounded-lg p-6 relative">
                  <div className="absolute -top-2 -left-2 h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Medal className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Medal className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Medal className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Medal className="h-4 w-4 text-white" />
                  </div>

                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <Award className="h-16 w-16 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">SERTIFIKAT</h3>
                    <p className="text-blue-900/70">Diberikan Kepada:</p>
                    <p className="text-xl font-bold text-blue-900 border-b-2 border-dashed border-blue-200 pb-2">
                      Nama Anda Disini
                    </p>
                    <p className="text-blue-900/70">Telah berhasil menyelesaikan program:</p>
                    <p className="text-lg font-bold gradient-text">Full-Stack Developer Expert</p>
                    <p className="text-blue-900/70 text-sm">Tanpa menulis satu baris kode pun</p>

                    <div className="pt-4 flex justify-between items-center">
                      <div className="text-left">
                        <p className="text-sm text-blue-900/70">Tanggal:</p>
                        <p className="font-medium text-blue-900">{new Date().toLocaleDateString("id-ID")}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-900/70">Ditandatangani:</p>
                        <p className="font-medium italic text-blue-900">ChatGPT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-blue-500 font-medium text-sm">
              <Award className="h-4 w-4 text-blue-500" />
              <span>Sertifikasi Instan</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Download <span className="gradient-text">Sertifikat Programmer</span> Instan!
            </h2>

            <p className="text-lg text-blue-900/70">
              Untuk apa belajar bertahun-tahun? Dapatkan sertifikat programmer profesional dalam hitungan menit. Tinggal
              cetak, pajang di LinkedIn, dan siap melamar kerja!
            </p>

            <ul className="space-y-3 text-left">
              {[
                "Sertifikat Full-Stack Developer tanpa coding",
                "Terlihat seperti sertifikat asli dan profesional",
                "Dilengkapi tanda tangan digital ChatGPT",
                "Format siap cetak resolusi tinggi",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="h-3 w-3 text-blue-500" />
                  </div>
                  <span className="text-blue-900/70">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button size="lg" className="rounded-full blue-gradient">
                <Download className="mr-2 h-5 w-5" />
                Download Sertifikat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
