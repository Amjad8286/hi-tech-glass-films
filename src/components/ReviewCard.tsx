export function ReviewCard({
  name,
  area,
  tag,
  text,
}: {
  name: string;
  area: string;
  tag?: string;
  text: string;
}) {
  return (
    <figure className="surface flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <div
          className="font-mono text-sm tracking-wide text-sun-deep"
          aria-label="Rated 5 out of 5"
        >
          ★★★★★
        </div>
        {tag ? (
          <span className="rounded-full border border-glass/30 bg-glass/5 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-glass-deep">
            {tag}
          </span>
        ) : null}
      </div>
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/85">
        “{text}”
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-medium text-ink">{name}</span>
        <span className="text-slate-muted"> · {area}</span>
      </figcaption>
    </figure>
  );
}
