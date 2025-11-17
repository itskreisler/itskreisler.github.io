import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-background">
            <div className="container px-4 md:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Kreisler</h3>
                        <p className="text-sm text-muted-foreground">
                            Desarrollador de Software apasionado por crear soluciones innovadoras.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                        <nav className="flex flex-col gap-2 text-sm">
                            <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">
                                Inicio
                            </a>
                            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                                Habilidades
                            </a>
                            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                                Proyectos
                            </a>
                            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                                Contacto
                            </a>
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sígueme</h3>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://github.com/itskreisler" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://linkedin.com/in/kreisler" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://twitter.com/itskreisler" target="_blank" rel="noopener noreferrer">
                                    <Twitter className="h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>
                        © {currentYear} Kreisler. Todos los derechos reservados.
                    </p>
                    <p className="flex items-center gap-1">
                        Hecho con <Heart className="h-4 w-4 fill-red-500 text-red-500" /> en Colombia
                    </p>
                </div>
            </div>
        </footer>
    );
}
