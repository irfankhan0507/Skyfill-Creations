export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 right-[-5%] h-[520px] w-[520px] rounded-full bg-amber-400/20 blur-[160px]" />
      <div className="absolute top-[25%] -left-40 h-[520px] w-[520px] rounded-full bg-yellow-200/10 blur-[180px]" />
      <div className="absolute bottom-[-30%] right-[10%] h-[600px] w-[600px] rounded-full bg-amber-300/10 blur-[200px]" />
      <div className="absolute inset-0 bg-grid bg-[length:140px_140px] opacity-30" />
      <div className="absolute inset-0 bg-hero-glow" />
    </div>
  );
}
