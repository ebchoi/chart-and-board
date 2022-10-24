import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Board, Detail, Table } from './pages/_index.pages';
import { Layout } from './containers/_index.containers';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/:boardId" element={<Detail />} />
          <Route path="/table" element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
