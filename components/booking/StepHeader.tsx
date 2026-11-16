export default function StepHeader({ step, title }: { step: number; title: string }) {
  return (
    <div className="flex items-center justify-between pb-2">
      <div className="flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-on-surface font-label-sm text-label-sm font-bold text-surface">
          {step}
        </span>
        <span className="font-label-md text-label-md font-semibold uppercase tracking-wider text-on-surface">
          {title}
        </span>
      </div>
      <span className="font-mono font-label-sm text-label-sm text-on-surface-variant">Étape {step} sur 3</span>
    </div>
  );
}