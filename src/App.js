import {
  BrowserRouter,
  Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Fragment } from 'react';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
// import Watch from './component/Watch';
import Filter from './component/filter/filter';
import Home from "./component/home/home";
import Movie from "./component/movie/movie";

// import Link_DieuHuong from './component/Link_DieuHuong';
function App() {
  return (
    <div className="App">
      <div className="main">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/watch" element={<Watch />} /> */}
            <Route path="/filter" element={<Filter />} />
            <Route path="/movie/:slug" element={<Movie/>} />
          </Routes>
          <Footer />
        </BrowserRouter>

        {/* <Route exact path="/" component={Baner}/>
          <Route exact path="/" component={Nav}/> */}
        {/* 
          <Route path="/" component={Container}/>
          <Route path="/" component={Content}/>
          <Route path="/" component={ContentList}/>
          <Route path="/" component={ContentFooter}/>
          <Route path="/Watch" component={Watch}/>
          <Route path="/Filler" component={Filler}/> */}
        {/* <Nav />
          <Container />
          <Content />
          <ContentList />
          <ContentFooter /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );

}

export default App;
