import { HashRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/menu"
import HomePage from "./pages/home-page"
import BlogPage from "./pages/blog-page"
import ProfilePage from "./pages/profile-page"
import BlogPost from "./components/blog-page/blog-post"

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
