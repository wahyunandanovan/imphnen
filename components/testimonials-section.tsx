import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CTO Startup Unicorn",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Berkat IMPHNEN, saya bisa jadi CTO tanpa perlu ngoding. Cukup pakai ChatGPT dan template dari sini, semua developer saya kira saya jenius!",
    stars: 5,
  },
  {
    name: "Siti Rahayu",
    role: "Senior Developer (Katanya)",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Dulu saya bingung kalau ditanya soal coding. Sekarang saya punya jawaban template untuk semua pertanyaan teknis. Terima kasih IMPHNEN!",
    stars: 5,
  },
  {
    name: "Dewi Lestari",
    role: "Tech Influencer Gadungan",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Followers Instagram saya naik drastis setelah saya pura-pura jadi programmer wanita. Padahal saya cuma pakai template dari IMPHNEN!",
    stars: 5,
  },
  {
    name: "Agus Pratama",
    role: "Penikmat Tutorial",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Berkat grup ini, saya menemukan channel Programmer Zaman Now sebagai obat tidur paling ampuh. Lebih manjur dari white noise!",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24" id="testimonial">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-blue-700 font-medium text-sm">
            <Quote className="h-4 w-4 text-blue-500" />
            <span>Testimoni Alumni</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Testimoni <span className="gradient-text">Alumni IMPHNEN</span> yang Sukses
          </h2>
          <p className="text-lg text-blue-900/70">
            Lihat bagaimana para alumni kami berhasil menjadi "programmer" sukses tanpa perlu belajar coding sama
            sekali!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-20 w-20 rounded-full bg-blue-100 overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex mb-1">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="font-bold text-lg text-blue-900">{testimonial.name}</h3>
                    <p className="text-blue-900/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 text-blue-900/70 relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-200" />
                  <p className="pl-4">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
