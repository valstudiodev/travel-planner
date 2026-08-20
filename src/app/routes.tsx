import MainLayout from "@/widgets/mainLayout/MainLayout"
import { Suspense } from "react"
import { createBrowserRouter } from "react-router"
import { LazyBusesPage, LazyHotelPage, LazySummaryPage } from "./lazy-pages"

export const routes = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        id: 'buses-page',
        element: (
          <Suspense>
            <LazyBusesPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Buses',
          menuId: 'buses',
          breadcrumbs: true,
        }
      },
      {
        path: 'hotel-page',
        id: 'hotel-page',
        element: (
          <Suspense>
            <LazyHotelPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Hotels',
          menuId: 'hotels',
          breadcrumbs: true,
        }
      },
      {
        path: 'summary-page',
        id: 'summary-page',
        element: (
          <Suspense>
            <LazySummaryPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Summary',
          menuId: 'summary',
          breadcrumbs: true,
        }
      },
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
})

export default router
