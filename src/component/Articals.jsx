import { useState } from 'react';

const categories = ['All', 'Arabic', 'Uncategorized'];

const articles = [
  {
    id: 1,
    title: 'Breaking the Chains of Doubt',
    image: 'https://via.placeholder.com/400',
    category: 'Uncategorized',
  },
  {
    id: 2,
    title: 'Finding Light in Chaos',
    image: 'https://via.placeholder.com/400',
    category: 'Arabic',
  },
  {
    id: 3,
    title: 'The Sound of Reflection',
    image: 'https://via.placeholder.com/400',
    category: 'Uncategorized',
  },
];

export default function OurArticles() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="bg-[#FCEFE4] min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-[#7A3412]">Our Articles</h1>
        <p className="mt-4 text-lg text-gray-700">
          Dive into Quran reflections, practical learning tips, and key
          takeaways designed to deepen your understanding.
        </p>
        {/* Category Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-md border ${
                selectedCategory === category
                  ? 'bg-[#7A3412] text-white'
                  : 'border-[#7A3412] text-[#7A3412]'
              } transition hover:bg-[#9A3412] hover:text-white`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="rounded-lg w-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-[#7A3412]">
              {article.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
