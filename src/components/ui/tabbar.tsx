import Link from "next/link"
import TVIcon from "@/src/assets/icons/tv.svg"
import CalendarIcon from "@/src/assets/icons/calendar.svg"
import MessageIcon from "@/src/assets/icons/message.svg"
import MenuIcon from "@/src/assets/icons/menu-open.svg"
import PlayIcon from "@/src/assets/icons/play.svg"
import Image from "next/image"

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
        href: "#",
        icon: MenuIcon,
        label: "Menu"
    }
]

export type TabbarProps = {

}

export const Tabbar = (props: TabbarProps) => {
    return (
        <nav className="fixed bottom-0 w-full h-[var(--footer-height)] rounded-t-lg bg-white">
            <ul className="flex flex-row justify-between items-center h-full">
                {links.map((link, index) => (
                    <TabbarItem key={index} {...link} />
                ))}
            </ul>
        </nav>
    )
}

const TabbarItem = (props: typeof links[0]) => {
    return (
        <li className="basis-1/5 flex flex-col items-center justify-center">
            <Link href="#" className="flex flex-col items-center justify-center">
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
                        (<Image src={props.icon} alt={props.label} width={25} height={25} />)
                }
                <p>{props.label}</p>
            </Link>
        </li>
    )
}