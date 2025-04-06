
import ContactForm from "@/components/molecules/contactform";
import SocialMedia from "@/components/molecules/socialmedia";
import { submitForm } from "@/db/action";
import support from "../../public/reachout.jpg"
import Image from "next/image";
export default async function ContactPage() {
    return (
        <main className="m-20">
            <p>Let&lsquo;s talk</p>
            <p>
                Struggling with tech issues or need a reliable software developer? Let’s turn your ideas into
                reality—contact me today for cutting-edge software solutions, mentorship and network opportunities!
            </p>
            <div className="">
                <address typeof="email">ezekieljeremiah@gmail.com</address>
                <SocialMedia />
            </div>
            <div className="flex flex-row  justify-between">

                <Image src={support} alt="Contack ezekiel Image" className="object-containm-[0px]  gab-[0px] w-[50%] hidden md:block" />
                <div className=" max-w-[500px] w-full border border-full">

                    <ContactForm handleSubmit={submitForm} />
                </div>
            </div>
        </main>
    )
}