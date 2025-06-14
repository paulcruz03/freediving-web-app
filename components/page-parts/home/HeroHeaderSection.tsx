
export function HeroHeaderSection() {
  return (
    <section
      style={{ backgroundImage: "url('https://placehold.co/600x400')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="relative flex items-center w-full py-50 px-4 lg:px-20"
    >
      <div className="text-black relative text-left w-full max-w-lg z-10 grid gap-4">
        <h2 className="font-afacad text-6xl font-bold">Explore Freediving Like Never Before</h2>
        <p className="font-rubik text-lg">Discover the best freediving schools, instructors, and dive spots across the Philippines. Your adventure starts here, where the ocean awaits!</p>
      </div>
    </section>
  )
}