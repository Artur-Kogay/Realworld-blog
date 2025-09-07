import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "@/widgets";
import { Spinner } from "@/shared";

const Layout = () => {
  return (
    <>
        <Header />
        <main>
            <Suspense fallback={<Spinner />}>
                <Outlet />
            </Suspense>
        </main>
    </>
  )
}

export default Layout