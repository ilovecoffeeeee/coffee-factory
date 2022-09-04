import React from "react";
import Link from "next/link";
import { cls } from "../libs/utils"
import { useRouter } from "next/router";

interface LayoutProps {
    title?: string;
    canGoBack?: boolean;
    hasTabBar?: boolean;
    children: React.ReactNode;
}

export default function Layout({
    title,
    canGoBack,
    hasTabBar,
    children,
}: LayoutProps) {
    const router = useRouter();
    const onClick = () => {
        router.back();
    }
    return (
        <div>
            <div className="bg-white w-full h-12 justify-center text-lg px-10 font-medium fixed text-gray-800 border-b top-0 flex items-center">
                {canGoBack ? (
                    <button onClick={onClick} className="absolute left-4">Back</button>
                ) : null }
                {title ? (<span className={cls(canGoBack ? "mx-auto" : "", "")}>{title}</span>) : null}
            </div>
            <div className={cls("pt-12", hasTabBar ? "pb-24" : "")}>{children}</div>
            <nav className="fixed bg-white max-w-5xl border-t bottom-0 w-full px-10 pb-5 pt-5 flex justify-between text-xs">
                <Link href="/">
                    <div className={cls("flex flex-col justify-center text-lg items-center hover:cursor-pointer", router.pathname === "/" ? "text-green-600" : "hover:text-gray-500 transition-colors")}>
                        <span>Main</span>
                    </div>
                </Link>
                <Link href="/greenbeans">
                    <div className={cls("flex flex-col justify-center text-lg items-center hover:cursor-pointer", router.pathname === "/greenbeans" ? "text-green-600" : "hover:text-gray-500 transition-colors")}>
                        <span>Green</span>
                    </div>
                </Link>
                <Link href="/silos">
                    <div className={cls("flex flex-col justify-center text-lg items-center hover:cursor-pointer", router.pathname === "/silos" ? "text-green-600" : "hover:text-gray-500 transition-colors")}>
                        <span>Silo</span>
                    </div>
                </Link>
                <Link href="/blends">
                    <div className={cls("flex flex-col justify-center text-lg items-center hover:cursor-pointer", router.pathname === "/blends" ? "text-green-600" : "hover:text-gray-500 transition-colors")}>
                        <span>Blend</span>
                    </div>
                </Link>
                <Link href="/roasters">
                    <div className={cls("flex flex-col justify-center text-lg items-center hover:cursor-pointer", router.pathname === "/roasters" ? "text-green-600" : "hover:text-gray-500 transition-colors")}>
                        <span>Roaster</span>
                    </div>
                </Link>
                <Link href="/products">
                    <div className={cls("flex flex-col justify-center text-lg items-center hover:cursor-pointer", router.pathname === "/products" ? "text-green-600" : "hover:text-gray-500 transition-colors")}>
                        <span>Products</span>
                    </div>
                </Link>
                <Link href="/schedules">
                    <div className={cls("flex flex-col justify-center text-lg items-center hover:cursor-pointer", router.pathname === "/schedules" ? "text-green-600" : "hover:text-gray-500 transition-colors")}>
                        <span>Schedule</span>
                    </div>
                </Link>
                <Link href="/memos">
                    <div className={cls("flex flex-col justify-center text-lg items-center hover:cursor-pointer", router.pathname === "/memos" ? "text-green-600" : "hover:text-gray-500 transition-colors")}>
                        <span>Memo</span>
                    </div>
                </Link>
            </nav>
        </div>
    )
}