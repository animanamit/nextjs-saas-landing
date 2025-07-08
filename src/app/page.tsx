import MediaBanner from "@/components/media-banner";
import ScrollMediaBanner from "@/components/scroll-media-banner";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MediaBanner />
      <ScrollMediaBanner />
    </main>
  );
}
