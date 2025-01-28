import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSheme } from "@validations/contactScheme";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../Loader";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSheme),
  });

  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = () => {
    const toastId = toast.loading("Enviando mensaje...");
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_EMAIL_ID,
        import.meta.env.VITE_TEMPLATE_EMAIL_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_API_KEY_EMAIL,
        }
      )
      .then(
        () => {
          reset();
          console.log("SUCCESS");
          setIsLoading(false);
          toast.update(toastId, {
            render: "Mensaje enviado con éxito 🎉",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            pauseOnHover: false,
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsLoading(false);
          toast.update(toastId, {
            render: "Error al enviar el mensaje. Intenta de nuevo 😞",
            type: "error",
            isLoading: false,
            autoClose: 3000,
            pauseOnHover: false,
          });
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className="flex flex-col gap-2.5 mx-auto bg-gray-900 dark:bg-white w-full lg:w-1/2 2xl:w-1/3 p-4 rounded-sm"
    >
      <h4 className="text-2xl text-center text-dark-title dark:text-title underline">Contáctame</h4>
      <input
        className="rounded-sm outline-none placeholder-slate-600 dark:placeholder-slate-400 w-full p-2 ring-2 dark:ring-black focus:ring-[#FF3600] dark:focus:ring-[#FF5800]"
        placeholder="Nombre"
        readOnly={isLoading}
        {...register("user_name")}
      />
      {errors.user_name?.message && (
        <p className="text-red-300 dark:text-red-600">{errors.user_name.message}</p>
      )}
      <input
        className="outline-none placeholder-slate-600 dark:placeholder-slate-400 w-full rounded-sm p-2 ring-2 dark:ring-black focus:ring-[#FF3600] dark:focus:ring-[#FF5800]"
        type="email"
        placeholder="Correo"
        readOnly={isLoading}
        {...register("user_email")}
      />
      {errors.user_email?.message && (
        <p className="text-red-300 dark:text-red-600">{errors.user_email.message}</p>
      )}
      <textarea
        rows="9"
        className="w-full h-full resize-none rounded-sm placeholder-slate-600 dark:placeholder-slate-400 p-2 focus:outline-none ring-2 dark:ring-black focus:ring-[#FF3600] dark:focus:ring-[#FF5800]"
        placeholder="Mensaje"
        readOnly={isLoading}
        {...register("message")}
      ></textarea>
      {errors.message?.message && (
        <p className="text-red-300 dark:text-red-600">{errors.message.message}</p>
      )}
      <button
        type="submit"
        className="bg-[#fc512b] hover:bg-[#FF3600] transition-colors duration-300 ease-linear rounded-sm text-[#E3E7EF] font-bold p-2"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader size="w-6 h-6" color1="#111827" color2="#E3E7EF" />
        ) : (
          "Enviar"
        )}
      </button>
      <ToastContainer theme="light" />
    </form>
  );
}

export default Contact;
