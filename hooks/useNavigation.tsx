"use client";

import { usePathname } from "next/navigation";

interface NavigationHook {
  getLinkClasses: (href: string, baseClasses?: string) => string;
  getDropdownLinkClasses: (href: string, baseClasses?: string) => string;
  pathname: string;
}

export function useNavigation(): NavigationHook {
  const pathname = usePathname();

  const getLinkClasses = (
    href: string,
    baseClasses = "block py-1 hover:text-gray-300"
  ) => {
    const isActive =
      href === "/"
        ? pathname === "/"
        : pathname === href ||
          pathname.startsWith(href.replace(/\/$/, "") + "/");
    return `${baseClasses} ${
      isActive ? "text-yellow-400 font-semibold" : "text-white"
    }`;
  };

  const getDropdownLinkClasses = (
    href: string,
    baseClasses = "block px-4 py-2 hover:bg-secondary-600"
  ) => {
    const isActive = pathname === href;
    return `${baseClasses} ${
      isActive ? "bg-secondary-600 text-brand-500 font-medium" : "text-gray-700"
    }`;
  };

  return { getLinkClasses, getDropdownLinkClasses, pathname };
}
