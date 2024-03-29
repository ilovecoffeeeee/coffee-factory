import { cls } from "@libs/client/utils";

 

interface ButtonProps {
    large?: boolean;
    text: string;
    [key:string] : any;
}

export default function Button({
    large = false,
    onClick,
    text,
    ...rest
 }: ButtonProps){
    return  (
        <button
            {...rest}
            className={cls(
                "mt-6 bg-green-500 hover:bg-green-700 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none",
                large ? "py-3 text-base" : "py-2 text-sm"
            )}
        >
            {text}
        </button>
    )
 }