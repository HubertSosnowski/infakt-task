import { Routes, Route } from 'react-router-dom'

import Root from "./components/Root/Root";
import Home from './pages/Home/Home';
import Accountants from './pages/Accountants/Accountants';
import NotFound from './pages/NotFound/NotFound';

const App = () => (
  <Root>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ksiegowi" element={<Accountants />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Root>
);

export default App;