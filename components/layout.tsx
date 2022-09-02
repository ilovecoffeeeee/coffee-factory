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
                    <div className="flex flex-col justify-center text-lg items-center hover:cursor-pointer">
                        <span>Green</span>
                    </div>
                </Link>
                <Link href="/silos">
                    <div className="flex flex-col justify-center text-lg items-center hover:cursor-pointer">
                        <span>Silo</span>
                    </div>
                </Link>
                <Link href="/blends">
                    <div className="flex flex-col justify-center text-lg items-center hover:cursor-pointer">
                        <span>Blend</span>
                    </div>
                </Link>
                <Link href="/roasters">
                    <div className="flex flex-col justify-center text-lg items-center hover:cursor-pointer">
                        <span>Roaster</span>
                    </div>
                </Link>
                <Link href="/products">
                    <div className="flex flex-col justify-center text-lg items-center hover:cursor-pointer">
                        <span>Products</span>
                    </div>
                </Link>
                <Link href="/schedules">
                    <div className="flex flex-col justify-center text-lg items-center hover:cursor-pointer">
                        <span>Schedule</span>
                    </div>
                </Link>
                <Link href="/memos">
                    <div className="flex flex-col justify-center text-lg items-center hover:cursor-pointer">
                        <span>Memo</span>
                    </div>
                </Link>
            </nav>
        </div>
    )
}