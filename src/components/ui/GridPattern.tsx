export default function GridPattern() {
  return (
    <div className="grid-pattern" aria-hidden="true">
      {Array.from({ length: 15 * 20 }).map((_, i) => (
        <div key={i} className="grid-cell" />
      ))}
    </div>
  );
}
