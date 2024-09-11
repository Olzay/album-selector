"use client";

import { useRouter, usePathname } from "next/navigation";

const Reset = () => {
  const router = useRouter();
  const pathname = usePathname();

  //good for testing, resets page to use default mock data
  const resetLocalStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    pathname === "/" && window.location.reload();
    router.push("/");
  };

  return (
    <div className="w-full">
      <hr className="my-10"></hr>
      <button onClick={() => resetLocalStorage()} className="w-full border-red-100 px-5 py-3 bg-red-900 rounded-md text-white font-bold">
        Reset
      </button>
    </div>
  );
};

export default Reset;
