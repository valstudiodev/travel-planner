import ThemeToggle from "@/shared/ui/themeToggle/ThemeToggle";
import { SunMoon } from "lucide-react";
import '../model/headerPageStyle.scss'

function HeaderPage() {
  return (
    <header
      className="header-page
      py-5 px-3 text-2xl">
      <h2>TravelPlanner</h2>
      <ThemeToggle
        title="Switch theme"
        className="cursor-pointer
        rounded-full p-2"
      >
        <SunMoon
          size={30}
        />
      </ThemeToggle>
    </header>
  );
}

export default HeaderPage;