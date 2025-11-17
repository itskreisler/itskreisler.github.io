import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="py-12 md:py-20 lg:py-32">
            <div className="container px-4 md:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                    <Badge variant="secondary" className="text-base px-4 py-2">
                        👋 ¡Hola! Soy Kreisler
                    </Badge>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight px-4">
                        Desarrollador de Software
                    </h1>

                    <div className="flex flex-wrap justify-center gap-2 text-lg md:text-xl lg:text-2xl text-muted-foreground px-4">
                        <span>Front-End</span>
                        <span>|</span>
                        <span>Mobile</span>
                        <span>|</span>
                        <span>Back-End</span>
                    </div>

                    <p className="max-w-2xl text-base md:text-lg lg:text-xl text-muted-foreground px-6 md:px-4">
                        Soy un apasionado desarrollador de Colombia, enfocado en crear soluciones
                        innovadoras y atractivas. Me encanta aprender nuevas tecnologías y aplicarlas
                        en proyectos desafiantes.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Button size="lg" asChild>
                            <a href="#projects">Ver Proyectos</a>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href="#contact">Contactar</a>
                        </Button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 pt-8">
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://github.com/itskreisler" target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://linkedin.com/in/kreisler" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://twitter.com/itskreisler" target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://fb.com/itskreisler" target="_blank" rel="noopener noreferrer">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://instagram.com/itskreisler" target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://www.youtube.com/c/itskreisler" target="_blank" rel="noopener noreferrer">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
