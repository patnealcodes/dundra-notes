import { Outlet } from "react-router-dom"
import { NavBar } from "../Navbar"

export function Layout() {
  return (
    <div>
      <NavBar />
      <section className="m-auto max-w-xl p-4">
        <Outlet />
      </section>
    </div>
  )
}