import { Phone } from "lucide-react"
import { Button } from "./button"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <a href="/">
                        <img
                            src="/images/Branding/logo (4).webp"
                            alt="Iberbrit-Legal Logo"
                            className="h-10 w-30"
                        />
                    </a>

                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <a href="/servicios" className="text-sm font-medium text-red-800 hover:underline">Servicios</a>
                    <a href="/nosotros" className="text-sm font-medium text-red-800 hover:underline">Nosotros</a>
                    <a href="/contacto" className="text-sm font-medium text-red-800 hover:underline">Contacto</a>
                    <a href="/paquetes" className="text-sm font-medium text-red-800 hover:underline">Paquetes</a>
                    <a href="/oficinas" className="text-sm font-medium text-red-800 hover:underline">Oficinas</a>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="hidden md:flex">
                        <Phone className="mr-2 h-4 w-4" /> Llámanos
                    </Button>
                </div>
            </div>
        </header>
    )
}
