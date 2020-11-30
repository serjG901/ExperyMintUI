import React, { useContext, useEffect, useState } from "react";

const ThemeColorContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeColorContext).theme;
};

export const useThemeSet = () => {
  return useContext(ThemeColorContext).setCurrentTheme;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage.getItem("theme") || "red"
  );

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeColorContext.Provider
      value={{ setCurrentTheme, theme: themeColorStyle[currentTheme] }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
};

export const themeColorStyle = {
  red: {
    color: "red",
    sample: "bg-red-500",
    bodyColor: "bg-red-300",
    colorTextLogo: "text-red-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-red-200",
    bgLink: "bg-red-300",
    bgOtherUserClose: "bg-red-200",
    bgOtherUserOpen: "bg-red-400",
    hbgOtherUser: "hover:bg-red-500",
    bgIncomingMessage: "bg-red-300",
    bgOutgoingMessage: "bg-red-500",
    bgButton: "bg-red-500",
    hbgButton: "hover:bg-red-700",
    bgApp: "bg-gradient-to-b from-red-500 via-red-600 to-red-300"
  },
  orange: {
    color: "orange",
    sample: "bg-orange-500",
    bodyColor: "bg-orange-300",
    colorTextLogo: "text-orange-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-orange-200",
    bgLink: "bg-orange-300",
    bgOtherUserClose: "bg-orange-200",
    bgOtherUserOpen: "bg-orange-400",
    hbgOtherUser: "hover:bg-orange-500",
    bgIncomingMessage: "bg-orange-300",
    bgOutgoingMessage: "bg-orange-500",
    bgButton: "bg-orange-500",
    hbgButton: "hover:bg-orange-700",
    bgApp: "bg-gradient-to-b from-orange-500 via-orange-600 to-orange-300"
  },
  yellow: {
    color: "yellow",
    sample: "bg-yellow-500",
    bodyColor: "bg-yellow-300",
    colorTextLogo: "text-yellow-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-yellow-200",
    bgLink: "bg-yellow-300",
    bgOtherUserClose: "bg-yellow-200",
    bgOtherUserOpen: "bg-yellow-400",
    hbgOtherUser: "hover:bg-yellow-500",
    bgIncomingMessage: "bg-yellow-300",
    bgOutgoingMessage: "bg-yellow-500",
    bgButton: "bg-yellow-500",
    hbgButton: "hover:bg-yellow-700",
    bgApp: "bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-300"
  },
  green: {
    color: "green",
    sample: "bg-green-500",
    bodyColor: "bg-green-300",
    colorTextLogo: "text-green-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-green-200",
    bgLink: "bg-green-300",
    bgOtherUserClose: "bg-green-200",
    bgOtherUserOpen: "bg-green-400",
    hbgOtherUser: "hover:bg-green-500",
    bgIncomingMessage: "bg-green-300",
    bgOutgoingMessage: "bg-green-500",
    bgButton: "bg-green-500",
    hbgButton: "hover:bg-green-700",
    bgApp: "bg-gradient-to-b from-green-500 via-green-600 to-green-300"
  },
  blue: {
    color: "blue",
    sample: "bg-blue-500",
    bodyColor: "bg-blue-300",
    colorTextLogo: "text-blue-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-blue-200",
    bgLink: "bg-blue-300",
    bgOtherUserClose: "bg-blue-200",
    bgOtherUserOpen: "bg-blue-400",
    hbgOtherUser: "hover:bg-blue-500",
    bgIncomingMessage: "bg-blue-300",
    bgOutgoingMessage: "bg-blue-500",
    bgButton: "bg-blue-500",
    hbgButton: "hover:bg-blue-700",
    bgApp: "bg-gradient-to-b from-blue-500 via-blue-600 to-blue-300"
  },
  indigo: {
    color: "indigo",
    sample: "bg-indigo-500",
    bodyColor: "bg-indigo-300",
    colorTextLogo: "text-indigo-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-indigo-200",
    bgLink: "bg-indigo-300",
    bgOtherUserClose: "bg-indigo-200",
    bgOtherUserOpen: "bg-indigo-400",
    hbgOtherUser: "hover:bg-indigo-500",
    bgIncomingMessage: "bg-indigo-300",
    bgOutgoingMessage: "bg-indigo-500",
    bgButton: "bg-indigo-500",
    hbgButton: "hover:bg-indigo-700",
    bgApp: "bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-300"
  },
  purple: {
    color: "purple",
    sample: "bg-purple-500",
    bodyColor: "bg-purple-300",
    colorTextLogo: "text-purple-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-purple-200",
    bgLink: "bg-purple-300",
    bgOtherUserClose: "bg-purple-200",
    bgOtherUserOpen: "bg-purple-400",
    hbgOtherUser: "hover:bg-purple-500",
    bgIncomingMessage: "bg-purple-300",
    bgOutgoingMessage: "bg-purple-500",
    bgButton: "bg-purple-500",
    hbgButton: "hover:bg-purple-700",
    bgApp: "bg-gradient-to-b from-purple-500 via-purple-600 to-purple-300"
  },
  pink: {
    color: "pink",
    sample: "bg-pink-500",
    bodyColor: "bg-pink-300",
    colorTextLogo: "text-pink-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-pink-200",
    bgLink: "bg-pink-300",
    bgOtherUserClose: "bg-pink-200",
    bgOtherUserOpen: "bg-pink-400",
    hbgOtherUser: "hover:bg-pink-500",
    bgIncomingMessage: "bg-pink-300",
    bgOutgoingMessage: "bg-pink-500",
    bgButton: "bg-pink-500",
    hbgButton: "hover:bg-pink-700",
    bgApp: "bg-gradient-to-b from-pink-500 via-pink-600 to-pink-300"
  },
  gray: {
    color: "gray",
    sample: "bg-gray-500",
    bodyColor: "bg-gray-300",
    colorTextLogo: "text-gray-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-gray-200",
    bgLink: "bg-gray-300",
    bgOtherUserClose: "bg-gray-200",
    bgOtherUserOpen: "bg-gray-400",
    hbgOtherUser: "hover:bg-gray-500",
    bgIncomingMessage: "bg-gray-300",
    bgOutgoingMessage: "bg-gray-500",
    bgButton: "bg-gray-500",
    hbgButton: "hover:bg-gray-700",
    bgApp: "bg-gradient-to-b from-gray-500 via-gray-600 to-gray-300"
  },
  teal: {
    color: "teal",
    sample: "bg-teal-500",
    bodyColor: "bg-teal-300",
    colorTextLogo: "text-teal-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-teal-200",
    bgLink: "bg-teal-300",
    bgOtherUserClose: "bg-teal-200",
    bgOtherUserOpen: "bg-teal-400",
    hbgOtherUser: "hover:bg-teal-500",
    bgIncomingMessage: "bg-teal-300",
    bgOutgoingMessage: "bg-teal-500",
    bgButton: "bg-teal-500",
    hbgButton: "hover:bg-teal-700",
    bgApp: "bg-gradient-to-b from-teal-500 via-teal-600 to-teal-300"
  },
  dark: {
    color: "dark",
    sample: "bg-gray-900",
    bodyColor: "bg-gray-900",
    colorTextLogo: "text-black",
    colorTextData: "text-white",
    colorTextLabel: "text-gray-100",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-400",
    bgTextBlock: "bg-gray-700",
    bgLink: "bg-gray-800",
    bgOtherUserClose: "bg-gray-600",
    bgOtherUserOpen: "bg-gray-700",
    hbgOtherUser: "hover:bg-gray-800",
    bgIncomingMessage: "bg-gray-500",
    bgOutgoingMessage: "bg-gray-800",
    bgButton: "bg-gray-800",
    hbgButton: "hover:bg-gray-700",
    bgApp: "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
  },
  light: {
    color: "light",
    sample: "bg-gray-100",
    bodyColor: "bg-gray-100",
    colorTextLogo: "text-white",
    colorTextData: "text-black",
    colorTextLabel: "text-gray-900",
    colorTextMain: "text-black",
    colorTextOtherUser: "text-gray-400",
    colorTextExplane: "text-gray-600",
    bgTextBlock: "bg-white",
    bgLink: "bg-gray-200",
    bgOtherUserClose: "bg-white",
    bgOtherUserOpen: "bg-gray-100",
    hbgOtherUser: "hover:bg-gray-200",
    bgIncomingMessage: "bg-gray-200",
    bgOutgoingMessage: "bg-white",
    bgButton: "bg-white",
    hbgButton: "hover:bg-gray-200",
    bgApp: "bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100"
  },
  bee: {
    color: "bee",
    sample: "bg-gradient-to-b from-black via-yellow-300 to-black",
    bodyColor: "bg-black",
    colorTextLogo: "text-yellow-300",
    colorTextData: "text-yellow-700",
    colorTextLabel: "text-gray-100",
    colorTextMain: "text-yellow-700",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-500",
    bgTextBlock: "bg-yellow-200",
    bgLink: "bg-yellow-300",
    bgOtherUserClose: "bg-yellow-300",
    bgOtherUserOpen: "bg-yellow-400",
    hbgOtherUser: "hover:bg-yellow-500",
    bgIncomingMessage: "bg-yellow-200",
    bgOutgoingMessage: "bg-yellow-300",
    bgButton: "bg-yellow-300",
    hbgButton: "hover:bg-yellow-500",
    bgApp: "bg-black"
  },
  glam: {
    color: "glam",
    sample: "bg-gradient-to-b from-rose-500 via-fuchsia-200 to-rose-500",
    bodyColor: "bg-rose-500",
    colorTextLogo: "text-fuchsia-200",
    colorTextData: "text-white",
    colorTextLabel: "text-gray-100",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-500",
    bgTextBlock: "bg-fuchsia-200",
    bgLink: "bg-fuchsia-300",
    bgOtherUserClose: "bg-fuchsia-300",
    bgOtherUserOpen: "bg-fuchsia-400",
    hbgOtherUser: "hover:bg-fuchsia-500",
    bgIncomingMessage: "bg-fuchsia-200",
    bgOutgoingMessage: "bg-fuchsia-300",
    bgButton: "bg-fuchsia-300",
    hbgButton: "hover:bg-fuchsia-500",
    bgApp: "bg-rose-500"
  },
  fruit: {
    color: "fruit",
    sample: "bg-gradient-to-b from-amber-700 via-lime-600 to-amber-700",
    bodyColor: "bg-amber-700",
    colorTextLogo: "text-lime-600",
    colorTextData: "text-amber-300",
    colorTextLabel: "text-gray-200",
    colorTextMain: "text-amber-300",
    colorTextOtherUser: "text-white",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-lime-500",
    bgLink: "bg-lime-600",
    bgOtherUserClose: "bg-lime-600",
    bgOtherUserOpen: "bg-lime-700",
    hbgOtherUser: "hover:bg-lime-800",
    bgIncomingMessage: "bg-lime-500",
    bgOutgoingMessage: "bg-lime-600",
    bgButton: "bg-lime-600",
    hbgButton: "hover:bg-lime-800",
    bgApp: "bg-amber-700"
  },
  mint: {
    color: "mint",
    sample: "bg-gradient-to-b from-emerald-300 via-cyan-200 to-emerald-300",
    bodyColor: "bg-emerald-300",
    colorTextLogo: "text-cyan-200",
    colorTextData: "text-cyan-600",
    colorTextLabel: "text-gray-100",
    colorTextMain: "text-cyan-600",
    colorTextOtherUser: "text-white",
    colorTextExplane: "text-gray-500",
    bgTextBlock: "bg-cyan-200",
    bgLink: "bg-cyan-300",
    bgOtherUserClose: "bg-cyan-300",
    bgOtherUserOpen: "bg-cyan-400",
    hbgOtherUser: "hover:bg-cyan-500",
    bgIncomingMessage: "bg-cyan-200",
    bgOutgoingMessage: "bg-cyan-300",
    bgButton: "bg-cyan-300",
    hbgButton: "hover:bg-cyan-500",
    bgApp: "bg-emerald-300"
  }
};
