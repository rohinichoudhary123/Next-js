import React from "react";

const loading = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-cyan-900 animate-gradient" />

      {/* Blur Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

      {/* Card */}
      <div className="relative z-10 flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 px-10 py-12 backdrop-blur-xl shadow-2xl">
        {/* Logo */}
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg animate-pulse">
          <span className="text-3xl font-bold text-white">N</span>
        </div>

        {/* Spinner */}
        <div className="relative mb-6">
          <div className="h-16 w-16 rounded-full border-4 border-white/10"></div>
          <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-t-cyan-400 border-r-violet-400 animate-spin"></div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-white">
          Loading...
        </h2>

        <p className="mt-2 text-sm text-gray-300">
          Preparing your experience
        </p>

        {/* Loading Dots */}
        <div className="mt-8 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-violet-400 animate-bounce"></span>
          <span
            className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className="h-3 w-3 rounded-full bg-pink-400 animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default loading;
