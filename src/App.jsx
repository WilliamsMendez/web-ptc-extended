// App.jsx
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Lenis from "lenis"
import ReactGA from "react-ga4"
import AnalyticsTracker from "./components/analytics/AnalyticsTracker"
import Router from "./Pages/Router"

export default function App() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith("/admin")

  useEffect(() => {
    ReactGA.initialize("G-3K09HY978C")
  }, [])

  useEffect(() => {
    if (isAdmin) return // 👈 no inicializa Lenis en rutas de admin

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [isAdmin])

  return (
    <>
      <AnalyticsTracker />
      <Router />
    </>
  )
}