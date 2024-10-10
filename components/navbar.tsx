import React from "react";
import { cn } from "@/lib/utils/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { FaPhone, FaSms, FaWhatsapp, FaUserAlt } from "react-icons/fa";
import { PhoneOutgoingIcon, ShieldPlus } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#000000]">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Bulk Marketing */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white hover:text-[#FFD700]">
              Bulk Marketing
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <ListItem
                  title="Bulk Voice Call"
                  href="/bulk-voice-call"
                  icon={<FaPhone className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Automate calls to reach large audiences in seconds.
                </ListItem>
                <ListItem
                  title="Bulk WhatsApp"
                  href="/bulk-whatsapp"
                  icon={<FaWhatsapp className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Send mass WhatsApp messages directly to your customers.
                </ListItem>
                <ListItem
                  title="Bulk SMS"
                  href="/bulk-sms"
                  icon={<FaSms className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Efficiently send thousands of SMS messages with a click.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Calling Solutions */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white hover:text-[#FFD700]">
              Calling Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[350px] p-2 ">
                <ListItem
                  title="Complete Call Management"
                  href="/complete-call-management"
                  icon={<PhoneOutgoingIcon className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Complete call management for your every need.
                </ListItem>
                {/* <ListItem
                  title="Outbound Calling"
                  href="/outbound-calling"
                  icon={<PhoneOutgoingIcon className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Make efficient outbound calls with a click.
                </ListItem>
                <ListItem
                  title="Inbound Calling"
                  href="/inbound-calling"
                  icon={<PhoneIncomingIcon className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Manage inbound calls with ease.
                </ListItem> */}
                {/* <ListItem
                  title="Click To Call"
                  href="/click-to-call"
                  icon={<FaPhone className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Automate calls to reach large audiences in seconds.
                </ListItem> */}
                {/* <ListItem
                  title="Call Masking"
                  href="/call-masking"
                  icon={<FaWhatsapp className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Send mass WhatsApp messages directly to your customers.
                </ListItem> */}
                {/* <ListItem
                  title="Dialer"
                  href="/dialer"
                  icon={<FaPhone className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Automate or Mannual calls to reach large audiences in seconds.
                </ListItem> */}
                {/* <ListItem
                  title="Call Tracking"
                  href="/call-tracking"
                  icon={<FaCloud className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Track calls throughout your organization.
                </ListItem> */}
                {/* <ListItem
                  title="Call Reports"
                  href="/call-reports"
                  icon={<FaRobot className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Get detailed reports and insights on business calls for
                  improved management.
                </ListItem> */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* IVR */}
          <NavigationMenuItem>
            {/* <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-white hover:text-[#FFD700]"
                )}
              >
                IVR
              </NavigationMenuLink>
            </Link> */}
            <NavigationMenuTrigger className="text-white text-md  hover:text-[#FFD700]">
              IVR
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid p-2 md:w-[400px] lg:w-[500px]">
                {/* <ListItem
                  title="10 Digit IVR"
                  href="/ivr/10-digit-ivr"
                  icon={<FaPhone className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Automate calls to reach large audiences in seconds.
                </ListItem>
                <ListItem
                  title="Toll Free IVR"
                  href="/ivr/toll-free-ivr"
                  icon={<FaPhone className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Automate calls to reach large audiences in seconds.
                </ListItem> */}
                <ListItem
                  title="IVR Solutions"
                  href="/ivr"
                  icon={<FaPhone className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Advanced IVR for your business needs.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Other Services */}
          {/* <NavigationMenuItem> */}
          {/* <NavigationMenuTrigger className="text-white hover:text-[#FFD700]">
              Other Services
            </NavigationMenuTrigger> */}
          {/* <NavigationMenuContent> */}
          {/* <ul className="grid gap-3  p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2"> */}
          {/* <ListItem
                  title="AI Powered Solutions"
                  href="/ai-solutions"
                  icon={<FaRobot className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Leverage AI to enhance your communication workflows.
                </ListItem>
                <ListItem
                  title="CRM Integration"
                  href="/crm-integration"
                  icon={<FiSettings className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Seamlessly integrate with your CRM systems.
                </ListItem> */}
          {/* <ListItem
                  title="Customized Solution"
                  href="/customized-solution"
                  icon={<FaSms className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Get customized solutions tailored to your business needs.
                </ListItem> */}
          {/* <ListItem
                  title="API Integration"
                  href="/api-integration"
                  icon={<FaCloud className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Integrate with your existing systems seamlessly.
                </ListItem> */}
          {/* </ul> */}
          {/* </NavigationMenuContent> */}
          {/* </NavigationMenuItem> */}

          {/* Documentation Link */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                navigationMenuTriggerStyle(),
                "text-white hover:text-[#FFD700]"
              )}
            >
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3  p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <ListItem
                  title="About Us"
                  href="/about"
                  icon={<FaUserAlt className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Learn more about our company values and mission.
                </ListItem>
                <ListItem
                  title="Privacy Policy"
                  href="/privacy-policy"
                  icon={<ShieldPlus className="h-[1.5rem] w-[1.5rem]" />}
                >
                  Read about our privacy and security policies.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
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
            "block select-none space-y-2  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#dad8d8]",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-[#f8e67e]">
            {icon}
            <div className=" text-black font-medium leading-none hover:text-[#FFD700]">
              {title}
            </div>
          </div>
          <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
