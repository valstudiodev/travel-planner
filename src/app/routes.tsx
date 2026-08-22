import MainLayout from "@/widgets/mainLayout/MainLayout"
import { Suspense } from "react"
import { createBrowserRouter } from "react-router"
import { LazyBusesPage, LazyHotelPage, LazyPage404, LazySummaryPage } from "./lazy-pages"
import Loading from "@/shared/ui/loading/Loading"
import ErrorPage from "@/pages/ErrorPage/ErrorPage"

export const routes = [
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        id: 'buses-page',
        element: (
          <Suspense fallback={<Loading />}>
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
          <Suspense fallback={<Loading />}>
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
          <Suspense fallback={<Loading />}>
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
      {
        path: '*',
        id: 'page-404',
        element: (
          <Suspense>
            <LazyPage404 />
          </Suspense>
        ),
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
})

export default router
