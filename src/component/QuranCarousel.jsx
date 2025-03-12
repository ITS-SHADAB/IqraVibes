import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const QuranCarousel = () => {
  return (
    <div className="relative z-10 mt-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full max-w-6xl mx-auto h-auto"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-[#FAEBDC] p-6 rounded-lg h-full">
            {/* Text Section */}
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#6B100E] leading-tight">
                Connect Directly to the Words of Allah Beyond Translation
              </h2>
              <p className="text-md md:text-lg text-[#6B100E] italic font-medium border-l-4 border-[#C42720] pl-4">
                "جب دل قرآن سے جُڑ جائے تو الفاظ معنی کھو دیتے ہیں، <br />
                اور روح خود کلام کرنے لگتی ہے۔"
              </p>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
              <img
                src="https://bayyinah.com/wp-content/themes/vl-theme-bayyinah/assets/images/quran-pulse-quiz-slide-img.png"
                alt="Quran Image"
                className="rounded-lg w-full max-w-xs md:max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-[#FAEBDC] p-6 rounded-lg h-full">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#6B100E]">
                The Quran Pulse Quiz
              </h2>
              <p className="text-md md:text-lg">Check the Heartbeat of Your Quran Connection.</p>
              <button className="mt-4 px-6 py-2 bg-[#C42720] text-white rounded-lg text-lg transition hover:bg-[#A31F1A]">
                Take the quiz →
              </button>
            </div>
            {/* Image Section (Optional - Can be added here if needed) */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default QuranCarousel;
