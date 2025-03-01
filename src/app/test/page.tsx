export default function Test() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-[#0A0A0F] p-8 pb-14 gap-16
    sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-x-hidden"
    >
      <main className="flex flex-col gap-8 row-start-2 items-center relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b
        from-indigo-500/20 via-purple-500/10 to-transparent blur-[100px]"
        />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-radial from-violet-500/10
        to-transparent blur-[80px]"
        />

        <h1 className="text-6xl font-bold flex flex-wrap justify-center text-center relative z-10">
          <span className="mr-2 bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
            Transforme seus estudos
          </span>
          <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
            para o ENEM
          </span>
        </h1>
      </main>
    </div>
  );
}
