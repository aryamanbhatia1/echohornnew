import Header from "@/components/header/header";
import FeaturePlacards from "@/components/features/placcard";

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
        <div className="absolute inset-0 bg-[url('/img12.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.14),transparent_18%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.1),transparent_24%),linear-gradient(180deg,rgba(3,7,18,0.86),rgba(3,7,18,0.97))]" />
        <div className="absolute left-[8%] top-40 h-44 w-44 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute right-[10%] top-36 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-14 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <FeaturePlacards />
      </main>
    </>
  );
}
