import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [sort, setSort] = useState("new");
  const router = useRouter();

  return (
    <header className="bg-white w-full h-max md:w-[720px] lg:w-[1077px] mx-auto py-[60px]">
      <nav className="grid place-content-center relative py-1">
        <Link href="/">
          <div className="grid place-content-center">
            <Image width={100} height={100} src="/bahram-logo.svg" alt="" />
          </div>
        </Link>
        <div
          className={`md:absolute mt-8 md:mt-0 ${
            router.pathname !== "/" && "hidden"
          }`}
        >
          <button
            onClick={() => {
              router.push("?sort=popular");
              setSort("popular");
            }}
            className={`w-min h-[35px] px-[20px] py-[5px] font-semibold rounded-lg mr-10 ${
              sort === "popular" && "bg-[#FF5480] text-white"
            }`}
          >
            Popular
          </button>
          <button
            onClick={() => {
              router.push("?sort=new");
              setSort("new");
            }}
            className={`w-min h-[35px] px-[20px] py-[5px] font-semibold rounded-lg mr-10 ${
              sort === "new" && "bg-[#FF5480] text-white"
            }`}
          >
            New
          </button>
        </div>
      </nav>
    </header>
  );
}
