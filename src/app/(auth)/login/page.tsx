
import Link from "next/link";
import Login from "@/components/molecules/signin";


export default async function LoginPage() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Breadcrumb Navigation */}
      <nav className="self-start p-4">
        <Link href="/" className="text-white-600 hover:underline flex items-center">
          ← Go Back to Home
        </Link>
      </nav>

    
      <div className=" p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4">Login to access Blog Page</h1>
        <Login />
      </div>
    </div>
  );
}
