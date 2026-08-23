import ThemeToggle from "@/shared/ui/themeToggle/ThemeToggle";
import '../model/headerPageStyle.scss'

function HeaderPage() {
  return (
    <header
      className="header-page
      py-5 px-3 text-2xl">
      <h2>TravelPlanner</h2>
      <ThemeToggle
        title="Switch theme"
        className="text-surface cursor-pointer
        bg-primary rounded-2xl px-3 py-1"
      >
        Switch theme
      </ThemeToggle>
    </header>
  );
}

export default HeaderPage;