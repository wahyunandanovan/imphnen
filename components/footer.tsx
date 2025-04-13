import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/imphnen-logo.png" alt="IMPHNEN Logo" width={150} height={50} className="h-auto" />
            </div>
            <p className="text-blue-900/70">
              Ingin Menjadi Programmer Handal Namun Enggan Ngoding. Komunitas para programmer masa depan!
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5 text-blue-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5 text-blue-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5 text-blue-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5 text-blue-500" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Tips & Trik
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Sertifikat
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Testimoni
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900">Program</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Bootcamp Tanpa Ngoding
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Sertifikasi Instan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Kursus ChatGPT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-900/70 hover:text-blue-500">
                  Webinar Motivasi
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-900">Kontak</h3>
            <p className="text-blue-900/70">
              Jl. Ngoding Mulu No. 404
              <br />
              Kota Maya, Indonesia
            </p>
            <p className="text-blue-900/70">
              Email: info@imphnen.id
              <br />
              Telp: +62 8123 4567 890
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-blue-200 text-center text-blue-900/70">
          <p>© {new Date().getFullYear()} IMPHNEN. Hak Cipta Dilindungi. Kode Tidak Diperlukan.</p>
        </div>
      </div>
    </footer>
  )
}
