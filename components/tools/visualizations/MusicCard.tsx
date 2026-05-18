import { ChatMock } from "./ChatMock";

interface Props {
  src: string;
  poster: string;
  caption: string;
  duration: string;
}

function CheckRow({ children }: { children: React.ReactNode }) {
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

export function MusicCard({ poster }: Props) {
  return (
    <WidgetFrame
      title="Understood, Generating …"
      description={
        <div className="flex flex-col gap-2">
          <CheckRow>Creating songs for the launch</CheckRow>
          <CheckRow>Delivering the songs to the user</CheckRow>
          <p className="mt-1 font-sans text-[13.5px] text-[#1A1424] leading-[1.55]">
            Here are songs made for main menu, gameplay, cutscenes, and ending.
          </p>
        </div>
      }
    >
      <div className="flex flex-col gap-2.5 max-w-[520px]">
        <TrackRow
          poster={poster}
          title="Duvet"
          subtitle="Eleven Labs"
          duration="2:30"
          progress={28}
        />
        <TrackRow
          poster={poster}
          title="Foliage"
          subtitle="Eleven Labs"
          duration="2:30"
          progress={12}
        />
      </div>
    </WidgetFrame>
  );
}
