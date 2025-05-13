"use client";

export default function Home() {
  return (
    <div className='relative h-[calc(100vh-2.5rem)] m-5 border box-border flex items-center justify-center overflow-hidden'>
      <div className='grain' />
      <div className='relative z-10'>
        <div className='grid grid-rows-[auto_1fr_auto] w-full max-w-4xl items-center justify-items-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
          <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
            <div className="text-xl">kihec</div>
            <ol className='list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
              <li className='mb-2 tracking-[-.01em]'>
                Get started by editing{" "}
                <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold'>
                  src/app/page.tsx
                </code>
                .
              </li>
              <li className='tracking-[-.01em]'>
                Save and see your changes instantly.
              </li>
            </ol>
          </main>
        </div>
      </div>
    </div>
  );
}
