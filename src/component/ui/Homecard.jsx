export default function Card() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 justify-center">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-[#3B1E1E] text-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:bg-[#EADBC8] hover:text-[#3B1E1E] cursor-pointer border border-[#EADBC8] flex flex-col items-center"
          >
            <div className="p-4 bg-white rounded-full text-[#3B1E1E] shadow-md">
              📖
            </div>
            <h3 className="text-xl font-bold mt-3">کتابیں</h3>
            <p className="mt-3 text-base text-center">
              علم کے سمندر میں غوطہ لگائیں اور بہترین کتب کا مطالعہ کریں۔
            </p>
          </div>
        ))}
      </div>
    );
  }
  