import { routes } from "@/app/routes";
import { NavLink } from "react-router";


function MainMenu(): React.JSX.Element {
  const menuRoutes = routes[0].children?.filter(
    (route) => route.meta?.isInMenu
  )

  return (
    <nav className="main-menu">
      <ul className="main-menu__list">
        {menuRoutes.map((route) => {
          const path = route.index ? '/' : route.path

          return (
            <li
              key={route.id}
              className="main-menu__item"
            >
              <NavLink
                to={`${path}`}
                className={({ isActive }) => isActive ? 'is-active' : ''}
              >
                {route?.meta.title}
              </NavLink>
            </li>
          )
        })

        }
      </ul>
    </nav>
  );
}

export default MainMenu;