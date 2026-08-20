import { lazy } from "react";

export const LazyMainLayout = lazy(() => import('@/widgets/mainLayout/MainLayout'));
export const LazyBusesPage = lazy(() => import('@/pages/busesPage/BusesPage'));
export const LazyHotelPage = lazy(() => import('@/pages/hotelsPage/HotelPage'));
export const LazySummaryPage = lazy(() => import('@/pages/summaryPage/SummaryPage'));