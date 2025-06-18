"use client";

export default function Home() {
  return (
    <div className='relative h-[calc(100vh-2.5rem)] m-5 border box-border flex items-center justify-center overflow-hidden'>
      <div className='grain' />
      <div className='relative z-10'>
        <div className='grid grid-rows-[auto_1fr_auto] w-full max-w-4xl items-center justify-items-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
          <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
            <div className='text-xl relative group'>
              <span>kihec</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 rounded bg-black text-white text-xs opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 shadow-lg">
                page work in progress
              </span>
            </div>
            <ol className='list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
              <li className='mb-2 tracking-[-.01em]'>
                <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold'>
                  make it count
                </code>
              </li>
            </ol>
          </main>
        </div>
      </div>
    </div>
  );
}
