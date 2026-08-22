import { lazy } from "react";

export const LazyMainLayout = lazy(() => import('@/widgets/mainLayout/MainLayout'));
export const LazyBusesPage = lazy(() => import('@/pages/busesPage/ui/BusesPage'));
export const LazyHotelPage = lazy(() => import('@/pages/hotelsPage/ui/HotelPage'));
export const LazySummaryPage = lazy(() => import('@/pages/summaryPage/ui/SummaryPage'));
export const LazyPage404 = lazy(() => import('@/pages/page404/ui/Page404'));
export const LazyErrorPage = lazy(() => import('@/pages/ErrorPage/ErrorPage'));