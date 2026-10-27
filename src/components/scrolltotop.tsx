import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the top of the page every time the route changes,
// so every page opens from the top no matter which link was clicked.
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
