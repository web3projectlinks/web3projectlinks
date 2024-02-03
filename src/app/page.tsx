import Image from "next/image";
import Sidebar from "./components/Sizebar/Sidebar";

export default function Home() {
  return (
    <main className="w-full" style={{ height: "calc(100vh - 60px)" }}>
      <Sidebar />
    </main>
  );
}
