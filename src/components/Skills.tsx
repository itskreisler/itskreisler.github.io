import { ReactLight } from "@/components/ui/svgs/reactLight";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { Javascript } from "@/components/ui/svgs/javascript";

import { Git } from "@/components/ui/svgs/git";
import { Bootstrap } from "@/components/ui/svgs/bootstrap";
import { MysqlIconLight } from "@/components/ui/svgs/mysqlIconLight";
import { MysqlIconDark } from "@/components/ui/svgs/mysqlIconDark";
import { Php } from "@/components/ui/svgs/php";
import { PhpDark } from "@/components/ui/svgs/phpDark";
import { Sass } from "@/components/ui/svgs/sass";
import { Css } from "@/components/ui/svgs/css";
import { Html5 } from "@/components/ui/svgs/html5";
import { Java } from "@/components/ui/svgs/java";
import { Photoshop } from "@/components/ui/svgs/photoshop";
import { AndroidIcon } from "@/components/ui/svgs/androidIcon";
import { AstroIconLight } from "@/components/ui/svgs/astroIconLight";
import { AstroIconDark } from "@/components/ui/svgs/astroIconDark";
import { NextjsLogoDark } from "@/components/ui/svgs/nextjsLogoDark";
import { NextjsLogoLight } from "@/components/ui/svgs/nextjsLogoLight";
import type { SVGProps } from "react";
import type { FC } from "react";

// Componente wrapper para manejar tema claro/oscuro
type IconComponent = FC<SVGProps<SVGSVGElement>>;

const ThemedIcon = ({ LightIcon, DarkIcon, className = "w-5 h-5" }: { LightIcon: IconComponent; DarkIcon?: IconComponent; className?: string }) => {
    if (!DarkIcon) {
        return <LightIcon className={className} />;
    }
    return (
        <>
            <LightIcon className={`${className} dark:hidden`} />
            <DarkIcon className={`${className} hidden dark:block`} />
        </>
    );
};

// Skill Badge Component
const SkillBadge = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-background/50 hover:bg-background hover:border-primary/50 transition-all group">
        <div className="transform group-hover:scale-110 transition-transform">
            {typeof icon === 'string' ? (
                <span className="text-5xl">{icon}</span>
            ) : (
                icon
            )}
        </div>
        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">{name}</span>
    </div>
);

