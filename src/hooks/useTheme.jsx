import React, { useEffect, useState } from "react";

const getThemeFromLocal = () => {
  return localStorage.getItem("theme") || "light";
};

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState(getThemeFromLocal());

  const changeTheme = () => {
    setCurrentTheme((prev) => {
      return prev == "dark" ? "light" : "dark";
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);
  return { currentTheme, changeTheme };
}
