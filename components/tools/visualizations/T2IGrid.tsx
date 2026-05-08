/* eslint-disable @next/next/no-img-element */

interface Props {
  initial: string[];
}

export function T2IGrid({ initial }: Props) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 w-full">
      {initial.map((src, i) => (
        <div
          key={i}
          className="aspect-square rounded-md relative overflow-hidden bg-surface-primary"
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
