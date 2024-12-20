import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from "./Nav";
import Footer from "./Footer";
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Events from './Events';
import Community from './Community';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="events" element={<Events />} />
          <Route path="community" element={<Community />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}