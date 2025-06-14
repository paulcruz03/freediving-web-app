import { FaRegCompass, FaPeopleArrows } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

export function FeatureSection() {
  return (
    <section className="bg-secondary relative flex flex-col items-center w-full py-4 px-4 lg:px-20 lg:py-30">
      <div className="lg:flex w-full items-start text-black relative text-left lg:mb-20 gap-20">
        <div className="text-black lg:w-1/2 relative text-left z-10 grid gap-4">
          <p className="font-rubik text-md">Explore</p>
          <h2 className="font-afacad lg:text-6xl text-3xl font-bold">Discover the Best Freediving Resources in the Philippines</h2>
        </div>
        <div className="text-black lg:w-1/2 relative text-left z-10 grid gap-4 mt-4 lg:mt-0">
          <p className="font-rubik text-md lg:text-lg">Our platform connects you with top freediving schools, stunning dive spots, and certified instructors across the Philippines. Whether you're a beginner or an experienced diver, you'll find everything you need to enhance your freediving journey. Dive into a world of adventure and knowledge with us!</p>
        </div>
      </div>
      <div className="lg:flex grid w-full items-start text-black relative text-left z-10 gap-10 mt-6 lg:mt-0">
        <div className="text-black lg:w-1/3 relative text-left z-10 grid gap-4">
          <FaMapLocationDot size={30} />
          <h2 className="font-afacad lg:text-4xl text-2xl font-bold">Comprehensive Directory of Freediving Schools</h2>
          <p className="font-rubik text-md lg:text-lg">Find schools offering a variety of courses..</p>
        </div>
        <div className="text-black lg:w-1/3 relative text-left z-10 grid gap-4">
          <FaRegCompass size={30} />
          <h2 className="font-afacad lg:text-4xl text-2xl font-bold">Explore Breathtaking Dive Spots in the Philippines</h2>
          <p className="font-rubik text-md lg:text-lg">Discover the best locations for your dives.</p>
        </div>
        <div className="text-black lg:w-1/3 relative text-left z-10 grid gap-4">
          <FaPeopleArrows size={30} />
          <h2 className="font-afacad lg:text-4xl text-2xl font-bold">Connect with Certified Freediving Instructors</h2>
          <p className="font-rubik text-md lg:text-lg">Learn from experienced professionals to enhance your skills.</p>
        </div>
      </div>
    </section>
  )
}