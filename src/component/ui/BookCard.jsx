export default function BookCard({ title, description, image, link }) {
    return (
      <div className="bg-[#F8E8DA] p-6 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Book Details */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-[#3B1E1E]">{title}</h2>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
          <div className="mt-4">
            <a
              href={link}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-[#9A3412] hover:bg-[#7A3412] transition text-white"
            >
              ڈاؤن لوڈ کریں →
            </a>
          </div>
        </div>
  
        {/* Book Image */}
        <div className="w-36 h-52">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
  