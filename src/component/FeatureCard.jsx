export default function FeatureCards() {
  return (
    <div className="bg-[#FCEFE4] py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="bg-[#3B1E1E] text-white p-6 rounded-2xl shadow-xl flex flex-col justify-between">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Start your journey <br /> through the Quran.
            </h2>
            <p className="mt-2 text-sm md:text-base opacity-80">
              Regardless of your age, busy schedule, or Arabic proficiency.
            </p>
          </div>
          {/* Button */}
          <div className="mt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm md:text-base bg-red-600 hover:bg-red-700 transition"
            >
              Learn online →
            </a>
          </div>
          {/* Image Section */}
          <div className="mt-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/11/16/27/islam-884825_1280.jpg"
              alt="Quran learning course"
              className="rounded-lg w-full h-auto max-h-[250px] object-cover"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#F8E8DA] p-6 rounded-2xl shadow-xl flex flex-col justify-between">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#7A3412] leading-snug">
              Experience our <br /> live events.
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Witness the transformative power of the Quran, led by Ustadh
              Nouman Ali Khan.
            </p>
          </div>
          {/* Button */}
          <div className="mt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm md:text-base bg-[#9A3412] hover:bg-[#7A3412] transition text-white"
            >
              View upcoming events →
            </a>
          </div>
          {/* Image Section */}
          <div className="mt-4">
            <img
              src="https://i.pinimg.com/736x/ac/fd/a6/acfda656e501233bbc763da5a0ccacad.jpg"
              alt="Live event by Ustadh Nouman Ali Khan"
              className="rounded-lg w-full h-auto max-h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
