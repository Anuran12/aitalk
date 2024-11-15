import Ask from "@/components/Ask";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center h-screen p-8">
      <Topbar />
      <Ask />
    </div>
  );
}
