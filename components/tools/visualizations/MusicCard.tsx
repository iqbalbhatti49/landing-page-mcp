import { ChatMock } from "./ChatMock";

interface Props {
  src: string;
  poster: string;
  caption: string;
  duration: string;
}

export function MusicCard({ src, poster, caption, duration }: Props) {
  return (
    <ChatMock
      prompt="Generate a synth pad background track, 110 BPM, warm and cinematic"
      status="Generated"
      badges={[caption, duration]}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <video
          autoPlay muted loop playsInline preload="metadata"
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </ChatMock>
  );
}
