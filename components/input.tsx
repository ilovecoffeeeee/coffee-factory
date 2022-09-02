interface InputProps {
    label: string;
    name: string;
    kind?: "text" | "memo"
    [key:string]: any;
}

export default function Input({
    label,
    name,
    kind = "text",
    ...rest
}: InputProps) {
    return (
        <div>
            <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor={name}
            >
                {label}
            </label>
            {kind === "text" ? (
                <div className="rounded-md relative flex items-center shadow-sm">
                    <input 
                        id={name}
                        {...rest}
                        className="
                            appearance-none
                            w-full
                            px-3 py-2
                            border
                            border-gray-300
                            rounded-sm shadow-sm
                            "
                    />
                </div>
            ) : null}
        </div>
    );
};