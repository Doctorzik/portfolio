
import { auth } from "auth";
import { redirect } from "next/navigation";
import { signOutFun } from "@/db/action";
import Image from "next/image";


export default async function BlogPage() {
  const session = await auth()


  if (!session?.user) {
    return redirect("/login")
  }
  const { name, email, image } = session.user
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{name} : Welcome to the Blog</h1>
      <p>You are logged in as {session.user?.email}</p>
      <Image src={image ?? "/default-image.png"} width={100} height={100} alt="name" />
      <p>{email}</p>
      <button onClick={signOutFun}>
        Sign Out
      </button>
    </div>
  );
}
