export default function CardSkeleton({ type }) {
  if (type === "suggestion") {
    return (
      <article className="px-4 py-4 mb-6 md:mb-20 animate-pulse bg-slate-200">
        <div className="w-full aspect-video relative rounded-md bg-slate-100 mb-3"></div>
        <p className="w-[60%] h-6 bg-slate-100 mb-3"></p>
        <h2 className="font-semibold text-xl leading-[46px] mb-3 h-8 bg-slate-100"></h2>
        <p className="w-[90%] h-2 bg-slate-100 mt-3"></p>
        <p className="w-[90%] h-2 bg-slate-100 mt-3"></p>
        <p className="w-[90%] h-2 bg-slate-100 mt-3"></p>
      </article>
    );
  }

  if (type === "related") {
    return (
      <article className="w-full grid grid-cols-2 overflow-hidden grid-rows-[300px] rounded-md mb-10 animate-pulse bg-slate-200">
        <div className="p-5">
          <span className="block text-[24px] leading-[58px] w-20 h-5 bg-slate-100 mt-5"></span>
          <h2 className="w-[90%] h-8 bg-slate-100 mt-5"></h2>
          <p className="w-[90%] h-2 bg-slate-100 mt-5"></p>
          <p className="w-[90%] h-2 bg-slate-100 mt-4"></p>
          <p className="w-[90%] h-2 bg-slate-100 mt-4"></p>
          <p className="w-[90%] h-2 bg-slate-100 mt-4"></p>
        </div>
        <div className="w-full h-full bg-slate-100"></div>
      </article>
    );
  }

  return (
    <article className="px-4 py-4 mb-6 md:mb-20 animate-pulse bg-slate-200">
      <div className="w-full aspect-video relative rounded-md bg-slate-100"></div>
      <p className="w-[60%] h-6 bg-slate-100 mb-3"></p>
      <h2 className="font-semibold text-xl leading-[46px] mb-3 h-8 bg-slate-100"></h2>
    </article>
  );
}
