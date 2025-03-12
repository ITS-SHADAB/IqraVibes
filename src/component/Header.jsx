import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const menuItems = [
    { name: "سرورق", path: "/home", submenu: [{ name: "Sub 1", path: "/home/sub1" }, { name: "Sub 2", path: "/home/sub2" }] },
    { name: "تعارف", path: "/about", submenu: [{ name: "Team", path: "/about/team" }, { name: "Vision", path: "/about/vision" }] },
    { name: "بینات", path: "/events", submenu: [{ name: "Upcoming", path: "/events/upcoming" }, { name: "Past", path: "/events/past" }] },
    { name: "دعائیں", path: "/articles" },
    { name: "کتابیں", path: "/store" },
  ];

  return (
    <header className="relative z-[999] bg-[#FCEFE4] p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <div className="w-8 h-8 bg-[#9A3412] flex items-center justify-center rounded-full shadow-md">
            <span className="text-white text-base font-medium">B</span>
          </div>
          <h2 className="text-lg font-medium text-[#111111] tracking-wide">RAGIB HASAN</h2>
        </div>

        {/* Centered Bismillah */}
        <div className="text-center flex-grow hidden md:block">
          <h3 className="text-lg font-semibold text-[#9A3412]">
            بِسْمِ ٱللَّٰهِ الرَّحْمَٰنِ الرَّحِيمِ
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-[#111111]">
          {menuItems.map((item, index) => (
            <li
              key={item.name}
              className="relative cursor-pointer transition-all duration-300 hover:text-[#9A3412]"
              onMouseEnter={() => setOpenSubmenu(index)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <Link to={item.path}>{item.name}</Link>
              {item.submenu && openSubmenu === index && (
                <ul className="absolute left-0 top-full bg-white shadow-lg rounded-md py-2 w-40 z-[999] border border-gray-200">
                  {item.submenu.map((sub) => (
                    <li key={sub.name} className="px-4 py-2 hover:bg-[#FCEFE4]">
                      <Link to={sub.path}>{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5 text-[#111111]" /> : <Menu className="w-5 h-5 text-[#111111]" />}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`relative z-[999] transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="md:hidden mt-2 bg-[#FCEFE4] rounded-lg shadow-md">
          <ul className="py-2 px-4 text-sm font-medium text-[#111111]">
            {menuItems.map((item) => (
              <li key={item.name} className="relative py-2 cursor-pointer">
                <Link to={item.path} onClick={() => setIsOpen(false)}>{item.name}</Link>
                {item.submenu && (
                  <ul className="ml-4 mt-1 border-l pl-2 border-[#9A3412]">
                    {item.submenu.map((sub) => (
                      <li key={sub.name} className="py-1">
                        <Link to={sub.path} onClick={() => setIsOpen(false)}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
