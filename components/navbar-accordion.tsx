import React, { useState } from "react"; // To handle toggle state
import { FaPhone, FaWhatsapp, FaSms, FaCloud, FaRobot } from "react-icons/fa";

const iconMap = {
  FaPhone,
  FaSms,
  FaWhatsapp,
  FaCloud,
  FaRobot,
};
const NavAccordion = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string; icon: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-600">
      <button
        className="w-full flex justify-between items-center py-3 px-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-gray-900 text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="pl-6 pb-3">
          {items.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <a
                href={item.href}
                key={item.title}
                className="py-1 flex items-center space-x-2"
              >
                {IconComponent ? (
                  <IconComponent className="h-5 w-5 text-[#eade3cf6]" />
                ) : null}
                <span className="text-md text-gray-900">{item.title}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavAccordion;
