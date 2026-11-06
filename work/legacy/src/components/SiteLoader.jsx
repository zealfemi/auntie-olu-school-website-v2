export default function SiteLoader() {
  return (
    <main
      className="grid min-h-screen place-items-center bg-navy px-5 text-center"
      aria-live="polite"
      aria-label="Loading Auntie Olu School website">
      <div>
        <img
          src="/images/auntie-olu-school-badge.png"
          alt="Auntie Olu School badge"
          className="mx-auto h-40 w-40 animate-pulse drop-shadow-2xl object-contain"
        />
      </div>
    </main>
  );
}
