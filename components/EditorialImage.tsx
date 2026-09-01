import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function EditorialImage({
  src,
  alt,
  caption,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(min-width: 1024px) 896px, 100vw",
}: EditorialImageProps) {
  return (
    <figure className={`space-y-2 ${className}`}>
      <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          sizes={sizes}
          priority={priority}
          className={`h-auto w-full object-cover ${imageClassName}`}
        />
      </div>
      {caption ? (
        <figcaption className="px-1 text-xs leading-relaxed text-slate-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
