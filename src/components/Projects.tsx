import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Telegram Bot",
        description: "Bot avanzado para Telegram con múltiples funcionalidades y comandos personalizados.",
        tags: ["Node.js", "Telegram API", "JavaScript"],
        github: "https://github.com/itskreisler/telegram-bot",
        demo: null,
    },
    {
        title: "JS Google Translate Free",
        description: "Librería JavaScript para traducción gratuita usando Google Translate API.",
        tags: ["JavaScript", "API", "NPM"],
        github: "https://github.com/itskreisler/js-google-translate-free",
        demo: null,
    },
    {
        title: "Portfolio Web",
        description: "Portafolio personal desarrollado con Astro, React y Tailwind CSS.",
        tags: ["Astro", "React", "Tailwind"],
        github: "https://github.com/itskreisler/itskreisler.github.io",
        demo: "https://itskreisler.github.io",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6 lg:px-8">
                <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12 px-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Proyectos Destacados</h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Algunos de los proyectos en los que he trabajado
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {projects.map((project) => (
                        <Card key={project.title} className="flex flex-col hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="gap-2">
                                <Button variant="outline" size="sm" asChild>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        Código
                                    </a>
                                </Button>
                                {project.demo && (
                                    <Button size="sm" asChild>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Demo
                                        </a>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
