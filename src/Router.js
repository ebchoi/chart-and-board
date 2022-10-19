import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Board, Detail } from './pages/_index.pages';
import { Layout } from './containers/_index.containers';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/:boardId" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
