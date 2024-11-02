import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './Components/MainLayout';
import Show from './pages/Show';
import { GlobalTheme } from './Theme';
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <GlobalTheme>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/starred" element={<Starred />} />
              </Route>
              <Route path="/shows/:showId" element={<Show />} />
              <Route path="*" element={<div>Not found</div>} />
            </Routes>
          </BrowserRouter>
        </GlobalTheme>
      </QueryClientProvider>
    </div>
  );
}

export default App;
