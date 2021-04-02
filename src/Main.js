import React, { useContext } from "react";
import ReactPageScroller from "react-page-scroller";
import "./App.css";
import {
  Landing,
  About,
  Experience,
  Project1,
  Project2,
  Project3,
  Contact,
} from "./components";
import { PageContext } from "./contexts/PageContext";

function Main() {
  const { page, setPage } = useContext(PageContext);

  const scrollPage = (newPage) => {
    if (newPage !== page) {
      setPage(newPage);
    }
  };

  return (
    <div id="main">
      <ReactPageScroller
        customPageNumber={page}
        pageOnChange={(e) => scrollPage(e)}
      >
        <Landing />
        <About />
        <Experience />
        <Project1 />
        <Project2 />
        <Project3 />
        <Contact />
      </ReactPageScroller>
    </div>
  );
}

export default Main;
