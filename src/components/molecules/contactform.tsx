"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const formSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .trim()
        .toLowerCase(),

    email: z.string().email({
        message: "Please input a valid Email address",
    }),
    message: z.string().trim().min(5, {
        message: "Your message must contain at least five characters.",
    }),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ContactForm({ handleSubmit }:any) {
    const [state, setState] = useState<boolean>(false);
    const [message, setMessage] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { success, message } = await handleSubmit(values);
        setState(success);
        setMessage(message);
        setTimeout(() => {
            setMessage("");
        }, 10000);
        form.reset();
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-black p-6">
            <div className="w-full max-w-lg bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-green-400 mb-6">
                    Contact Me
                </h2>

                {message && (
                    <div
                        className={`text-center p-2 rounded-md ${
                            state ? "bg-green-500" : "bg-red-500"
                        } text-white mb-4`}
                    >
                        {message}
                    </div>
                )}

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-green-300">Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-gray-800 text-white border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-500 rounded-lg"
                                            placeholder="Enter your name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-green-300">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            className="bg-gray-800 text-white border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-500 rounded-lg"
                                            placeholder="Enter your email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-green-300">Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="bg-gray-800 text-white border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-500 rounded-lg"
                                            placeholder="Type your message..."
                                            rows={4}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
