"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";

const AuthSuccess = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
    }

    // ⏳ Redirect after 2 sec
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#24180c] text-gray-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center"
        >
          <span className="text-3xl font-bold text-white">✓</span>
        </motion.div>

        {/* Text */}
        <h1 className="text-3xl md:text-5xl font-light tracking-wide">
          Login Successful
        </h1>

        <p className="text-gray-400 text-sm md:text-lg">
          Redirecting to homepage...
        </p>
      </motion.div>
    </div>
  );
};

export default AuthSuccess;
