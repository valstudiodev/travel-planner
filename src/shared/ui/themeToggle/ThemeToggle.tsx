import useTheme from "@/app/providers/themeProvider/hooks";
import './style.scss'

interface ThemeToggleProps {
  title: string;
  className?: string;
  children: React.ReactNode
}

function ThemeToggle({
  title,
  className = '',
  children,
  ...props
}: ThemeToggleProps): React.JSX.Element {

  const { dispatch } = useTheme()

  return (
    <button
      {...props}
      type="button"
      className={`theme-toggle ${className}`}
      title={title}
      onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
    >
      {children}
    </button>
  );
}

export default ThemeToggle;