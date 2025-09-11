"use client";

import { motion } from "framer-motion";
import { Circle, ArrowDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    isLight = false,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    isLight?: boolean;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        isLight 
                            ? "backdrop-blur-[2px] border-2 border-black/[0.15] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]" 
                            : "backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        isLight
                            ? "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_70%)]"
                            : "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Formation Vibe Coding | Samedi 4 Octobre 2025",
    title1 = "Code l'avenir,",
    title2 = "libère ta créativité avec l'IA",
    subtitle = "En 2h, deviens celui qui slay le digital.",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    subtitle?: string;
}) {
    const { theme } = useTheme();
    const [isLight, setIsLight] = useState(false);
    
    // Déterminer si le thème est light
    useEffect(() => {
        setIsLight(theme === 'light');
    }, [theme]);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className={cn(
            "relative min-h-screen w-full flex items-center justify-center overflow-hidden",
            isLight ? "bg-white" : "bg-[#030303]"
        )}>
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br",
                isLight 
                    ? "from-blue-500/[0.05] via-transparent to-red-500/[0.05]" 
                    : "from-blue-500/[0.05] via-transparent to-red-500/[0.05]",
                "blur-3xl"
            )} />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient={isLight ? "from-blue-500/[0.15]" : "from-blue-500/[0.15]"}
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    isLight={isLight}
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient={isLight ? "from-red-500/[0.15]" : "from-red-500/[0.15]"}
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    isLight={isLight}
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient={isLight ? "from-blue-500/[0.15]" : "from-blue-500/[0.15]"}
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                    isLight={isLight}
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient={isLight ? "from-gray-500/[0.15]" : "from-white/[0.15]"}
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                    isLight={isLight}
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient={isLight ? "from-red-500/[0.15]" : "from-red-500/[0.15]"}
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                    isLight={isLight}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 md:mb-8",
                            isLight 
                                ? "bg-black/[0.03] border-black/[0.08] text-black/60" 
                                : "bg-white/[0.03] border-white/[0.08] text-white/60"
                        )}
                    >
                        <Circle className={cn(
                            "h-2 w-2",
                            isLight ? "fill-red-500/80" : "fill-red-500/80"
                        )} />
                        <span className="text-sm tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className={cn(
                            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight font-headline",
                            isLight ? "text-black" : "text-white"
                        )}>
                            <span className={cn(
                                "bg-clip-text text-transparent",
                                isLight 
                                    ? "bg-gradient-to-b from-black to-black/80" 
                                    : "bg-gradient-to-b from-white to-white/80"
                            )}>
                                {title1}
                            </span>
                            <br />
                            <span className={cn(
                                "bg-clip-text text-transparent bg-gradient-to-r",
                                isLight 
                                    ? "from-blue-600 via-black/90 to-red-600" 
                                    : "from-blue-300 via-white/90 to-red-300"
                            )}>
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className={cn(
                            "text-base md:text-xl mb-6 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4",
                            isLight ? "text-black/60" : "text-white/60"
                        )}>
                            {subtitle}{" "}
                            <span className={cn(
                                "font-bold",
                                isLight ? "text-blue-600" : "text-accent"
                            )}>
                                slay
                            </span>{" "}
                            le digital.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button 
                            size="lg" 
                            asChild 
                            className={cn(
                                "text-lg",
                                isLight 
                                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                                    : "bg-accent hover:bg-accent/90 text-accent-foreground"
                            )}
                        >
                            <Link href="#pricing">Je m'inscris à -50%</Link>
                        </Button>
                        <Button 
                            size="lg" 
                            variant={isLight ? "outline" : "outline"} 
                            asChild
                            className={isLight ? "border-black/20 text-black" : ""}
                        >
                            <Link href="#programme">
                                Voir le programme
                                <ArrowDown className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        custom={4}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-6"
                    >
                        <p className={cn(
                            "text-sm",
                            isLight ? "text-black/60" : "text-white/60"
                        )}>
                            Places limitées (10) -{' '}
                            <Link 
                                href="https://www.meetup.com/paris-social-vibe-coding-meetup-group/events/310890615/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={cn(
                                    "hover:underline font-medium",
                                    isLight ? "text-blue-600" : "text-primary"
                                )}
                            >
                                Inscrivez-vous sur Meetup
                            </Link>
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className={cn(
                "absolute inset-0 pointer-events-none",
                isLight 
                    ? "bg-gradient-to-t from-white via-transparent to-white/80" 
                    : "bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80"
            )} />
        </div>
    );
}

export { HeroGeometric }