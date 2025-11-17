import { Card, CardContent } from "@/components/ui/card";

export function Stats() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
            <div className="container px-4 md:px-6 lg:px-8">
                <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12 px-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Estadísticas de GitHub</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    <Card>
                        <CardContent className="p-4">
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=itskreisler&show_icons=true&theme=transparent&locale=es&hide_border=true"
                                alt="Estadísticas de GitHub"
                                className="w-full dark:invert"
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4">
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=itskreisler&layout=compact&theme=transparent&locale=es&hide_border=true"
                                alt="Lenguajes más usados"
                                className="w-full dark:invert"
                            />
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-6 max-w-4xl mx-auto">
                    <Card>
                        <CardContent className="p-4">
                            <img
                                src="https://github-readme-activity-graph.vercel.app/graph?username=itskreisler&theme=github-compact&hide_border=true&area=true"
                                alt="Gráfico de actividad"
                                className="w-full dark:invert"
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
