"use client";
import { FormSchema, FormSchemaType } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderIcon } from 'lucide-react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

export const FormCard = () => {
    
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema)
    });

    const onSuccessSubmit = () => {
        if (Object.keys(errors).length === 0) {
            toast.success('Your message has been sent successfully');
        } else {
            toast.error('Please fill in all the fields correctly');
        }
    };

    const onSubmit = async (data: FormSchemaType) => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        reset();
    };

    return (
        <div className="flex   justify-center w-[600px] items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white  p-10 rounded-xl shadow-2xl w-full max-w-lg space-y-6">
                <h2 className="text-3xl  font-bold text-center text-gray-800 mb-6">
                    Contact Us
                </h2>

                {/* Full Name Field */}
                <div className="mb-6">
                    <label htmlFor="fullName" className="block  text-lg font-medium text-gray-700 mb-2">
                        Full Name
                    </label>
                    <input {...register("fullName", { required: true })}
                        type="text"
                        id="fullName"
                        placeholder="Enter your full name..."
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none "
                    />
                    {errors.fullName && <p className="text-red-500 opacity-0 animate-fadeIn">This field is required</p>}
                </div>

                {/* Email Field */}
                <div className="mb-6">
                    <label htmlFor="email" className="  block text-lg font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input {...register("email", { required: true })}
                        type="email"
                        id="email"
                        placeholder="Enter your email..."
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none "
                    />
                    {errors.email && <p className="text-red-500 opacity-0 animate-fadeIn">This field is required</p>}
                </div>

                {/* Phone Field */}
                <div className="mb-6">
                    <label htmlFor="phone" className="block  text-lg font-medium text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <input {...register("phone", { required: true })}
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number..."
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none "
                    />
                    {errors.phone && <p className="text-red-500 opacity-0 animate-fadeIn">This field is required</p>}
                </div>

                {/* Message Field */}
                <div className="mb-6">
                    <label htmlFor="message" className="  block text-lg font-medium text-gray-700 mb-2">
                        Message
                    </label>
                    <textarea {...register("message", { required: true })}
                        id="message"
                        placeholder="Enter your message..."
                        rows={5}
                        className="w-full px-6 py-4 border-2 border-gray-300 resize-none dark:text-black rounded-lg focus:outline-none "
                    />
                    {errors.message && <p className="text-red-500 opacity-0 animate-fadeIn">This field is required</p>}
                </div>

                {/* Submit Button */}
                <div>
                    <button onClick={onSuccessSubmit} disabled={isSubmitting}
                        type="submit"
                        className="w-full py-4 bg-black dark:border-2 dark:border-black/35 dark:bg-white dark:text-black disabled:bg-gray-300 disabled:text-black disabled:border-2 disabled:border-black/35 flex items-center justify-center text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-800"
                    >
                        {isSubmitting ? <LoaderIcon className='text-black animate-spin' /> : "Submit"}
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};
