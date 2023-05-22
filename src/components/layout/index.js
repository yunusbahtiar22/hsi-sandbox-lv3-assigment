import Header from "./header";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      <Header home={pathname === "/"} />
      <main className="w-full md:w-[720px] lg:w-[1077px] bg-white mx-auto md:px-4 mb-48">
        {children}
      </main>
    </>
  );
}
