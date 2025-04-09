import React from "react";
import { cn } from "@/lib/utils/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  FaPhone,
  FaSms,
  FaWhatsapp,
  FaUserAlt,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import { PhoneOutgoingIcon, ShieldPlus } from "lucide-react";
import { navigationItems, NavigationItem } from "@/components/navigationData";

const iconMap = {
  FaPhone,
  FaSms,
  FaWhatsapp,
  FaUserAlt,
  FaCloud,
  FaRobot,
  PhoneOutgoingIcon,
  ShieldPlus,
};

const Navbar = () => {
  return (
    <nav className=" text-white shadow-lg">
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center space-x-4">
          {Object.entries(navigationItems).map(([key, items]) => (
            <NavigationMenuItem key={key}>
              <NavigationMenuTrigger className="text-md hover:text-yellow-300 transition-colors duration-300">
                {key}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white text-black shadow-md rounded-lg mt-2">
                <ul
                  className="grid gap-3 p-4 auto-rows-fr"
                  style={{
                    gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
                  }}
                >
                  {items.map((item: NavigationItem) => {
                    const IconComponent =
                      iconMap[item.icon as keyof typeof iconMap];
                    return (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={
                          IconComponent ? (
                            <IconComponent className="h-[1.5rem] w-[1.5rem] text-yellow-500" />
                          ) : null
                        }
                      >
                        {item.description}
                      </ListItem>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {icon}
            <div className="text-black font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-1 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
