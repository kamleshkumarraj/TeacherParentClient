import { Outlet } from "react-router-dom"
import Header from "./components/reusable/Header"
import Footer from "./components/reusable/Footer"

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
