import NavAccordion from "./navbar-accordion";
import Login from "./login";
import { navigationItems } from "@/components/navigationData";

const MobileNavbar = () => {
  return (
    <nav className="w-full h-auto max-w-md mx-auto mt-2 items-center bg-white rounded-lg shadow-lg">
      {Object.entries(navigationItems).map(([key, items]) => (
        <NavAccordion
          key={key}
          title={key.replace(/([A-Z])/g, " $1").trim()}
          items={items.map((item) => ({
            ...item,
            icon: item.icon,
          }))}
        />
      ))}
      <div className="p-3 text-black">
        <Login />
      </div>
    </nav>
  );
};

export default MobileNavbar;
