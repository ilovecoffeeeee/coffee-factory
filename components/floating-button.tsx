import Link from "next/link";
import React from "react";

interface FloatingButtonProps {
    children: React.ReactNode;
    href: string;
}

export default function FloatingButton({children, href}: FloatingButtonProps) {
    return (
        <Link href={href}>
            <a className="
                fixed
                hover:bg-green-500
                aspect-square
                border-transparent
                transition-colors
                cursor-pointer
                bottom-24
                right-5
                shadow-xl
                border-0
                rounded-full
                flex
                items-center
                justify-center
                w-14
                text-white
                bg-green-400"
            >{children}</a>
        </Link>
    );
}