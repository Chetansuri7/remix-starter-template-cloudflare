export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }} />
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }} />
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '6s', animationDuration: '9s' }} />
      
      {/* Floating squares */}
      <div className="absolute top-60 left-1/4 w-2 h-2 bg-accent/20 rotate-45 animate-float" style={{ animationDelay: '1s', animationDuration: '11s' }} />
      <div className="absolute top-80 right-1/3 w-3 h-3 bg-accent/15 rotate-45 animate-float" style={{ animationDelay: '3s', animationDuration: '13s' }} />
    </div>
  );
}