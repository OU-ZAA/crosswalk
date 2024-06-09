import MapWithSearch from "@/components/search-with-search";
import { LayoutDashboard, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex">
      <div className="bg-blue-950 h-screen w-64 px-4 py-6 flex flex-col gap-6">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/crosswalk-32.png"
              width={32}
              height={32}
              alt="crosswalk icon"
            />
            <p className="text-2xl text-yellow-400 font-bold">Crosswalk</p>
          </div>
        </Link>
        <Link
          href="#"
          className="text-slate-300 text-md font-semibold flex items-center gap-1 hover:text-slate-500 transition"
        >
          <LayoutDashboard />
          <p>Dashboard</p>
        </Link>
        <Link
          href="#"
          className="text-slate-300 text-md font-semibold flex items-end gap-1 hover:text-slate-500 transition flex-grow"
        >
          <LogIn />
          <p>Log in</p>
        </Link>
      </div>
      <MapWithSearch />
    </main>
  );
}
