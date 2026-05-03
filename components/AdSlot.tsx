// components/AdSlot.tsx
"use client";

type Props = {
  id: string;
  label?: string;
};

const ADS_ENABLED = false; // flip to true once AdSense is approved

export function AdSlot({ id }: Props) {
  if (!ADS_ENABLED) return null;

  return (
    <div id={id} className="my-10">
      {/* AdSense code will go here later */}
    </div>
  );
}
