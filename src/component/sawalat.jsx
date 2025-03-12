export default function Swalat() {
    return (
      <div className="p-6 bg-[#FFF2E9]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* New Questions Section */}
          <div className="bg-[#FFEADA] text-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold border-b-2 border-[#EADBC8] pb-2 mb-4">نئے سوالات</h2>
            <div className="space-y-4">
              <div className="bg-[#EADBC8] text-black p-4 rounded-lg shadow-sm">
                <p className="text-lg font-semibold">تلاوت شروع کرنے سے قبل تعوذ پڑھنے کی حکمت</p>
                <p className="mt-2 text-sm">قرآن کریم کی تلاوت سے قبل تعوذ پڑھنے کی حکمت کیا ہے؟</p>
                <button className="mt-2 text-black font-semibold">تفصیل &lt;</button>
              </div>
            </div>
          </div>
  
          {/* Selected Questions Section */}
          <div className="bg-[#EADBC8] text-black p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">منتخب سوالات</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-[#FFEADA] text-black p-4 rounded-lg shadow-sm">
                  <p className="text-sm">سحر کے بعد فجر نہ پڑھ سکنے کے شرعی احکام</p>
                  <button className="mt-2 text-black font-semibold">تفصیل &lt;</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  