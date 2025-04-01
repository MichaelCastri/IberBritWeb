

import { useState, useEffect } from "react"
import { Button } from "./button"

export default function Hero() {
  const imagePaths = [
    "/images/fotoscartagenas/Apoyo4.webp",
    "/images/Branding/2.webp",
    "/images/fotoscartagenas/Apoyo1.webp",
    "/images/fotoscartagenas/Apoyo2.webp",
    "/images/fotoscartagenas/Apoyo3.webp",
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex-1">
      {/* Hero con fondo dinámico y texto visible */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${imagePaths[currentIndex]})` }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-12 rounded-xl max-w-6xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="font-opensans text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Asesoría Legal, Fiscal, Contable y Laboral para Empresas y Particulares
              </h1>
              <p className="font-merriweather max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Desde 2002, ofrecemos servicios de asesoramiento integral a emprendedores, autónomos, sociedades y no
                residentes en España.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Solicitar información</Button>
                <Button variant="outline" size="lg">Nuestros servicios</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/Branding/3.jpg"
                alt="Iberbrit-Legal Servicios"
                className="rounded-lg object-cover w-full max-w-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
