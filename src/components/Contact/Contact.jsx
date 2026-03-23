"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomButton from "../btn/page";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(5, "Message is required"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Message Sent ✅");
  };

  return (
    <section className="w-full bg-[#040847] flex justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center px-6 md:px-10 py-16">
        <div className="text-center max-w-150 mx-auto">
          <h2 className="text-[40px] text-white font-semibold">Contact Us</h2>
          <p className="text-[#C7C9D9] text-[14px]    ">
            Your health matters to us. Whether you are booking a test, reviewing
            your results, or seeking clarification, our experts are ready to
            assist you.
          </p>
        </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-120"
          >
            <input
              placeholder="Name"
              {...register("name")}
              className="w-full bg-[#F3F4F6] text-black px-4 py-3 rounded-[6px]"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}

            <input
              placeholder="Email"
              {...register("email")}
              className="w-full bg-[#F3F4F6] text-black px-4 py-3 rounded-[6px]"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}

            <input
              placeholder="Subject"
              {...register("subject")}
              className="w-full bg-[#F3F4F6] text-black px-4 py-3 rounded-[6px]"
            />
            {errors.subject && (
              <p className="text-red-400 text-sm">{errors.subject.message}</p>
            )}

            <textarea
              rows={5}
              placeholder="Message"
              {...register("message")}
              className="w-full bg-[#F3F4F6] text-black px-4 py-3 rounded-md"
            />
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message.message}</p>
            )}

            <CustomButton
  type="submit"
  className="bg-[#A11D28] px-6 py-3 text-[14px] text-white hover:bg-[#86151d] transition duration-300 btn-all"
>
  Send a Message
</CustomButton>
          </form>

          <div>
            <img
              src="/fotter-img.jpg"
              alt="contact"
              className="w-full h-105 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
