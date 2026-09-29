import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Faculty from './pages/Faculty'
import Resources from './pages/Resources'
import Internships from './pages/Internships'
import Projects from './pages/Projects'
import Publication from './pages/Publication'
import Notice from './pages/Notice'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Attendance from './pages/Attendance'
import Certificates from './pages/Certificates'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="min-h-screen bg-white flex flex-col pl-14 md:pl-16">
        <ScrollToTop />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:slug" element={<Faculty />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/attendance"
              element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/certificates"
              element={
                <ProtectedRoute>
                  <Certificates />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
