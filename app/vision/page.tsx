import type { FC } from 'react';
import Header from '@/components/header/header';
import VisionsGallery from '@/components/vision/visions_gallery';

const VisionPage: FC = () => {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#020611] text-white">
        <div className="absolute inset-0 bg-[url('/visions_stars.png')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(250,204,21,0.14),transparent_20%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.18),transparent_26%),linear-gradient(180deg,rgba(2,6,17,0.72),rgba(2,6,17,0.94))]" />
        <div className="absolute left-[8%] top-40 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[10%] top-52 h-52 w-52 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <VisionsGallery />
      </main>
    </>
  );
};

export default VisionPage;
