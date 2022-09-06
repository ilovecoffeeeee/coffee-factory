import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@components/input";
import useMutaion from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";

interface EnterForm {
  email?: string;
  phone?: string;
}

export default function Enter() {
  const [enter, {loading, data, error}] = useMutaion("/api/users/enter");
  const {register, handleSubmit, reset} = useForm<EnterForm>();
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => {
    reset();
    setMethod("email")
  };
  const onPhoneClick = () => {
    reset();
    setMethod("phone")
  };
  const onVaild = (data:EnterForm) => {
    enter(data);
  };

  return (
    <div className="mt-16 px-4">
      <h3 className="text-3xl font-bold text-center">Enter to Coffee Factory</h3>
      <div className="mt-12">
        <div className="flex flex-col items-center">
          <h5 className="mt-16 text-gray-500 font-medium">Enter using:</h5>
          <div className="mt-8 grid grid-cols-2 gap-30 w-full">
            <button
                className={cls(
                    "pb-4 font-medium text-sm border-b-2",
                    method === "email"
                    ? "border-green-500 text-green-400"
                    : "border-transparent hover:text-gray-400 text-gray-500"
                )} onClick={onEmailClick}>Email</button>
            <button
                className={cls(
                    "pb-4 font-medium text-sm border-b-2",
                    method === "phone"
                    ? "border-green-500 text-green-400"
                    : "border-transparent hover:text-gray-400 text-gray-500"
                )} onClick={onPhoneClick}>Phone</button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onVaild)} className="flex flex-col mt-8">
          <div className="mt-2">
            {method === "email" ? (
              <Input
                register={register("email", {
                  required: true,
                })}
                name="email"
                label="Email address"
                type="email"
                required
              />
            ): null}
            {method === "phone" ? (
              <Input
                register={register("phone", {
                  required: true,
                })}
                name="phone"
                label="Phone Number"
                type="number"
                kind="phone"
                required
              />
            ) : null}
          </div>
          <button className="mt-6 bg-green-500 hover:bg-green-700 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none">
            {method === "email" ? "Get login link" : null}
            {method === "phone" ? "Get one-time password" : null}
          </button>
        </form>
        <div className="mt-8">
          <div className="relative">
            <div className="absolute w-full border-t border-gray-300" />
            <div className="relative -top-3 text-center">
              <span className="bg-white px-2 text-sm text-gray-500">Or enter with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-3">
            <button className="flex justify-center items-center py-3 px-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="flex justify-center items-center py-3 px-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}