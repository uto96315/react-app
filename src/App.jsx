import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Booklist } from "./components/booklist";
import axios from "axios";

function App() {

  const languages = ["React", "SCSS", "SwiftUI"];

  const getDataFromAPI = async (keyword) => {
    const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };

  // const getDataFromAutors = async (keyword) => {
  //   const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=森+博嗣";
  //   const result = await axios.get(requestUrl);
  //   return result
  // } 

  return (
    <>
      <BrowserRouter>
        <h1>React app</h1>
        <ul>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>
            <Link to="/scss">SCSS</Link>
          </li>
          <li>
            <Link to="/swiftui">SwiftUI</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="react" element={<Booklist languages={languages[0]} getData={getDataFromAPI}/>}></Route>
          <Route path="scss" element={<Booklist languages={languages[1]} getData={getDataFromAPI}/>}></Route>
          <Route path="swiftui" element={<Booklist languages={languages[2]} getData={getDataFromAPI}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
