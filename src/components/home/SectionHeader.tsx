"use client";

type SectionHeaderProps = {
  title: string;
  action?: string;
  onAction?: () => void;
};

export default function SectionHeader({
  title,
  action,
  onAction,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-1">
      <h3 className="text-[15px] font-semibold tracking-tight text-white">
        {title}
      </h3>

      {action ? (
        <button
          type="button"
          onClick={onAction}
          className="text-[12px] font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          {action}
        </button>
      ) : null}
    </div>
  );
}
