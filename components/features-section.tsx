import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Coffee, FileCode, Gift, Lightbulb, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="h-10 w-10 text-blue-500" />,
    title: "Tips Menjadi Programmer Tanpa Ngoding",
    description:
      "Pelajari rahasia menjadi programmer handal tanpa perlu menulis satu baris kode pun. Cukup pakai ChatGPT dan Stack Overflow!",
  },
  {
    icon: <FileCode className="h-10 w-10 text-blue-500" />,
    title: "Tutorial Ngoding dengan ChatGPT",
    description:
      "Biarkan AI yang menulis kode untuk Anda. Kami ajarkan cara meminta ChatGPT menulis kode tanpa perlu buka VS Code sama sekali.",
  },
  {
    icon: <Brain className="h-10 w-10 text-blue-500" />,
    title: "Teknik Presentasi Proyek Palsu",
    description:
      "Pelajari cara mempresentasikan proyek yang sebenarnya dibuat oleh orang lain seolah-olah Anda yang membuatnya.",
  },
  {
    icon: <Coffee className="h-10 w-10 text-blue-500" />,
    title: "Jargon Programmer untuk Pemula",
    description:
      "Hafalkan istilah-istilah teknis untuk terdengar seperti programmer sungguhan dalam interview atau meeting.",
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-500" />,
    title: "Cara Menjawab Pertanyaan Teknis",
    description:
      "Teknik menjawab pertanyaan teknis dengan jawaban ambigu yang terdengar pintar tanpa harus mengerti apa-apa.",
  },
  {
    icon: <Gift className="h-10 w-10 text-blue-500" />,
    title: "Template Portfolio Keren",
    description:
      "Dapatkan template portfolio developer keren yang bisa Anda klaim sebagai karya sendiri. Siap pakai tanpa perlu coding!",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24" id="tips">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-blue-500 font-medium text-sm">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span>Fitur Unggulan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Cara Instan Menjadi <span className="gradient-text">Programmer Handal</span>
          </h2>
          <p className="text-lg text-blue-900/70">
            Lupakan bootcamp yang melelahkan dan jam-jam belajar coding yang membosankan. Kami punya jalan pintas!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-blue-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-900/70 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
