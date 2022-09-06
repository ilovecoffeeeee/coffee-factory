import { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
    username: string;
    password: string;
    email: string;
    errors?: string;
}

export default function Forms() {
    const {register, handleSubmit, setValue, setFocus} = useForm<LoginForm>({
    });
    const onValid = () => {
        console.log("valid")
    };
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors)
    };
    setValue("username", "Hello");
    useEffect(() => {
        setFocus("password");
    }, [setFocus])

    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input {...register("username", {
                required: "Username is required.",
                minLength: {
                    message: "The username should be longer than 5 chars.",
                    value: 5,
                },
                })}
                type="text"
                placeholder="Username"
            />
            <input {...register("email")} type="email" placeholder="Email"/>
            <input {...register("password")} placeholder="Password" required/>
            <input type="submit" value="Creat Account"/>
        </form>
    );
};