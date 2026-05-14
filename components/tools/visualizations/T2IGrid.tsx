/* eslint-disable @next/next/no-img-element */

interface Props {
  initial: string[];
}

export function T2IGrid({}: Props) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <img
        src="/text-to-image.png"
        alt="Text to image preview"
        className="absolute inset-0 w-full h-full object-contain p-4"
      />
    </div>
  );
}
