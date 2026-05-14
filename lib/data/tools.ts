const CDN = "https://cdn-imagine.vyro.ai";
const GPT2 = `${CDN}/imagine-one/gpt-2-image-assets`;
const SEEDANCE_VIDEOS = `${CDN}/imagine-one/home/seedance2/videos`;
const SEEDANCE_FRAMES = `${CDN}/imagine-one/home/seedance2/first_frame`;
const MUSIC = `${CDN}/imagine-one/audio-studio-empty-state/music`;

export type ToolKind =
  | "image-carousel"
  | "video-timecode"
  | "bg-remove"
  | "upscale-pair"
  | "music"
  | "script"
  | "listing"
  | "balance";

export type ToolSpan = "hero" | "wide" | "half";

interface ToolBase {
  fn: string;
  name: string;
  desc: string;
  span: ToolSpan;
  kind: ToolKind;
}

export interface ImageCarouselTool extends ToolBase {
  kind: "image-carousel";
  initialTiles: string[];
}

export interface VideoTimecodeTool extends ToolBase {
  kind: "video-timecode";
  src: string;
  poster: string;
  durationLabel: string;
}

export interface BgRemoveTool extends ToolBase {
  kind: "bg-remove";
  src: string;
}

export interface UpscalePairTool extends ToolBase {
  kind: "upscale-pair";
  src: string;
  sourceLabel: string;
  resultLabel: string;
}

export interface MusicTool extends ToolBase {
  kind: "music";
  src: string;
  poster: string;
  caption: string;
  duration: string;
}

export interface ScriptItem {
  type: "scene" | "action" | "char" | "line";
  text: string;
}

export interface ScriptTool extends ToolBase {
  kind: "script";
  items: ScriptItem[];
}

export interface ListingItem {
  thumb: string;
  name: string;
  badge: string;
  time: string;
}

export interface ListingTool extends ToolBase {
  kind: "listing";
  items: ListingItem[];
}

export interface BalanceTool extends ToolBase {
  kind: "balance";
}

export type Tool =
  | ImageCarouselTool
  | VideoTimecodeTool
  | BgRemoveTool
  | UpscalePairTool
  | MusicTool
  | ScriptTool
  | ListingTool
  | BalanceTool;

const T2I_INITIAL = [
  "img01_horizon.webp",
  "img04_justice.webp",
  "img07_darkest.webp",
  "img09_tp7.webp",
  "image_8_urban_legends.webp",
  "dragon_awakens.webp",
].map((f) => `${GPT2}/${f}`);

export const TOOLS: Tool[] = [
  {
    kind: "image-carousel",
    span: "hero",
    fn: "imagine.text_to_image()",
    name: "Every marketing asset",
    desc: "Turn any product into a campaign in seconds. Posters, ads, lifestyle shots, social media posts — whatever the channel needs, generated from a single prompt.",
    initialTiles: T2I_INITIAL,
  },
  {
    kind: "video-timecode",
    span: "half",
    fn: "imagine.text_to_video()",
    name: "One prompt replaces your agency",
    desc: "UGC, TV spots, product videos — generated from a brief. Seedance 2.0, up to 10 seconds, any format.",
    src: `${SEEDANCE_VIDEOS}/29s.mp4`,
    poster: `${SEEDANCE_FRAMES}/29s.webp`,
    durationLabel: "00:00 / 00:08",
  },
  {
    kind: "bg-remove",
    span: "half",
    fn: "imagine.remove_bg()",
    name: "Clean product photos, automatically",
    desc: "Pixel-perfect background removal on any image. Hair, edges, fine detail — all intact. Ready for any surface.",
    src: `${GPT2}/img07_darkest.webp`,
  },
  {
    kind: "upscale-pair",
    span: "wide",
    fn: "imagine.upscale()",
    name: "Make any image print-ready",
    desc: "Up to 4× without the AI smear. Detail-aware diffusion that keeps edges, skin, and text sharp at any size.",
    src: `${GPT2}/img04_justice.webp`,
    sourceLabel: "1024 × 640",
    resultLabel: "4096 × 2560",
  },
  {
    kind: "music",
    span: "half",
    fn: "imagine.music()",
    name: "Score your content without a studio",
    desc: "Set the mood, tempo, and instruments. Get a production-ready track in seconds — no composer, no license fees.",
    src: `${MUSIC}/videos/1.mp4`,
    poster: `${MUSIC}/images/1.webp`,
    caption: "SYNTH PAD · 110 BPM",
    duration: "0:32",
  },
  {
    kind: "script",
    span: "half",
    fn: "imagine.script()",
    name: "Brief in, production script out",
    desc: "Screenplay scenes and ad copy from a single prompt. Structured, formatted, and ready for production.",
    items: [
      { type: "scene", text: "INT. NEON DINER. NIGHT." },
      { type: "action", text: "Rain drums the window. Static hums." },
      { type: "char", text: "MAYA" },
      { type: "line", text: '"You knew this was coming."' },
    ],
  },
  {
    kind: "listing",
    span: "half",
    fn: "imagine.list()",
    name: "Everything you've made, in one place",
    desc: "Browse and retrieve any generation by type, date, or prompt. Images, videos, music — nothing gets lost.",
    items: [
      {
        thumb: `${SEEDANCE_FRAMES}/13s.webp`,
        name: "cityscape_4k.mp4",
        badge: "vid",
        time: "2m",
      },
      {
        thumb: `${GPT2}/img04_justice.webp`,
        name: "portrait_01.png",
        badge: "img",
        time: "14m",
      },
      {
        thumb: `${GPT2}/img09_tp7.webp`,
        name: "album_cover.png",
        badge: "img",
        time: "1h",
      },
    ],
  },
  {
    kind: "balance",
    span: "half",
    fn: "imagine.balance()",
    name: "Know exactly what you have left",
    desc: "Check credits, usage, and renewal date at any time. No surprises mid-generation.",
  },
];

export const HERO_VIDEO = {
  src: `${SEEDANCE_VIDEOS}/13s.mp4`,
  poster: `${SEEDANCE_FRAMES}/13s.webp`,
};

export const CTA_VIDEO = {
  src: `${SEEDANCE_VIDEOS}/47s.mp4`,
  poster: `${SEEDANCE_FRAMES}/47s.webp`,
};
