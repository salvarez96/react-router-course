import { HashRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/menu"
import BlogPage from "./pages/blog-page"
import HomePage from "./pages/home-page"
import ProfilePage from "./pages/profile-page"

function App() {

  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
