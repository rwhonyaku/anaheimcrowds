type Props = {
  id: string;
  label: string;
};

/**
 * Ad placeholder.
 * Keep this even before AdSense approval.
 * When approved, you can replace the inner content with <ins class="adsbygoogle"> blocks.
 */
export function AdSlot({ id, label }: Props) {
  return (
    <div className="ad" id={id} aria-label={label}>
      <strong>Ad slot</strong>
      <div className="hr" />
      <div>{label}</div>
      <div className="note">Placeholder. Shows only after AdSense setup.</div>
    </div>
  );
}
