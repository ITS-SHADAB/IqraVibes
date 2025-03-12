import BookCard from "./ui/BookCard";

export default function Books() {
  const books = [
    {
      title: "تعارف جامعہ",
      description:
        "بصائر و عبر (جلد دوم) : یہ کتاب درحقیقت ماہنامہ بینات کے لیے محدث العصرحضرت مولانا سید محمد یوسف بنوری رحمہ اللہ کے اداریوں اور مضامین کا مجموعہ ہے جس کو تین حصوں پر تقسیم کیا جاسکتا ہے: 1۔ مقالات علمیہ، 2۔ حالات حاضرہ، 3۔ وفیات۔ اس کی جمع و ترتیب کا کام حضرت کے ہونہار شاگرد مولانا ڈاکٹر حبیب اللہ مختار شہید رحمہ اللہ نے انجام دیا ہے۔",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrq5X6htK-t07az2KDuVp_8cFi2l3iXK3XA&s",
      link: "#",
    },
    {
      title: "دیگر کتابیں",
      description:" بصائر و عبر (جلد اول) : یہ کتاب درحقیقت ماہنامہ بینات کے لیے محدث العصرحضرت مولانا سید محمد یوسف بنوری رحمہ اللہ کے اداریوں اور مضامین کا مجموعہ ہے جس کو تین حصوں پر تقسیم کیا جاسکتا ہے: 1۔ مقالات علمیہ، 2۔ حالات حاضرہ، 3۔ وفیات۔ اس کی جمع و ترتیب کا کام حضرت کے ہونہار شاگرد مولانا ڈاکٹر حبیب اللہ مختار شہید رحمہ اللہ نے انجام دیا ہے۔",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*ym44_lq51W2wtJdQ",
      link: "#",
    },
  ];

  return (
    <div className="bg-[#FCEFE4] py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-6">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            description={book.description}
            image={book.image}
            link={book.link}
          />
        ))}
      </div>
    </div>
  );
}
