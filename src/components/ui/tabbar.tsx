"use client"

import Link from "next/link"
import TVIcon from "@/src/assets/icons/tv.svg"
import CalendarIcon from "@/src/assets/icons/calendar.svg"
import MessageIcon from "@/src/assets/icons/message.svg"
import MenuIcon from "@/src/assets/icons/menu-open.svg"
import PlayIcon from "@/src/assets/icons/play.svg"
import ChevronRightIcon from "@/src/assets/icons/chevron-right.svg"
import ChevronLeftIcon from "@/src/assets/icons/chevron-left.svg"
import TimesIcon from "@/src/assets/icons/times.svg"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/src/lib/utils"

const menuLinks = [
    {
        label: "Catégories",
        children: [
            {
                label: "Actualités",
                href: "#"
            },
            {
                label: "Economie",
                href: "#"
            },
            {
                label: "Insolite",
                href: "#"
            },
            {
                label: "Phénomènes Météo",
                href: "#"
            },
            {
                label: "Vie pratique",
                href: "#"
            },
            {
                label: "Cuisine",
                href: "#"
            },
            {
                label: "Environnement",
                href: "#"
            },
            {
                label: "Musique",
                href: "#"
            }
        ]
    },
    {
        label: "Emission",
        children: [
            {
                label: "L'info en Ile-de-France",
                href: "#"
            }
        ]
    },
    {
        label: "Jeux",
        href: "#"
    },
    {
        label: "Météo",
        href: "#"
    }
]

export type TabbarProps = {

}

export const Tabbar = (props: TabbarProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [subMenuLinks, setSubMenuLinks] = useState<typeof menuLinks[0] | undefined>(undefined);

    const links = [
        {
            href: "#",
            icon: TVIcon,
            label: "Emissions"
        },
        {
            href: "#",
            icon: CalendarIcon,
            label: "Agenda"
        },
        {
            href: "#",
            icon: PlayIcon,
            label: "Direct",
            variant: "overflow"
        },
        {
            href: "#",
            icon: MessageIcon,
            label: "Contact"
        },
        {
            icon: isMenuOpen ? TimesIcon : MenuIcon,
            label: "Menu",
            variant: "menu"
        }
    ]

    return (
        <nav className="fixed bottom-0 w-full h-[var(--footer-height)] rounded-t-lg bg-white">
            <ul className="relative flex flex-row justify-between items-center h-full bg-white z-20">
                {links.map((link, index) => (
                    <TabbarItem key={index} {...link} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
                ))}
            </ul>
            {/* MENU OPEN */}
            <ul className={cn(
                "absolute bottom-0 bg-white w-full z-10 pb-[calc(var(--footer-height)+var(--footer-height)/2)] rounded-t-xl px-5",
                isMenuOpen ? "block" : "hidden"
            )}>
                {
                    !subMenuLinks &&
                    menuLinks.map((link, index) => (
                        link.href ?
                            (
                                <li key={index} className="py-3 border-b border-b-slate-600">
                                    <Link
                                        href={link.href}
                                        className="block w-full"
                                        onClick={() => {
                                            setIsMenuOpen(false)
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            )
                            :
                            (
                                <li key={index} className="py-3 border-b border-b-slate-600 flex flex-row justify-between items-center cursor-pointer" onClick={() => setSubMenuLinks(link)}>
                                    {link.label}
                                    <Image src={ChevronRightIcon} alt="chevron droite" width={10} height={10} />
                                </li>
                            )
                    ))
                }
                {
                    subMenuLinks &&
                    subMenuLinks.children &&
                    <>
                        <li className="py-3 flex flex-row gap-4 items-center cursor-pointer" onClick={() => setSubMenuLinks(undefined)}>
                            <Image src={ChevronLeftIcon} alt="chevron gauche" width={10} height={10} />
                            {subMenuLinks.label}
                        </li>
                        {
                            subMenuLinks.children.map((link, index) => (
                                <li key={index} className="py-3 border-b border-b-slate-600">
                                    <Link
                                        href={link.href}
                                        className="block w-full"
                                        onClick={() => {
                                            setSubMenuLinks(undefined)
                                            setIsMenuOpen(false)
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </>
                }
            </ul>
        </nav>
    )
}

const TabbarItem = (props: { href?: string, variant?: string, label: string, icon: string, setIsMenuOpen: (old: boolean) => void, isMenuOpen: boolean }) => {

    const Comp = props.variant === "menu" ? "button" : Link;

    return (
        <li className="basis-1/5 flex flex-col items-center justify-center">
            <Comp href="#" className="flex flex-col items-center justify-between"
                onClick={() => {
                    if (props.variant === "menu") {
                        props.setIsMenuOpen(!props.isMenuOpen)
                    }
                }}
            >
                {
                    props.variant === "overflow" ?
                        (
                            <>
                                <div className="bg-15s-blue border-2 w-[var(--footer-height)] h-[var(--footer-height)] rounded-full absolute -translate-y-1/2 flex items-center justify-center">
                                    <Image src={props.icon} alt={props.label} width={34} height={34} />
                                </div>
                                <span className="h-[25px]" />
                            </>
                        )
                        :
                        (<Image src={props.icon} alt={props.label} width={25} height={25} className="w-[25px] h-[25px]" />)
                }
                <p>{props.label}</p>
            </Comp>
        </li>
    )
}