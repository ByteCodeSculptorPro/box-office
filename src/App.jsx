import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './Components/MainLayout';
import Show from './pages/Show';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>
          <Route path="/show/:showId" element={<Show />} />

          <Route path="*" element={<div>Not found</div>} />

          {/* <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route>
          <Route element={<PageLayout />}>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/tos" element={<Tos />} />
          </Route>
          <Route path="contact-us" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
