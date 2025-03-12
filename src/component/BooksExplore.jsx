export default function BooksExplore() {
    return (
      <div className="w-full  flex justify-center py-12 px-6">
        <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="max-w-lg w-full text-center md:text-left">
            <span className="text-sm font-semibold text-[#B85C38] border border-[#B85C38] px-3 py-1 rounded-full">
              DEEPEN YOUR CONNECTION
            </span>
            <h2 className="text-3xl font-bold text-black mt-4">Explore our books.</h2>
            <p className="mt-4 text-gray-700">
              Through engaging narratives and meticulous analysis of the linguistic,
              thematic, and spiritual dimensions of the Quran, these books aim to
              deepen your connection with Allah by enriching your understanding of
              His divine message.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800">
              Visit our store →
            </button>
          </div>
  
          {/* Big Image Only */}
          <div className="flex justify-center w-full md:w-auto">
            <img
              src="https://bayyinah.com/wp-content/uploads/2024/11/available-to-buy-big.webp"
              alt="Available Book"
              className="w-48 md:w-64 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  