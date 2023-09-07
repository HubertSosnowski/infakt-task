import { Routes, Route } from 'react-router-dom'

import Root from "./views/components/Root/Root";
import Home from './views/Home/Home';
import Accountants from './views/Accountants/Accountants';
import NotFound from './views/NotFound/NotFound';

const App = () => (
  <Root>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ksiegowi" element={<Accountants />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Root>
);

export default App;