import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="w-full" style={{ height: "calc(100vh - 60px)" }}>
      <Sidebar />
    </main>
  );
}
