"use client";

import { Youtube, X, Globe } from "lucide-react";
import Link from "next/link";

const SocialMedia = () => {
    return (
        <div className="flex ">
            <div className="flex flex-row">
                <Link href="https://x.com/yourprofile" target="_blank">
                    <X className="w-6 h-6 hover:text-blue-500" />
                </Link>
            </div>
            <div className="flex flex-row">
                <Link href="https://youtube.com/yourprofile" target="_blank">
                  
                    <Youtube className="w-6 h-6 hover:text-red-500" />
                </Link>
            </div>
            <div className="flex w-[60px]">
                <Link href="https://tiktok.com/@yourprofile" target="_blank">
                   
                    <Globe className="w-6 h-6 hover:text-black" />
                </Link>
            </div>
        </div>
    );
};

export default SocialMedia;
