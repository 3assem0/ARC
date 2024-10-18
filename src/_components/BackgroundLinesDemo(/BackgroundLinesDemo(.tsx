"use client";

export function BackgroundLinesDemo() {
  return (
    <div suppressHydrationWarning={true}>
    <div className="relative flex items-center justify-center h-[50rem] w-full bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-20 flex flex-col items-center text-4xl text-center sm:text-7xl font-bold py-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        <p className="mb-2">Welcome</p>
        <p className="flex">
          It&apos;s <img src="Untitled (7).png" alt="img" className="max-w-[300px] max-[1026px]:w-[200px] max-[775px]:w-[130px] " />,
        </p>
        <p>Your helpful Engineer in service.</p>
      </div>
    </div>
    </div>
  );
}