export function Skills() {
    return (
        <section id="skills" className="py-12 md:py-16 lg:py-20 bg-muted/50">
            <div className="container px-4 md:px-6 lg:px-8">
                <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16 px-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Stack Tecnológico</h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Conjunto de habilidades distribuidas por especialidad
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Frontend Card */}
                        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:scale-[1.02]">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600" />
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-blue-500/10">
                                        <span className="text-2xl">🎨</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Frontend</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    <SkillBadge name="HTML" icon={<Html5 className="w-12 h-12" />} />
                                    <SkillBadge name="CSS" icon={<Css className="w-12 h-12" />} />
                                    <SkillBadge name="JavaScript" icon={<Javascript className="w-12 h-12" />} />
                                    <SkillBadge name="Bootstrap" icon={<Bootstrap className="w-12 h-12" />} />
                                    <SkillBadge name="Sass" icon={<Sass className="w-12 h-12" />} />
                                </div>
                            </div>
                        </div>

                        {/* Frameworks Card */}
                        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:scale-[1.02]">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-600" />
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-purple-500/10">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Frameworks</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    <SkillBadge name="React" icon={<ThemedIcon LightIcon={ReactLight} DarkIcon={ReactDark} className="w-12 h-12" />} />
                                    <SkillBadge name="Next.js" icon={<ThemedIcon LightIcon={NextjsLogoLight} DarkIcon={NextjsLogoDark} className="w-12 h-12" />} />
                                    <SkillBadge name="Astro" icon={<ThemedIcon LightIcon={AstroIconLight} DarkIcon={AstroIconDark} className="w-12 h-12" />} />
                                </div>
                            </div>
                        </div>

                        {/* Backend Card */}
                        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:scale-[1.02]">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600" />
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-green-500/10">
                                        <span className="text-2xl">⚙️</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400">Backend</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    <SkillBadge name="Node.js" icon={<Nodejs className="w-12 h-12" />} />
                                    <SkillBadge name="PHP" icon={<ThemedIcon LightIcon={Php} DarkIcon={PhpDark} className="w-12 h-12" />} />
                                    <SkillBadge name="Python" icon={<Python className="w-12 h-12" />} />
                                    <SkillBadge name="Java" icon={<Java className="w-12 h-12" />} />
                                    <SkillBadge name="MySQL" icon={<ThemedIcon LightIcon={MysqlIconLight} DarkIcon={MysqlIconDark} className="w-12 h-12" />} />
                                </div>
                            </div>
                        </div>

                        {/* Herramientas Card */}
                        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:scale-[1.02]">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gray-500 to-gray-600" />
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-gray-500/10">
                                        <span className="text-2xl">🛠️</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-600 dark:text-gray-400">Herramientas</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    <SkillBadge name="Git" icon={<Git className="w-12 h-12" />} />
                                    <SkillBadge name="Photoshop" icon={<Photoshop className="w-12 h-12" />} />
                                    <SkillBadge name="Android" icon={<AndroidIcon className="w-12 h-12" />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


const Nodejs = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        viewBox="0 0 256 292"
        xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <linearGradient
                id="nodejs__a"
                x1="68.188%"
                x2="27.823%"
                y1="17.487%"
                y2="89.755%"
            >
                <stop offset="0%" stop-color="#41873F" />
                <stop offset="32.88%" stop-color="#418B3D" />
                <stop offset="63.52%" stop-color="#419637" />
                <stop offset="93.19%" stop-color="#3FA92D" />
                <stop offset="100%" stop-color="#3FAE2A" />
            </linearGradient>
            <linearGradient
                id="nodejs__c"
                x1="43.277%"
                x2="159.245%"
                y1="55.169%"
                y2="-18.306%"
            >
                <stop offset="13.76%" stop-color="#41873F" />
                <stop offset="40.32%" stop-color="#54A044" />
                <stop offset="71.36%" stop-color="#66B848" />
                <stop offset="90.81%" stop-color="#6CC04A" />
            </linearGradient>
            <linearGradient
                id="nodejs__f"
                x1="-4.389%"
                x2="101.499%"
                y1="49.997%"
                y2="49.997%"
            >
                <stop offset="9.192%" stop-color="#6CC04A" />
                <stop offset="28.64%" stop-color="#66B848" />
                <stop offset="59.68%" stop-color="#54A044" />
                <stop offset="86.24%" stop-color="#41873F" />
            </linearGradient>
            <path
                id="nodejs__b"
                d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
            />
            <path
                id="nodejs__e"
                d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
            />
        </defs>
        <path
            fill="url(#nodejs__a)"
            d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
        />
        <mask id="nodejs__d" fill="#fff">
            <use xlink:href="#nodejs__b" />
        </mask>
        <path
            fill="url(#nodejs__c)"
            d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z"
            mask="url(#nodejs__d)"
        />
        <mask id="nodejs__g" fill="#fff">
            <use xlink:href="#nodejs__e" />
        </mask>
        <path
            fill="url(#nodejs__f)"
            d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z"
            mask="url(#nodejs__g)"
        />
    </svg>
);

export { Nodejs };

const Python = (props) => (
    <svg {...props} fill="none" viewBox="16 16 32 32">
        <path
            fill="url(#python__a)"
            d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
        />
        <path
            fill="url(#python__b)"
            d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"
        />
        <defs>
            <linearGradient
                id="python__a"
                x1="19.075"
                x2="34.898"
                y1="18.782"
                y2="34.658"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#387EB8" />
                <stop offset="1" stop-color="#366994" />
            </linearGradient>
            <linearGradient
                id="python__b"
                x1="28.809"
                x2="45.803"
                y1="28.882"
                y2="45.163"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FFE052" />
                <stop offset="1" stop-color="#FFC331" />
            </linearGradient>
        </defs>
    </svg>
);

export { Python };
