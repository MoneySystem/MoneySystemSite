export function ArrowIcon({ direction = "right" }: { direction?: "right" | "down" }) {
  return (
    <svg
      aria-hidden="true"
      className={`arrow-icon arrow-icon--${direction}`}
      viewBox="0 0 16 16"
      width="16"
      height="16"
    >
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
    </svg>
  );
}
