import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="w-full md:w-[720px] lg:w-[1077px] bg-white mx-auto md:px-4 mb-48">
        {children}
      </main>
    </>
  );
}
