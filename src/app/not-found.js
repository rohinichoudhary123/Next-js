import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
         <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background Blur */}
      <div className="absolute top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl shadow-2xl">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-violet-600/20">
          <span className="text-5xl">🚀</span>
        </div>

        <h1 className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-8xl font-extrabold text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400">
          Sorry, the page you are looking for does not  exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Go Home
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-gray-300 transition hover:border-violet-500 hover:text-white"
          >
            Explore
          </Link>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute left-10 top-20 h-4 w-4 animate-ping rounded-full bg-violet-400"></div>
      <div className="absolute bottom-20 right-20 h-5 w-5 animate-bounce rounded-full bg-cyan-400"></div>
      <div className="absolute left-1/4 bottom-24 h-3 w-3 rounded-full bg-pink-500"></div>
    </main>
    </div>
  )
}

export default notFound