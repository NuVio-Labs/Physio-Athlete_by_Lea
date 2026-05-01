import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import OnepagerPage from './pages/OnepagerPage'
import ImpressumPage from './pages/ImpressumPage'

export default function App() {
  return (
    <BrowserRouter basename="/Physio-Athlete_by_Lea">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main id="main-content">
                <OnepagerPage />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/impressum"
          element={
            <>
              <Header minimal />
              <main id="main-content" className="pt-24 pb-20">
                <ImpressumPage />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/datenschutz"
          element={
            <>
              <Header minimal />
              <main id="main-content" className="pt-24 pb-20">
                <ImpressumPage datenschutz />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
