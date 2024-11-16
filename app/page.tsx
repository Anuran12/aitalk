import Ask from "@/components/Ask";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <Topbar />
      <Ask />
    </div>
  );
}
