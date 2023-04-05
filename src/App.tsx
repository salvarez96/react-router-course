import { HashRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/menu/menu"
import HomePage from "./pages/home-page"
import BlogPage from "./pages/blog-page"
import ProfilePage from "./pages/profile-page"
import BlogPost from "./components/blog-page/blog-post"
import LoginPage from "./pages/login-page"
import LogoutPage from "./pages/logout-page"
import { AuthProvider } from "./auth/auth"

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
