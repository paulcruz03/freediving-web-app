'use client';

export function HeroSection() {
  return (
    <section
      style={{ backgroundImage: "url('https://placehold.co/600x400')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="hero-section overflow-hidden relative flex items-center w-full py-50 px-4 lg:px-20"
    >
      <div className="text-black relative text-left w-full max-w-lg z-10 grid gap-4">
        <h2 className="font-afacad text-5xl font-bold">Explore Freediving Like Never Before</h2>
        <p className="font-rubik text-lg">Discover the best freediving schools, instructors, and dive spots across the Philippines. Your adventure starts here, where the ocean awaits!</p>
        <div className="flex gap-4">
          <button className="p-2 bg-white text-black rounded-lg border border-slate-100">Learn More</button>
          <button className="p-2 text-white rounded-lg border border-slate-100">Sign up</button>
        </div>
      </div>
    </section>
  )
}