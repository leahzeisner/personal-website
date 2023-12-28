import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Landing from "./components/pages/Landing";
import Portfolio from "./components/pages/Portfolio";
import Work from "./components/pages/Work";
import Blog from "./components/pages/Blog";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen no-scrollbar overflow-y-auto snap-none font-['Liberation Mono']">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/work" element={<Work />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
